"use client";

import { useEventsContext } from "@/app/context/eventsContext";


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

export default function TabelaEventos() {
  const { eventos } = useEventsContext();

  if (!eventos?.length) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <p style={{ fontSize: "16px" }}>📋 Nenhum evento para exibir</p>
        <p style={{ fontSize: "14px", marginTop: "8px" }}>
          Faça upload de uma planilha ou ajuste os filtros
        </p>
      </div>
    );
  }

  // Garante que só renderiza colunas que EXISTEM nos dados
  const colunasVisiveis = ORDEM_COLUNAS.filter(col =>
    Object.keys(eventos[0]).includes(col)
  );

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        marginTop: 16,
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
      }}
    >
      <table
        style={{
          width: "max-content",
          minWidth: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                background: "#fff",
                color: "#374151",
                whiteSpace: "nowrap",
                textAlign: "center",
                fontWeight: "700",
                position: "sticky",
                left: 0,
                zIndex: 2,
                minWidth: "60px",
              }}
            >
              ID
            </th>

            {/* Colunas dinâmicas */}
            {colunasVisiveis.map(col => (
              <th
                key={col}
                style={{
                  border: "1px solid #ccc",
                  padding: "12px",
                  background: "#f9fafb",
                  whiteSpace: "nowrap",
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {eventos.map((evento: { [x: string]: any }, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <tr 
                key={`evento-${index}`}
                style={{
                  transition: "background-color 0.2s",
                  backgroundColor: isEven ? "#fff" : "#fafafa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9fafb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isEven ? "#fff" : "#fafafa";
                }}
              >
                {/* Coluna ID fixa */}
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "12px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    fontWeight: "700",
                    background: "#fff",
                color: "#374151",
                    position: "sticky",
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  {index + 1}
                </td>

                {/* Colunas dinâmicas */}
                {colunasVisiveis.map(col => (
                  <td
                    key={`${index}-${col}`}
                    style={{
                      border: "1px solid #ddd",
                      padding: "12px",
                      whiteSpace: "nowrap",
                      background: isEven ? "#fff" : "#fafafa",
                    }}
                  >
                    {String(evento[col] ?? "")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Rodapé com contador */}
      <div
        style={{
          padding: "12px",
          background: "#f9fafb",
          borderTop: "2px solid #e5e7eb",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
          fontWeight: "500",
        }}
      >
        📊 Total: <strong style={{ color: "#4f46e5" }}>{eventos.length}</strong> evento(s) exibido(s)
      </div>
    </div>
  );
}