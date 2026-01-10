"use client";

import { useEffect, useState } from "react";
import UploadExcel from "../components/UploadExcel";
import TabelaEventos from "../components/TabelaEventos";
import Graficos from "../components/Graficos";
import { getEventos } from "../app/hooks/useEvents";

export default function Home() {
  const [eventos, setEventos] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getEventos();
      setEventos(data);
    }
    load();
  }, []);

  return (
    <main className="container">
      <h1>Dashboard Eventos 2026</h1>

      <UploadExcel />
      <Graficos eventos={eventos} />
      <TabelaEventos eventos={eventos} />
    </main>
  );
}
