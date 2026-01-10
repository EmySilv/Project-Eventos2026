"use client";

import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Graficos({ eventos }: any) {

  const categorias = [...new Set(eventos.map((e:any) => e.categoria))];

  return (
    <div className="card">
      <h2>Gráficos</h2>

      <Pie data={{
        labels: categorias,
        datasets: [{
          data: categorias.map(c =>
            eventos.filter((e:any) => e.categoria === c).length
          )
        }]
      }} />

      <Bar data={{
        labels: ["Ativo", "Finalizado", "Cancelado"],
        datasets: [{
          data: ["Ativo", "Finalizado", "Cancelado"].map(s =>
            eventos.filter((e:any) => e.status === s).length
          )
        }]
      }} />
    </div>
  );
}
