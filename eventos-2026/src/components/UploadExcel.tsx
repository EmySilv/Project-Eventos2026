"use client";

import * as XLSX from "xlsx";
import { useState, useRef } from "react";
import { useEventsContext } from "@/app/context/eventsContext";
import "@/app/css/upload-excel.css";

export default function UploadExcel() {
  const { salvarFirebase, excluirTodosDados, loading, eventosTodos } =
    useEventsContext();

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [mensagem, setMensagem] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Estados para verificação de duplicados
  const [dadosProcessados, setDadosProcessados] = useState<{
    todos: any[];
    unicos: any[];
  } | null>(null);
  const [duplicados, setDuplicados] = useState<any[]>([]);
  const [mostrarModalDuplicados, setMostrarModalDuplicados] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validação de arquivo
  const validarArquivo = (arquivo: File): string | null => {
    // Verifica extensão
    const extensoesValidas = [".xlsx", ".xls"];
    const extensao = arquivo.name.substring(arquivo.name.lastIndexOf("."));

    if (!extensoesValidas.includes(extensao.toLowerCase())) {
      return "Formato inválido! Use apenas arquivos .xlsx ou .xls";
    }

    // Verifica tamanho (máximo 10MB)
    const tamanhoMaximo = 10 * 1024 * 1024; // 10MB
    if (arquivo.size > tamanhoMaximo) {
      return "Arquivo muito grande! Tamanho máximo: 10MB";
    }

    // Verifica se o arquivo não está vazio
    if (arquivo.size === 0) {
      return "Arquivo vazio! Selecione um arquivo válido";
    }

    return null; // Arquivo válido
  };

  // Função para verificar duplicados
  const verificarDuplicados = (novosDados: any[]) => {
    if (!eventosTodos || eventosTodos.length === 0) {
      return { duplicados: [], dadosUnicos: novosDados };
    }

    const duplicadosEncontrados: any[] = [];
    const dadosUnicos: any[] = [];

    novosDados.forEach((novoEvento, index) => {
      // Verifica se existe um evento com as mesmas propriedades principais
      const isDuplicado = eventosTodos.some((eventoExistente: any) => {
        // CUSTOMIZE AQUI: Defina os campos que identificam um duplicado
        const nomeIgual = String(eventoExistente.Nome || "").toLowerCase().trim() === 
                         String(novoEvento.Nome || "").toLowerCase().trim();
        
        const dataIgual = String(eventoExistente["Data Inicial"] || "").trim() === 
                         String(novoEvento["Data Inicial"] || "").trim();
        
        const localIgual = String(eventoExistente.Local || "").toLowerCase().trim() === 
                          String(novoEvento.Local || "").toLowerCase().trim();

        // Considera duplicado se TODOS os campos principais coincidirem
        return nomeIgual && dataIgual && localIgual;
      });

      if (isDuplicado) {
        duplicadosEncontrados.push({ 
          ...novoEvento, 
          linhaOriginal: index + 2 // +2 porque linha 1 é cabeçalho e index começa em 0
        });
      } else {
        dadosUnicos.push(novoEvento);
      }
    });

    return { duplicados: duplicadosEncontrados, dadosUnicos };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      const erro = validarArquivo(selectedFile);

      if (erro) {
        setStatus("error");
        setMensagem(erro);
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setStatus("idle");
      setMensagem("");
      setDadosProcessados(null);
      setDuplicados([]);
    }
  };

  // Drag and Drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const erro = validarArquivo(droppedFile);

      if (erro) {
        setStatus("error");
        setMensagem(erro);
        setFile(null);
        return;
      }

      setFile(droppedFile);
      setStatus("idle");
      setMensagem("");
      setDadosProcessados(null);
      setDuplicados([]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const processarArquivo = async () => {
    if (!file) {
      setStatus("error");
      setMensagem("Selecione um arquivo antes de processar");
      return;
    }

    try {
      setStatus("loading");
      setMensagem("Processando arquivo... Isso pode levar alguns segundos");

      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { cellDates: true });
      
      // Verifica se há pelo menos uma planilha
      if (workbook.SheetNames.length === 0) {
        throw new Error("Arquivo sem planilhas válidas");
      }

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      // Validações adicionais
      if (json.length === 0) {
        setStatus("error");
        setMensagem("Planilha vazia! Adicione dados antes de fazer upload.");
        return;
      }

      if (json.length > 10000) {
        setStatus("error");
        setMensagem(
          "Muitos dados! Máximo de 10.000 linhas. Seu arquivo tem " +
            json.length +
            " linhas."
        );
        return;
      }

      // Verifica se há colunas
      const primeiraLinha: any = json[0];
      if (Object.keys(primeiraLinha).length === 0) {
        setStatus("error");
        setMensagem("Arquivo sem colunas válidas!");
        return;
      }

      // Verifica duplicados
      const { duplicados: duplicadosEncontrados, dadosUnicos } = verificarDuplicados(json);

      setDadosProcessados({ todos: json, unicos: dadosUnicos });
      setDuplicados(duplicadosEncontrados);

      // Se encontrou duplicados, mostra o modal
      if (duplicadosEncontrados.length > 0) {
        setMostrarModalDuplicados(true);
        setStatus("idle");
        setMensagem("");
      } else {
        // Se não há duplicados, salva direto
        await confirmarSalvamento(dadosUnicos);
      }

    } catch (error) {
      setStatus("error");
      setMensagem(
        `Erro ao processar arquivo: ${
          error instanceof Error ? error.message : "Erro desconhecido"
        }`
      );
      console.error("Erro detalhado:", error);
    }
  };

  const confirmarSalvamento = async (dados: any[]) => {
    try {
      setStatus("loading");
      setMensagem("Salvando dados no Firebase...");
      setMostrarModalDuplicados(false);

      await salvarFirebase(dados);

      setStatus("success");
      setMensagem(`Upload concluído! ${dados.length} eventos salvos com sucesso.`);

      setTimeout(() => {
        setFile(null);
        setStatus("idle");
        setMensagem("");
        setDadosProcessados(null);
        setDuplicados([]);
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMensagem(
        `Erro ao salvar: ${
          error instanceof Error ? error.message : "Erro desconhecido"
        }`
      );
    }
  };

  const salvarComDuplicados = async () => {
    if (dadosProcessados) {
      await confirmarSalvamento(dadosProcessados.todos);
    }
  };

  const salvarSemDuplicados = async () => {
    if (dadosProcessados) {
      await confirmarSalvamento(dadosProcessados.unicos);
    }
  };

  const handleExcluirDados = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 5000);
      return;
    }

    try {
      setStatus("loading");
      setMensagem("Excluindo todos os dados...");

      await excluirTodosDados();

      setStatus("success");
      setMensagem("Todos os dados foram excluídos com sucesso!");
      setConfirmDelete(false);

      setTimeout(() => {
        setStatus("idle");
        setMensagem("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMensagem(
        `Erro ao excluir dados: ${
          error instanceof Error ? error.message : "Erro desconhecido"
        }`
      );
    }
  };

  const formatarTamanho = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="upload-container">
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
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`upload-area ${file ? "upload-area-success" : ""} ${
          dragActive ? "upload-area-drag" : ""
        }`}
      >
        <div className="upload-icon">
          {file ? (
            <i className="ri-checkbox-circle-line"></i>
          ) : dragActive ? (
            <i className="ri-download-cloud-line"></i>
          ) : (
            <i className="ri-upload-cloud-2-line"></i>
          )}
        </div>

        {file ? (
          <div className="upload-file-info">
            <p className="upload-filename">
              <i className="ri-file-excel-2-line"></i>
              {file.name}
            </p>
            <p className="upload-filesize">
              <i className="ri-database-2-line"></i>
              {formatarTamanho(file.size)}
            </p>
            <p className="upload-hint">Clique para selecionar outro arquivo</p>
          </div>
        ) : (
          <div className="upload-placeholder">
            <p className="upload-title">
              {dragActive
                ? "Solte o arquivo aqui"
                : "Clique para selecionar arquivo"}
            </p>
            <p className="upload-subtitle">ou arraste e solte aqui</p>
            <p className="upload-formats">
              Formatos aceitos: .xlsx, .xls
            </p>
            <p className="upload-limit">
              Tamanho máximo: 10MB
            </p>
          </div>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="upload-actions">
        <button
          onClick={processarArquivo}
          disabled={loading || !file}
          className="btn-processar"
        >
          {loading ? (
            <>
              <i className="ri-loader-4-line spinner-icon"></i>
              Processando...
            </>
          ) : (
            <>
              <i className="ri-rocket-line"></i>
              Processar Upload
            </>
          )}
        </button>

        {eventosTodos && eventosTodos.length > 0 && (
          <button
            onClick={handleExcluirDados}
            disabled={loading}
            className={`btn-excluir ${confirmDelete ? "btn-excluir-confirm" : ""}`}
          >
            {confirmDelete ? (
              <>
                <i className="ri-alert-line"></i>
                Confirmar Exclusão
              </>
            ) : (
              <>
                <i className="ri-delete-bin-2-line"></i>
                Excluir Todos os Dados
              </>
            )}
          </button>
        )}
      </div>

      {/* Aviso de confirmação */}
      {confirmDelete && (
        <div className="alerta-confirmacao">
          <i className="ri-error-warning-line alerta-icon"></i>
          <div>
            <strong>ATENÇÃO:</strong> Esta ação é irreversível! Clique novamente
            no botão vermelho para confirmar a exclusão de todos os dados.
          </div>
        </div>
      )}

      {/* Mensagem de status */}
      {status !== "idle" && (
        <div className={`alerta alerta-${status}`}>
          <i className={`alerta-icon ${
            status === "error" ? "ri-error-warning-line" : 
            status === "success" ? "ri-checkbox-circle-line" : 
            "ri-information-line"
          }`}></i>
          {mensagem}
        </div>
      )}

      {/* Modal de Duplicados */}
      {mostrarModalDuplicados && (
        <div className="modal-duplicados-overlay">
          <div className="modal-duplicados-content">
            <div className="modal-duplicados-header">
              <h2>
                <i className="ri-error-warning-line"></i>
                Dados Duplicados Encontrados
              </h2>
              <p>
                Foram encontrados <strong>{duplicados.length}</strong> registros duplicados.
                Escolha como deseja proceder:
              </p>
            </div>

            <div className="modal-duplicados-body">
              <div className="duplicados-resumo">
                <p><strong>📊 Resumo:</strong></p>
                <ul>
                  <li>Total de registros no arquivo: <strong>{dadosProcessados?.todos.length || 0}</strong></li>
                  <li>Registros duplicados: <strong className="texto-vermelho">{duplicados.length}</strong></li>
                  <li>Registros únicos: <strong className="texto-verde">{dadosProcessados?.unicos.length || 0}</strong></li>
                </ul>
              </div>

              <div className="duplicados-lista">
                <h3>Registros Duplicados:</h3>
                <div className="tabela-duplicados-wrapper">
                  <table className="tabela-duplicados">
                    <thead>
                      <tr>
                        <th>Linha</th>
                        <th>Nome</th>
                        <th>Data Inicial</th>
                        <th>Local</th>
                      </tr>
                    </thead>
                    <tbody>
                      {duplicados.map((dup, index) => (
                        <tr key={index}>
                          <td>{dup.linhaOriginal}</td>
                          <td>{dup.Nome}</td>
                          <td>{dup["Data Inicial"]}</td>
                          <td>{dup.Local}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="modal-duplicados-acoes">
                <button onClick={salvarSemDuplicados} className="btn-salvar-unicos">
                  <i className="ri-check-line"></i>
                  Salvar Apenas Únicos ({dadosProcessados?.unicos.length || 0})
                </button>

                <button onClick={salvarComDuplicados} className="btn-salvar-todos">
                  <i className="ri-flash-line"></i>
                  Salvar Tudo ({dadosProcessados?.todos.length || 0})
                </button>

                <button
                  onClick={() => {
                    setMostrarModalDuplicados(false);
                    setDadosProcessados(null);
                    setDuplicados([]);
                  }}
                  className="btn-cancelar"
                >
                  <i className="ri-close-line"></i>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}