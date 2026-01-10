"use client";

import UploadExcel from "@/components/UploadExcel";
import Filtros from "@/components/Filtros";
import Graficos from "@/components/Graficos";
import TabelaEventos from "@/components/TabelaEventos";

export default function Home() {
  return (
    <main className="container">
      <h1>Eventos 2026</h1>

      <section className="card">
        <h2>Upload da Planilha</h2>
        <UploadExcel />
      </section>

      <section className="card">
        <h2>Filtros</h2>
        <Filtros />
      </section>

      <section className="card">
        <h2>Visualizações</h2>
        <Graficos />
      </section>

      <section className="card">
        <h2>Dados</h2>
        <TabelaEventos />
      </section>
    </main>
  );
}
