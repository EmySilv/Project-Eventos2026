"use client";

import { useEventsContext } from "@/app/context/eventsContext";
import { useMemo } from "react";

export default function Estatisticas() {
  const { eventos, eventosTodos, colunas, filtros } = useEventsContext();

  // Calcula estatísticas USANDO OS DADOS FILTRADOS (eventos)
  const stats = useMemo(() => {
    // Total de eventos
    const total = eventosTodos?.length || 0;
    const filtrados = eventos?.length || 0;

    // Eventos pagos vs gratuitos - USANDO eventos (filtrados)
    const colunaPago = colunas?.includes("Pago") ? "Pago" : null;
    const eventosPagos = colunaPago
      ? eventos.filter((e: { [x: string]: { toString: () => string; }; }) => e[colunaPago]?.toString().toLowerCase() === "sim")
          .length
      : 0;

    // Patrocinados pela Vivo - USANDO eventos (filtrados)
    const colunaVivo = colunas?.includes("Vivo Patrocina")
      ? "Vivo Patrocina"
      : null;
    const vivoPatrocina = colunaVivo
      ? eventos.filter(
          (e: { [x: string]: { toString: () => string; }; }) => e[colunaVivo]?.toString().toLowerCase() === "sim"
        ).length
      : 0;

    // Tipos de eventos únicos - USANDO eventos (filtrados)
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

  // Determina se há filtros ativos
  const temFiltroAtivo = filtros?.coluna || filtros?.busca;

  const cards = [
    {
      titulo: "Total de Eventos",
      valor: stats.total,
      icone: "ri-bar-chart-box-line",
      cor: "#4f46e5",
    },
    {
      titulo: temFiltroAtivo ? "Eventos Filtrados" : "Eventos Disponíveis",
      valor: stats.filtrados,
      icone: "ri-filter-3-line",
      cor: "#10b981",
    },
    {
      titulo: "Eventos Pagos",
      valor: stats.eventosPagos,
      icone: "ri-money-dollar-circle-line",
      cor: "#f59e0b",
    },
    {
      titulo: "Vivo Patrocina",
      valor: stats.vivoPatrocina,
      icone: "ri-award-line",
      cor: "#ef4444",
    },
    {
      titulo: "Tipos Diferentes",
      valor: stats.tiposUnicos,
      icone: "ri-price-tag-3-line",
      cor: "#8b5cf6",
    },
  ];

  return (
    <>
      

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
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
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
              <i 
                className={card.icone}
                style={{ 
                  fontSize: "28px",
                  color: card.cor,
                }}
              ></i>
              <div style={{ flex: 1 }}>
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
    </>
  );
}