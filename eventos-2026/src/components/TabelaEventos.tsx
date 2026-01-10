"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { Key } from "react";

const ORDEM_COLUNAS = [
  "Cód",
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

  if (!eventos.length) return null;

  // 🔹 Garante que só renderiza colunas que EXISTEM nos dados
  const colunasVisiveis = ORDEM_COLUNAS.filter(col =>
    Object.keys(eventos[0]).includes(col)
  );

  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        marginTop: 16,
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
            {colunasVisiveis.map(col => (
              <th
                key={col}
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  background: "#f5f5f5",
                  whiteSpace: "nowrap",
                  textAlign: "left",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {eventos.map((evento: { [x: string]: any; }, index: Key | null | undefined) => (
            <tr key={index}>
              {colunasVisiveis.map(col => (
                <td
                  key={col}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {String(evento[col] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
