"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { useState, useMemo } from "react";
import "@/app/css/tabela-eventos.css";
import * as XLSX from "xlsx";

const ORDEM_COLUNAS = [
  "Nome",
  "Tema",
  "Tipo",
  "Data Inicial",
  "Data Final",
  "Local",
  "Cidade",
  "Empresa",
  "Formato",
  "Site Evento",
  "Tem Fornecedor Patrocinador",
  "Nome Fornecedor Patrocinador",
  "E-Mail Fornecedor Patrocinador",
  "Vivo Patrocina",
  "Pago",
  "Valor Inscrição",
];

type OrdenacaoConfig = {
  coluna: string;
  direcao: "asc" | "desc";
};

export default function TabelaEventos() {
  const { eventos } = useEventsContext();
  
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [ordenacao, setOrdenacao] = useState<OrdenacaoConfig | null>(null);

  if (!eventos?.length) {
    return (
      <div className="tabela-vazia">
        <i className="ri-inbox-line tabela-vazia-icon"></i>
        <p className="tabela-vazia-titulo">Nenhum evento para exibir</p>
        <p className="tabela-vazia-subtitulo">
          Faça upload de uma planilha ou ajuste os filtros
        </p>
      </div>
    );
  }

  // Garante que só renderiza colunas que EXISTEM nos dados
  const colunasVisiveis = ORDEM_COLUNAS.filter((col) =>
    Object.keys(eventos[0]).includes(col)
  );

  // Ordenação
  const eventosOrdenados = useMemo(() => {
    if (!ordenacao) return eventos;

    return [...eventos].sort((a, b) => {
      const valorA = String(a[ordenacao.coluna] || "");
      const valorB = String(b[ordenacao.coluna] || "");

      const comparacao = valorA.localeCompare(valorB, "pt-BR", {
        numeric: true,
      });

      return ordenacao.direcao === "asc" ? comparacao : -comparacao;
    });
  }, [eventos, ordenacao]);

  // Paginação
  const totalPaginas = Math.ceil(eventosOrdenados.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const eventosPaginados = eventosOrdenados.slice(indiceInicio, indiceFim);

  // Funções
  const handleOrdenar = (coluna: string) => {
    setOrdenacao((prev) => {
      if (prev?.coluna === coluna) {
        // Se já está ordenando por essa coluna, inverte a direção
        return {
          coluna,
          direcao: prev.direcao === "asc" ? "desc" : "asc",
        };
      }
      // Nova coluna, começa ascendente
      return { coluna, direcao: "asc" };
    });
  };

  const exportarParaExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(eventosOrdenados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Eventos");
    XLSX.writeFile(workbook, `eventos_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const getIconeOrdenacao = (coluna: string) => {
    if (ordenacao?.coluna !== coluna) {
      return <i className="ri-arrow-up-down-line"></i>;
    }
    return ordenacao.direcao === "asc" ? 
      <i className="ri-arrow-up-line"></i> : 
      <i className="ri-arrow-down-line"></i>;
  };

  return (
    <div className="tabela-container">
      {/* Controles da Tabela */}
      <div className="tabela-controles">
        <div className="controles-esquerda">
          <label className="controle-label">
            <i className="ri-list-settings-line"></i>
            Itens por página:
            <select
              value={itensPorPagina}
              onChange={(e) => {
                setItensPorPagina(Number(e.target.value));
                setPaginaAtual(1);
              }}
              className="controle-select"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </label>
        </div>

        <div className="controles-direita">
          <button
            onClick={exportarParaExcel}
            className="btn-exportar"
            title="Exportar para Excel"
          >
            <i className="ri-file-excel-2-line"></i>
            Exportar Excel
          </button>
        </div>
      </div>

      {/* Wrapper da Tabela */}
      <div className="tabela-wrapper">
        <table className="tabela-eventos">
          <thead>
            <tr>
              <th className="coluna-id">
                <i className="ri-hashtag"></i> ID
              </th>

              {colunasVisiveis.map((col) => (
                <th
                  key={col}
                  onClick={() => handleOrdenar(col)}
                  className="coluna-ordenavel"
                  title={`Ordenar por ${col}`}
                >
                  <div className="th-content">
                    <span>{col}</span>
                    <span className="icone-ordenacao">
                      {getIconeOrdenacao(col)}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {eventosPaginados.map((evento: { [x: string]: any }, index: number) => {
              const idGlobal = indiceInicio + index + 1;
              return (
                <tr key={`evento-${idGlobal}`} className="linha-evento">
                  <td className="coluna-id">{idGlobal}</td>

                  {colunasVisiveis.map((col) => (
                    <td key={`${idGlobal}-${col}`} className="celula-dado">
                      {String(evento[col] ?? "")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Rodapé com Paginação */}

        <div className="paginacao">
          <button
            onClick={() => setPaginaAtual(1)}
            disabled={paginaAtual === 1}
            className="btn-paginacao"
            title="Primeira página"
          >
            <i className="ri-skip-back-mini-line"></i>
          </button>

          <button
            onClick={() => setPaginaAtual((prev) => Math.max(1, prev - 1))}
            disabled={paginaAtual === 1}
            className="btn-paginacao"
            title="Página anterior"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>

          <span className="paginacao-info">
            Página <strong>{paginaAtual}</strong> de <strong>{totalPaginas}</strong>
          </span>

          <button
            onClick={() =>
              setPaginaAtual((prev) => Math.min(totalPaginas, prev + 1))
            }
            disabled={paginaAtual === totalPaginas}
            className="btn-paginacao"
            title="Próxima página"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          <button
            onClick={() => setPaginaAtual(totalPaginas)}
            disabled={paginaAtual === totalPaginas}
            className="btn-paginacao"
            title="Última página"
          >
            <i className="ri-skip-forward-mini-line"></i>
          </button>
        </div>
      </div>    
  );
}