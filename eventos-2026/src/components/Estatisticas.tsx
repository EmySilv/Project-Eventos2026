"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { useMemo } from "react";

export default function Estatisticas() {
  const { eventos, eventosTodos, colunas } = useEventsContext();

  // Calcula estatísticas
  const stats = useMemo(() => {
    // Total de eventos
    const total = eventosTodos?.length || 0;
    const filtrados = eventos?.length || 0;

    // Eventos pagos vs gratuitos
    const colunaPago = colunas?.includes("Pago") ? "Pago" : null;
    const eventosPagos = colunaPago
      ? eventos.filter((e: { [x: string]: { toString: () => string; }; }) => e[colunaPago]?.toString().toLowerCase() === "sim")
          .length
      : 0;

    // Patrocinados pela Vivo
    const colunaVivo = colunas?.includes("Vivo Patrocina")
      ? "Vivo Patrocina"
      : null;
    const vivoPatrocina = colunaVivo
      ? eventos.filter(
          (          e: { [x: string]: { toString: () => string; }; }) => e[colunaVivo]?.toString().toLowerCase() === "sim"
        ).length
      : 0;

    // Tipos de eventos únicos
    const colunaTipo = colunas?.includes("Tipo") ? "Tipo" : colunas?.[1];
    const tiposUnicos = colunaTipo
      ? new Set(eventos.map((e: { [x: string]: any; }) => e[colunaTipo]).filter(Boolean)).size
      : 0;

    return {
      total,
      filtrados,
      eventosPagos,
      vivoPatrocina,
      tiposUnicos,
    };
  }, [eventos, eventosTodos, colunas]);

  const cards = [
    {
      titulo: "Total de Eventos",
      valor: stats.total,
      icone: "📊",
      cor: "#4f46e5",
    },
    {
      titulo: "Eventos Filtrados",
      valor: stats.filtrados,
      icone: "🔍",
      cor: "#10b981",
    },
    {
      titulo: "Eventos Pagos",
      valor: stats.eventosPagos,
      icone: "💰",
      cor: "#f59e0b",
    },
    {
      titulo: "Vivo Patrocina",
      valor: stats.vivoPatrocina,
      icone: "🎯",
      cor: "#ef4444",
    },
    {
      titulo: "Tipos Diferentes",
      valor: stats.tiposUnicos,
      icone: "🏷️",
      cor: "#8b5cf6",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            borderLeft: `4px solid ${card.cor}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>{card.icone}</span>
            <h3
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#666",
                fontWeight: "500",
              }}
            >
              {card.titulo}
            </h3>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: "700",
              color: card.cor,
            }}
          >
            {card.valor}
          </p>
        </div>
      ))}
    </div>
  );
}