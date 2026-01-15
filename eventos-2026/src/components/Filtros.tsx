"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { useState, useMemo } from "react";
import "@/app/css/filtros.css";

export default function Filtros() {
  const { eventos, eventosTodos, colunas, setFiltros, filtros } = useEventsContext();

  const [colunaSelecionada, setColunaSelecionada] = useState<string>("");
  const [valorSelecionado, setValorSelecionado] = useState<string>("");
  const [textoBusca, setTextoBusca] = useState<string>("");
  const [buscaGlobal, setBuscaGlobal] = useState<string>("");

  // Valores únicos da coluna selecionada
  const valoresUnicos = useMemo(() => {
    if (!colunaSelecionada || !eventosTodos?.length) return [];

    const valores = new Set<string>();
    eventosTodos.forEach((evento: { [x: string]: any }) => {
      const valor = evento[colunaSelecionada];
      if (valor) valores.add(String(valor));
    });

    return Array.from(valores).sort();
  }, [colunaSelecionada, eventosTodos]);

  // Aplica filtros quando usuário seleciona
  const aplicarFiltros = () => {
    if (!colunaSelecionada && !buscaGlobal) {
      alert("⚠️ Selecione pelo menos um filtro ou faça uma busca!");
      return;
    }

    setFiltros({
      coluna: colunaSelecionada,
      valor: valorSelecionado,
      busca: buscaGlobal,
    });
  };

  const limparFiltros = () => {
    setColunaSelecionada("");
    setValorSelecionado("");
    setTextoBusca("");
    setBuscaGlobal("");
    setFiltros({ coluna: "", valor: "", busca: "" });
  };

  const selecionarTodos = () => {
    setValorSelecionado("");
    setBuscaGlobal("");
    setFiltros({
      coluna: colunaSelecionada,
      valor: "",
      busca: "",
    });
  };

  return (
    <div className="filtros-container">
      {/* Busca Global */}
      <div className="busca-global-section">
        <h3 className="section-subtitle">
          <i className="ri-search-line"></i>
          Busca Global
        </h3>
        <div className="busca-input-group">
          <i className="ri-search-2-line input-icon"></i>
          <input
            type="text"
            value={buscaGlobal}
            onChange={(e) => setBuscaGlobal(e.target.value)}
            placeholder="Digite para buscar em todos os campos..."
            className="busca-input"
            onKeyPress={(e) => {
              if (e.key === "Enter") aplicarFiltros();
            }}
          />
          {buscaGlobal && (
            <button
              onClick={() => setBuscaGlobal("")}
              className="clear-search-btn"
              title="Limpar busca"
            >
              <i className="ri-close-line"></i>
            </button>
          )}
        </div>
      </div>

      {/* Filtro por Categoria */}
      <div className="filtro-categoria-section">
        <h3 className="section-subtitle">
          <i className="ri-filter-3-line"></i>
          Filtrar por Categoria
        </h3>

        <div className="filtros-grid">
          <div className="form-group">
            <label className="form-label">
              Selecione a coluna:
            </label>
            <select
              value={colunaSelecionada}
              onChange={(e) => {
                setColunaSelecionada(e.target.value);
                setValorSelecionado("");
              }}
              className="form-select"
            >
              <option value="">Nenhum filtro (Visão Geral)</option>
              {colunas?.map((col: string) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>

          {colunaSelecionada && valoresUnicos.length > 0 && (
            <div className="form-group">
              <label className="form-label">
                <i className="ri-checkbox-multiple-line"></i>
                Selecione o valor:
              </label>
              <select
                value={valorSelecionado}
                onChange={(e) => setValorSelecionado(e.target.value)}
                className="form-select"
              >
                <option value="">Todos os itens (visão agregada)</option>
                {valoresUnicos.map((valor) => (
                  <option key={valor} value={valor}>
                    {valor}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="acoes-buttons">
        <button
          onClick={aplicarFiltros}
          className="btn btn-primary"
          disabled={!colunaSelecionada && !buscaGlobal}
        >
          <i className="ri-check-line"></i>
          Aplicar Filtros
        </button>

        {colunaSelecionada && (
          <button
            onClick={selecionarTodos}
            className="btn btn-success"
          >
            <i className="ri-bar-chart-grouped-line"></i>
            Ver Todos os Itens Agregados
          </button>
        )}

        <button
          onClick={limparFiltros}
          className="btn btn-danger"
        >
          <i className="ri-delete-bin-line"></i>
          Limpar Tudo
        </button>
      </div>

      {/* Indicador de Filtros Ativos */}
      {(colunaSelecionada || buscaGlobal) && (
        <div className="filtros-ativos">
          <div className="filtros-ativos-header">
            <i className="ri-filter-2-fill"></i>
            <strong>Filtros Ativos:</strong>
          </div>

          <div className="filtros-ativos-content">
            {colunaSelecionada && (
              <div className="filtro-ativo-item">
                <i className="ri-folder-line"></i>
                <strong>Categoria:</strong> {colunaSelecionada}
                {valorSelecionado ? (
                  <span className="filtro-valor">
                    = "{valorSelecionado}"
                  </span>
                ) : (
                  <span className="filtro-valor">
                    Todos os itens
                  </span>
                )}
              </div>
            )}

            {buscaGlobal && (
              <div className="filtro-ativo-item">
                <i className="ri-search-eye-line"></i>
                <strong>Busca:</strong>
                <span className="filtro-valor">
                  "{buscaGlobal}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}