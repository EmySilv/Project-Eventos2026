"use client";

import * as XLSX from "xlsx";
import { useState, useRef } from "react";
import { useEventsContext } from "@/app/context/eventsContext";

export default function UploadExcel() {
  const { salvarFirebase, loading } = useEventsContext();

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [mensagem, setMensagem] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    // Reseta status ao selecionar novo arquivo
    if (selectedFile) {
      setStatus("idle");
      setMensagem("");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const processarArquivo = async () => {
    if (!file) {
      setStatus("error");
      setMensagem("⚠️ Selecione um arquivo antes de processar");
      return;
    }

    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
      setStatus("error");
      setMensagem("❌ Arquivo não suportado. Envie um Excel (.xlsx ou .xls)");
      return;
    }

    try {
      setStatus("loading");
      setMensagem(
        "⏳ Processando arquivo... Isso pode levar alguns segundos"
      );

      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      if (json.length === 0) {
        setStatus("error");
        setMensagem("❌ Planilha vazia! Adicione dados antes de fazer upload.");
        return;
      }

      await salvarFirebase(json);

      setStatus("success");
      setMensagem(
        `✅ Upload concluído! ${json.length} eventos salvos com sucesso.`
      );

      // Limpa o arquivo após 5 segundos
      setTimeout(() => {
        setFile(null);
        setStatus("idle");
        setMensagem("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMensagem(
        `❌ Erro ao processar arquivo: ${error instanceof Error ? error.message : "Erro desconhecido"}`
      );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      
      {/* Área de Upload Estilizada */}
      <div>
        <label
          style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#374151",
          }}
        >
          📁 Selecione o arquivo Excel:
        </label>
        
        {/* Input escondido */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {/* Área de drag and drop / clique */}
        <div
          onClick={handleButtonClick}
          style={{
            border: file ? "2px solid #10b981" : "2px dashed #d1d5db",
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
            cursor: "pointer",
            background: file 
              ? "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" 
              : "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            if (!file) {
              e.currentTarget.style.borderColor = "#4f46e5";
              e.currentTarget.style.background = "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)";
            }
          }}
          onMouseLeave={(e) => {
            if (!file) {
              e.currentTarget.style.borderColor = "#d1d5db";
              e.currentTarget.style.background = "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)";
            }
          }}
        >
          {/* Ícone */}
          <div
            style={{
              fontSize: "48px",
              marginBottom: "15px",
              transition: "transform 0.3s ease",
            }}
          >
            {file ? "✅" : "📤"}
          </div>

          {/* Texto */}
          {file ? (
            <div>
              <p
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#065f46",
                }}
              >
                {file.name}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#059669",
                }}
              >
                {(file.size / 1024).toFixed(2)} KB
              </p>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "13px",
                  color: "#047857",
                }}
              >
                Clique para selecionar outro arquivo
              </p>
            </div>
          ) : (
            <div>
              <p
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                Clique para selecionar arquivo
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                ou arraste e solte aqui
              </p>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "13px",
                  color: "#9ca3af",
                }}
              >
                Formatos aceitos: .xlsx, .xls
              </p>
            </div>
          )}
        </div>
      </div>
          
         

      {/* Botão de processar - Estilizado */}
      <button
        onClick={processarArquivo}
        disabled={loading || !file}
        style={{
          padding: "16px 24px",
          background: file && !loading 
            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
            : "#cbd5e1",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: file && !loading ? "pointer" : "not-allowed",
          fontWeight: "700",
          fontSize: "16px",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          boxShadow: file && !loading ? "0 4px 15px rgba(102, 126, 234, 0.4)" : "none",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          if (file && !loading) {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = file && !loading ? "0 4px 15px rgba(102, 126, 234, 0.4)" : "none";
        }}
      >
        {loading ? (
          <>
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "3px solid rgba(255,255,255,0.3)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            Processando...
          </>
        
        ) : (
          "🚀 Processar Upload"
        )}
      </button>

      {/* Mensagem de status - Estilizada */}
      {status !== "idle" && (
        <div
          style={{
            padding: "16px 20px",
            background:
              status === "error"
                ? "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
                : status === "success"
                ? "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)"
                : "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
            border: `2px solid ${
              status === "error"
                ? "#f87171"
                : status === "success"
                ? "#34d399"
                : "#60a5fa"
            }`,
            borderRadius: "10px",
            color:
              status === "error"
                ? "#991b1b"
                : status === "success"
                ? "#065f46"
                : "#1e40af",
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <span style={{ fontSize: "20px" }}>
            {status === "error" ? "⚠️" : status === "success" ? "✅" : "ℹ️"}
          </span>
          {mensagem}
        </div>
      )}

    </div>
  );
}