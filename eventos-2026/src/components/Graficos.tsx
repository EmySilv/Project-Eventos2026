"use client";

import "@/app/lib/chart"; // 🔥 registra o Chart.js
import { Bar } from "react-chartjs-2";
import { useEvents } from "@/app/hooks/useEvents";

export default function Graficos() {
  const { eventos, colunas } = useEvents();

  if (!eventos.length || !colunas.length) {
    return <p>Sem dados para exibir gráficos</p>;
  }

  // escolhe automaticamente a primeira coluna categórica
  const eixoX = colunas[0];

  // agrupa dados
  const agrupado: Record<string, number> = {};

  eventos.forEach(item => {
    const valor = item[eixoX];
    if (!valor) return;

    agrupado[valor] = (agrupado[valor] || 0) + 1;
  });

  const data = {
    labels: Object.keys(agrupado),
    datasets: [
      {
        label: `Distribuição por ${eixoX}`,
        data: Object.values(agrupado),
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: 600 }}>
      <Bar data={data} />
    </div>
  );
}
