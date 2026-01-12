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
                <option value="">Todos os itens (visão agregada)</option>
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
              background: "#28b183",
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
            Ver Todos os Itens Agregados
          </button>
        )}

        <button
          onClick={limparFiltros}
          style={{
            padding: "10px 20px",
            background: "#bd2121",
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
            <strong style={{ fontSize: "15px" }}>Filtros Ativos:</strong>
          </div>
          
          <div style={{ paddingLeft: "30px" }}>
            {colunaSelecionada && (
              <div style={{ marginBottom: "5px" }}>
                <strong> Categoria:</strong> {colunaSelecionada}
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
                <strong> Busca:</strong>{" "}
                <span style={{ background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: "4px" }}>
                  "{textoBusca}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}