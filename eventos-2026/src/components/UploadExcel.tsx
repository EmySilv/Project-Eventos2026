"use client";

import * as XLSX from "xlsx";
import { useState } from "react";
import { useEventsContext } from "@/app/context/eventsContext";

export default function UploadExcel() {
  const { salvarFirebase, loading } = useEventsContext();

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [mensagem, setMensagem] = useState("");

  const processarArquivo = async () => {
    if (!file) return;

    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
      setStatus("error");
      setMensagem("Arquivo não suportado. Envie um Excel.");
      return;
    }

    try {
      setStatus("loading");
      setMensagem("Processando e enviando dados para o banco...");

      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      await salvarFirebase(json);

      setStatus("success");
      setMensagem("Arquivo salvo com sucesso!");
    } catch {
      setStatus("error");
      setMensagem("Erro ao salvar os dados no banco.");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={processarArquivo}
        disabled={loading}
        style={{ marginTop: 8 }}
      >
        Processar arquivo
      </button>

      {status !== "idle" && (
        <p
          style={{
            marginTop: 8,
            color: status === "error" ? "red" : "green",
          }}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}