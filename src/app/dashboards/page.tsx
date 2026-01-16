"use client";

import { useEffect, useState } from "react";
import UploadExcel from "@/components/UploadExcel";
import Filtros from "@/components/Filtros";
import Graficos from "@/components/Graficos";
import TabelaEventos from "@/components/TabelaEventos";
import Estatisticas from "@/components/Estatisticas";
import { useEventsContext } from "@/app/context/eventsContext";
import "remixicon/fonts/remixicon.css";
import "@/app/css/page.css";

export default function PageDash() {
  const { loading } = useEventsContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="container">
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
            Eventos 2026
          </h1>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Carregando dashboard...
          </p>
        </header>
      </main>
    );
  }

  return (
    <main className="container">
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Dashboard interativo para visualização e gerenciamento de eventos</h1>
        
      </header>

      {/* Upload */}
      <section className="card">
        <h2>Upload da Planilha</h2>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
          Faça upload de um arquivo Excel (.xlsx ou .xls) com os dados dos
          eventos
        </p>
        <UploadExcel />
      </section>

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#eff6ff",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: 0 }}>⏳ Carregando dados...</p>
        </div>
      )}

      <section>
        <Estatisticas />
      </section>

      <section className="card">
        <h2>Filtros</h2>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
          Filtre os eventos por coluna específica ou faça uma busca global
        </p>

        <Filtros />
      </section>

      <section className="card">
        <h2>Visualizações em gráficos</h2>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
          Faça uma análise visual dos dados com diferentes tipos de gráficos
        </p>
        <Graficos />
      </section>

      <section className="card">
        <h2>Tabela de Dados</h2>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
          Visualize todos os eventos cadastrados
        </p>
        <TabelaEventos />
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", color: "#999" }}>
        <p> © Desenvolvido por Emilly Silva •  2026 Eventos </p>
      </footer>
    </main>
  );
}
