"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { useState, useMemo } from "react";

export default function Filtros() {
  const { eventos, eventosTodos, colunas, setFiltros, filtros } = useEventsContext();

  const [colunaSelecionada, setColunaSelecionada] = useState<string>("");
  const [valorSelecionado, setValorSelecionado] = useState<string>("");
  const [textoBusca, setTextoBusca] = useState<string>("");

  // Valores únicos da coluna selecionada
  const valoresUnicos = useMemo(() => {
    if (!colunaSelecionada || !eventosTodos?.length) return [];

    const valores = new Set<string>();
    eventosTodos.forEach((evento: { [x: string]: any; }) => {
      const valor = evento[colunaSelecionada];
      if (valor) valores.add(String(valor));
    });

    return Array.from(valores).sort();
  }, [colunaSelecionada, eventosTodos]);

  // Aplica filtros quando usuário seleciona
  const aplicarFiltros = () => {
    setFiltros({
      coluna: colunaSelecionada,
      valor: valorSelecionado,
      busca: textoBusca,
    });
  };

  const limparFiltros = () => {
    setColunaSelecionada("");
    setValorSelecionado("");
    setTextoBusca("");
    setFiltros({ coluna: "", valor: "", busca: "" });
  };

  // Selecionar todos os itens (mostra apenas gráficos agregados)
  const selecionarTodos = () => {
    setValorSelecionado("");
    setTextoBusca("");
    setFiltros({
      coluna: colunaSelecionada,
      valor: "", // Vazio = todos os valores
      busca: "",
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Seção 1: Filtro por Coluna */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span style={{ fontSize: "20px" }}>🎯</span>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
            Filtrar por Categoria
          </h3>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#666" }}>
              Selecione a coluna:
            </label>
            <select
              value={colunaSelecionada}
              onChange={e => {
                setColunaSelecionada(e.target.value);
                setValorSelecionado("");
              }}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "2px solid #e5e7eb",
                fontSize: "14px",
                cursor: "pointer",
                background: "#fff",
              }}
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
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#666" }}>
                Selecione o valor:
              </label>
              <select
                value={valorSelecionado}
                onChange={e => setValorSelecionado(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "2px solid #e5e7eb",
                  fontSize: "14px",
                  cursor: "pointer",
                  background: "#fff",
                }}
              >
                <option value="">📊 Todos os itens (visão agregada)</option>
                {valoresUnicos.map(valor => (
                  <option key={valor} value={valor}>
                    {valor}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Divisor */}
      <div style={{ borderTop: "1px solid #e5e7eb" }} />

      {/* Seção 2: Busca Global */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span style={{ fontSize: "20px" }}>🔍</span>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
            Busca Rápida
          </h3>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "#666" }}>
            Pesquisar em todas as colunas:
          </label>
          <input
            type="text"
            placeholder="Digite qualquer termo para buscar..."
            value={textoBusca}
            onChange={e => setTextoBusca(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "2px solid #e5e7eb",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      {/* Botões de Ação */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={aplicarFiltros}
          style={{
            padding: "10px 20px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>✅</span>
          Aplicar Filtros
        </button>

        {colunaSelecionada && (
          <button
            onClick={selecionarTodos}
            style={{
              padding: "10px 20px",
              background: "#10b981",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>📊</span>
            Ver Todos os Itens Agregados
          </button>
        )}

        <button
          onClick={limparFiltros}
          style={{
            padding: "10px 20px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>🗑️</span>
          Limpar Tudo
        </button>
      </div>

      {/* Indicador de Filtros Ativos */}
      {(colunaSelecionada || textoBusca) && (
        <div
          style={{
            padding: "15px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span style={{ fontSize: "18px" }}>🎯</span>
            <strong style={{ fontSize: "15px" }}>Filtros Ativos:</strong>
          </div>
          
          <div style={{ paddingLeft: "30px" }}>
            {colunaSelecionada && (
              <div style={{ marginBottom: "5px" }}>
                <strong>📋 Categoria:</strong> {colunaSelecionada}
                {valorSelecionado ? (
                  <span style={{ marginLeft: "10px", background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: "4px" }}>
                    = "{valorSelecionado}"
                  </span>
                ) : (
                  <span style={{ marginLeft: "10px", background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: "4px" }}>
                    Todos os itens
                  </span>
                )}
              </div>
            )}
            
            {textoBusca && (
              <div>
                <strong>🔍 Busca:</strong>{" "}
                <span style={{ background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: "4px" }}>
                  "{textoBusca}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div
        style={{
          padding: "12px",
          background: "#f0fdf4",
          borderRadius: "8px",
          fontSize: "13px",
          color: "#166534",
          border: "1px solid #bbf7d0",
        }}
      >
        <strong>💡 Dica:</strong> Selecione "Todos os itens" para ver gráficos agregados por categoria, 
        ou escolha um valor específico para análise detalhada.
      </div>
    </div>
  );
}