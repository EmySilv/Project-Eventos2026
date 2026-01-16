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

  // Função melhorada para formatar datas (SEM horário)
  const formatarData = (valor: any): string => {
    if (!valor) return "";
    
    try {
      let data: Date | null = null;
      
      // Se for um Timestamp do Firestore/Firebase
      if (valor && typeof valor === 'object' && 'seconds' in valor) {
        // Converte Timestamp para Date usando os segundos
        data = new Date(valor.seconds * 1000);
      }
      // Se for um objeto Date
      else if (valor instanceof Date) {
        data = valor;
      }
      // Se for número (serial do Excel)
      else if (typeof valor === 'number') {
        // Converte serial do Excel para data
        const diasDesde1900 = valor - 25569; // 25569 é a diferença entre 1900 e 1970
        data = new Date(diasDesde1900 * 86400 * 1000);
      }
      // Se for string
      else if (typeof valor === 'string') {
        const valorString = valor.trim();
        
        // Se contém "Timestamp(" é um Timestamp como string
        if (valorString.includes('Timestamp(')) {
          // Extrai os segundos do formato "Timestamp(seconds=1777345228, nanoseconds=0)"
          const match = valorString.match(/seconds=(\d+)/);
          if (match && match[1]) {
            data = new Date(parseInt(match[1]) * 1000);
          }
        }
        // Se já está no formato dd/mm/yyyy, retorna
        else if (/^\d{2}\/\d{2}\/\d{4}$/.test(valorString)) {
          return valorString;
        }
        // Tenta parsear a string
        else {
          data = new Date(valorString);
        }
      }
      
      // Se conseguiu criar uma data válida
      if (data && !isNaN(data.getTime())) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
      }
      
      // Se não conseguiu converter, retorna o valor original como string
      return String(valor);
    } catch {
      return String(valor);
    }
  };

  // Função melhorada para verificar se uma linha está vazia
  const linhaEstaVazia = (evento: any): boolean => {
    if (!evento || typeof evento !== 'object') return true;
    
    // Pega todos os valores do objeto
    const valores = Object.values(evento);
    
    // Se não tem valores, está vazia
    if (valores.length === 0) return true;
    
    // Verifica se TODOS os valores são vazios/nulos/undefined
    return valores.every(valor => {
      // Null ou undefined
      if (valor === null || valor === undefined) return true;
      
      // Converte para string e remove espaços
      const valorString = String(valor).trim().toLowerCase();
      
      // Considera vazio se for: "", "null", "undefined", "nan"
      return valorString === "" || 
             valorString === "null" || 
             valorString === "undefined" || 
             valorString === "nan";
    });
  };

  // Filtra eventos vazios
  const eventosFiltrados = useMemo(() => {
    if (!eventos?.length) return [];
    
    const filtrados = eventos.filter((evento: any) => {
      const estaVazia = linhaEstaVazia(evento);
      return !estaVazia;
    });
    
    return filtrados;
  }, [eventos]);

  // Garante que só renderiza colunas que EXISTEM nos dados
  const colunasVisiveis = useMemo(() => {
    if (!eventosFiltrados?.length) return [];
    return ORDEM_COLUNAS.filter((col) =>
      Object.keys(eventosFiltrados[0]).includes(col)
    );
  }, [eventosFiltrados]);

  // Identificar colunas de data
  const colunasData = useMemo(() => {
    return colunasVisiveis.filter(col => 
      col.toLowerCase().includes("data")
    );
  }, [colunasVisiveis]);

  // Ordenação
  const eventosOrdenados = useMemo(() => {
    if (!ordenacao) return eventosFiltrados;

    return [...eventosFiltrados].sort((a, b) => {
      const valorA = String(a[ordenacao.coluna] || "");
      const valorB = String(b[ordenacao.coluna] || "");

      const comparacao = valorA.localeCompare(valorB, "pt-BR", {
        numeric: true,
      });

      return ordenacao.direcao === "asc" ? comparacao : -comparacao;
    });
  }, [eventosFiltrados, ordenacao]);

  if (!eventosFiltrados?.length) {
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

  // Paginação
  const totalPaginas = Math.ceil(eventosOrdenados.length / itensPorPagina);
  const indiceInicio = (paginaAtual - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const eventosPaginados = eventosOrdenados.slice(indiceInicio, indiceFim);

  // Funções
  const handleOrdenar = (coluna: string) => {
    setOrdenacao((prev) => {
      if (prev?.coluna === coluna) {
        return {
          coluna,
          direcao: prev.direcao === "asc" ? "desc" : "asc",
        };
      }
      return { coluna, direcao: "asc" };
    });
  };

  const exportarParaExcel = () => {
    // Prepara os dados com datas formatadas para exportação
    const dadosParaExportar = eventosOrdenados.map((evento: { [x: string]: any; }) => {
      const eventoFormatado: any = {};
      Object.keys(evento).forEach(coluna => {
        if (colunasData.includes(coluna)) {
          eventoFormatado[coluna] = formatarData(evento[coluna]);
        } else {
          eventoFormatado[coluna] = evento[coluna];
        }
      });
      return eventoFormatado;
    });

    const worksheet = XLSX.utils.json_to_sheet(dadosParaExportar);
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

  // Formata o valor da célula
  const formatarValorCelula = (coluna: string, valor: any): string => {
    if (colunasData.includes(coluna)) {
      return formatarData(valor);
    }
    return String(valor ?? "");
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
                      {formatarValorCelula(col, evento[col])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Rodapé com Paginação */}
      <div className="tabela-rodape">
        <div className="rodape-info">
          <i className="ri-information-line"></i>
          Mostrando <strong>{indiceInicio + 1}</strong> a <strong>{Math.min(indiceFim, eventosOrdenados.length)}</strong> de <strong>{eventosOrdenados.length}</strong> eventos
        </div>

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
    </div>    
  );
}