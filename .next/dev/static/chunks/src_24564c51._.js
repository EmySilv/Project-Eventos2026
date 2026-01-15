(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UploadExcel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UploadExcel() {
    _s();
    const { salvarFirebase, excluirTodosDados, loading, eventosTodos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [mensagem, setMensagem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmDelete, setConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados para verificação de duplicados
    const [dadosProcessados, setDadosProcessados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [duplicados, setDuplicados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mostrarModalDuplicados, setMostrarModalDuplicados] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Validação de arquivo
    const validarArquivo = (arquivo)=>{
        // Verifica extensão
        const extensoesValidas = [
            ".xlsx",
            ".xls"
        ];
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
    const verificarDuplicados = (novosDados)=>{
        if (!eventosTodos || eventosTodos.length === 0) {
            return {
                duplicados: [],
                dadosUnicos: novosDados
            };
        }
        const duplicadosEncontrados = [];
        const dadosUnicos = [];
        novosDados.forEach((novoEvento, index)=>{
            // Verifica se existe um evento com as mesmas propriedades principais
            const isDuplicado = eventosTodos.some((eventoExistente)=>{
                // CUSTOMIZE AQUI: Defina os campos que identificam um duplicado
                const nomeIgual = String(eventoExistente.Nome || "").toLowerCase().trim() === String(novoEvento.Nome || "").toLowerCase().trim();
                const dataIgual = String(eventoExistente["Data Inicial"] || "").trim() === String(novoEvento["Data Inicial"] || "").trim();
                const localIgual = String(eventoExistente.Local || "").toLowerCase().trim() === String(novoEvento.Local || "").toLowerCase().trim();
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
        return {
            duplicados: duplicadosEncontrados,
            dadosUnicos
        };
    };
    const handleFileChange = (e)=>{
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
    const handleDrag = (e_0)=>{
        e_0.preventDefault();
        e_0.stopPropagation();
        if (e_0.type === "dragenter" || e_0.type === "dragover") {
            setDragActive(true);
        } else if (e_0.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e_1)=>{
        e_1.preventDefault();
        e_1.stopPropagation();
        setDragActive(false);
        if (e_1.dataTransfer.files && e_1.dataTransfer.files[0]) {
            const droppedFile = e_1.dataTransfer.files[0];
            const erro_0 = validarArquivo(droppedFile);
            if (erro_0) {
                setStatus("error");
                setMensagem(erro_0);
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
    const handleButtonClick = ()=>{
        fileInputRef.current?.click();
    };
    const processarArquivo = async ()=>{
        if (!file) {
            setStatus("error");
            setMensagem("Selecione um arquivo antes de processar");
            return;
        }
        try {
            setStatus("loading");
            setMensagem("Processando arquivo... Isso pode levar alguns segundos");
            const buffer = await file.arrayBuffer();
            const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](buffer, {
                cellDates: true
            });
            // Verifica se há pelo menos uma planilha
            if (workbook.SheetNames.length === 0) {
                throw new Error("Arquivo sem planilhas válidas");
            }
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet, {
                defval: ""
            });
            // Validações adicionais
            if (json.length === 0) {
                setStatus("error");
                setMensagem("Planilha vazia! Adicione dados antes de fazer upload.");
                return;
            }
            if (json.length > 10000) {
                setStatus("error");
                setMensagem("Muitos dados! Máximo de 10.000 linhas. Seu arquivo tem " + json.length + " linhas.");
                return;
            }
            // Verifica se há colunas
            const primeiraLinha = json[0];
            if (Object.keys(primeiraLinha).length === 0) {
                setStatus("error");
                setMensagem("Arquivo sem colunas válidas!");
                return;
            }
            // Verifica duplicados
            const { duplicados: duplicadosEncontrados_0, dadosUnicos: dadosUnicos_0 } = verificarDuplicados(json);
            setDadosProcessados({
                todos: json,
                unicos: dadosUnicos_0
            });
            setDuplicados(duplicadosEncontrados_0);
            // Se encontrou duplicados, mostra o modal
            if (duplicadosEncontrados_0.length > 0) {
                setMostrarModalDuplicados(true);
                setStatus("idle");
                setMensagem("");
            } else {
                // Se não há duplicados, salva direto
                await confirmarSalvamento(dadosUnicos_0);
            }
        } catch (error) {
            setStatus("error");
            setMensagem(`Erro ao processar arquivo: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
            console.error("Erro detalhado:", error);
        }
    };
    const confirmarSalvamento = async (dados)=>{
        try {
            setStatus("loading");
            setMensagem("Salvando dados no Firebase...");
            setMostrarModalDuplicados(false);
            await salvarFirebase(dados);
            setStatus("success");
            setMensagem(`Upload concluído! ${dados.length} eventos salvos com sucesso.`);
            setTimeout(()=>{
                setFile(null);
                setStatus("idle");
                setMensagem("");
                setDadosProcessados(null);
                setDuplicados([]);
            }, 5000);
        } catch (error_0) {
            setStatus("error");
            setMensagem(`Erro ao salvar: ${error_0 instanceof Error ? error_0.message : "Erro desconhecido"}`);
        }
    };
    const salvarComDuplicados = async ()=>{
        if (dadosProcessados) {
            await confirmarSalvamento(dadosProcessados.todos);
        }
    };
    const salvarSemDuplicados = async ()=>{
        if (dadosProcessados) {
            await confirmarSalvamento(dadosProcessados.unicos);
        }
    };
    const handleExcluirDados = async ()=>{
        if (!confirmDelete) {
            setConfirmDelete(true);
            setTimeout(()=>setConfirmDelete(false), 5000);
            return;
        }
        try {
            setStatus("loading");
            setMensagem("Excluindo todos os dados...");
            await excluirTodosDados();
            setStatus("success");
            setMensagem("Todos os dados foram excluídos com sucesso!");
            setConfirmDelete(false);
            setTimeout(()=>{
                setStatus("idle");
                setMensagem("");
            }, 3000);
        } catch (error_1) {
            setStatus("error");
            setMensagem(`Erro ao excluir dados: ${error_1 instanceof Error ? error_1.message : "Erro desconhecido"}`);
        }
    };
    const formatarTamanho = (bytes)=>{
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "upload-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".xlsx,.xls",
                onChange: handleFileChange,
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleButtonClick,
                onDragEnter: handleDrag,
                onDragLeave: handleDrag,
                onDragOver: handleDrag,
                onDrop: handleDrop,
                className: `upload-area ${file ? "upload-area-success" : ""} ${dragActive ? "upload-area-drag" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "upload-icon",
                        children: file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-checkbox-circle-line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadExcel.tsx",
                            lineNumber: 272,
                            columnNumber: 19
                        }, this) : dragActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-download-cloud-line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadExcel.tsx",
                            lineNumber: 272,
                            columnNumber: 78
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-upload-cloud-2-line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UploadExcel.tsx",
                            lineNumber: 272,
                            columnNumber: 123
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "upload-file-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-filename",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ri-file-excel-2-line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    file.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-filesize",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ri-database-2-line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    formatarTamanho(file.size)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-hint",
                                children: "Clique para selecionar outro arquivo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 275,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "upload-placeholder",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-title",
                                children: dragActive ? "Solte o arquivo aqui" : "Clique para selecionar arquivo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-subtitle",
                                children: "ou arraste e solte aqui"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-formats",
                                children: "Formatos aceitos: .xlsx, .xls"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "upload-limit",
                                children: "Tamanho máximo: 10MB"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 285,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "upload-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: processarArquivo,
                        disabled: loading || !file,
                        className: "btn-processar",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-loader-4-line spinner-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this),
                                "Processando..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-rocket-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                "Processar Upload"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    eventosTodos && eventosTodos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExcluirDados,
                        disabled: loading,
                        className: `btn-excluir ${confirmDelete ? "btn-excluir-confirm" : ""}`,
                        children: confirmDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-alert-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 313,
                                    columnNumber: 17
                                }, this),
                                "Confirmar Exclusão"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-delete-bin-2-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 316,
                                    columnNumber: 17
                                }, this),
                                "Excluir Todos os Dados"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 311,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            confirmDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alerta-confirmacao",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-error-warning-line alerta-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "ATENÇÃO:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadExcel.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            " Esta ação é irreversível! Clique novamente no botão vermelho para confirmar a exclusão de todos os dados."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 323,
                columnNumber: 25
            }, this),
            status !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `alerta alerta-${status}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `alerta-icon ${status === "error" ? "ri-error-warning-line" : status === "success" ? "ri-checkbox-circle-line" : "ri-information-line"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadExcel.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    mensagem
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 332,
                columnNumber: 29
            }, this),
            mostrarModalDuplicados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-duplicados-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-duplicados-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-duplicados-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-error-warning-line"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        "Dados Duplicados Encontrados"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Foram encontrados ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: duplicados.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 346,
                                            columnNumber: 35
                                        }, this),
                                        " registros duplicados. Escolha como deseja proceder:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UploadExcel.tsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-duplicados-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "duplicados-resumo",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "📊 Resumo:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UploadExcel.tsx",
                                                lineNumber: 353,
                                                columnNumber: 20
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Total de registros no arquivo: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: dadosProcessados?.todos.length || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 54
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Registros duplicados: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "texto-vermelho",
                                                            children: duplicados.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "Registros únicos: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "texto-verde",
                                                            children: dadosProcessados?.unicos.length || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "duplicados-lista",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Registros Duplicados:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tabela-duplicados-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "tabela-duplicados",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Linha"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Nome"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Data Inicial"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    children: "Local"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                                    lineNumber: 370,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: duplicados.map((dup, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: dup.linhaOriginal
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: dup.Nome
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: dup["Data Inicial"]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        children: dup.Local
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index_0, true, {
                                                                fileName: "[project]/src/components/UploadExcel.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 57
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/UploadExcel.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/UploadExcel.tsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-duplicados-acoes",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: salvarSemDuplicados,
                                            className: "btn-salvar-unicos",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-check-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                "Salvar Apenas Únicos (",
                                                dadosProcessados?.unicos.length || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: salvarComDuplicados,
                                            className: "btn-salvar-todos",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-flash-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                "Salvar Tudo (",
                                                dadosProcessados?.todos.length || 0,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setMostrarModalDuplicados(false);
                                                setDadosProcessados(null);
                                                setDuplicados([]);
                                            },
                                            className: "btn-cancelar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-close-line"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 19
                                                }, this),
                                                "Cancelar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/UploadExcel.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UploadExcel.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UploadExcel.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 339,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UploadExcel.tsx",
                lineNumber: 338,
                columnNumber: 34
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UploadExcel.tsx",
        lineNumber: 263,
        columnNumber: 10
    }, this);
}
_s(UploadExcel, "+6JIEcGKWncib7iahm4ZA7Hylw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = UploadExcel;
var _c;
__turbopack_context__.k.register(_c, "UploadExcel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Filtros.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filtros
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Filtros() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(67);
    if ($[0] !== "52b732b2bcb327915f35a364784a1d9693806e87b509ecf728fb3baf3fe009a6") {
        for(let $i = 0; $i < 67; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52b732b2bcb327915f35a364784a1d9693806e87b509ecf728fb3baf3fe009a6";
    }
    const { eventosTodos, colunas, setFiltros } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [colunaSelecionada, setColunaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [valorSelecionado, setValorSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [, setTextoBusca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [buscaGlobal, setBuscaGlobal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    bb0: {
        if (!colunaSelecionada || !eventosTodos?.length) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = [];
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        let t1;
        if ($[2] !== colunaSelecionada || $[3] !== eventosTodos) {
            const valores = new Set();
            eventosTodos.forEach({
                "Filtros[eventosTodos.forEach()]": (evento)=>{
                    const valor = evento[colunaSelecionada];
                    if (valor) {
                        valores.add(String(valor));
                    }
                }
            }["Filtros[eventosTodos.forEach()]"]);
            t1 = Array.from(valores).sort();
            $[2] = colunaSelecionada;
            $[3] = eventosTodos;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const valoresUnicos = t0;
    let t1;
    if ($[5] !== buscaGlobal || $[6] !== colunaSelecionada || $[7] !== setFiltros || $[8] !== valorSelecionado) {
        t1 = ({
            "Filtros[aplicarFiltros]": ()=>{
                if (!colunaSelecionada && !buscaGlobal) {
                    alert("\u26A0\uFE0F Selecione pelo menos um filtro ou fa\xE7a uma busca!");
                    return;
                }
                setFiltros({
                    coluna: colunaSelecionada,
                    valor: valorSelecionado,
                    busca: buscaGlobal
                });
            }
        })["Filtros[aplicarFiltros]"];
        $[5] = buscaGlobal;
        $[6] = colunaSelecionada;
        $[7] = setFiltros;
        $[8] = valorSelecionado;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const aplicarFiltros = t1;
    let t2;
    if ($[10] !== setFiltros) {
        t2 = ({
            "Filtros[limparFiltros]": ()=>{
                setColunaSelecionada("");
                setValorSelecionado("");
                setTextoBusca("");
                setBuscaGlobal("");
                setFiltros({
                    coluna: "",
                    valor: "",
                    busca: ""
                });
            }
        })["Filtros[limparFiltros]"];
        $[10] = setFiltros;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const limparFiltros = t2;
    let t3;
    if ($[12] !== colunaSelecionada || $[13] !== setFiltros) {
        t3 = ({
            "Filtros[selecionarTodos]": ()=>{
                setValorSelecionado("");
                setBuscaGlobal("");
                setFiltros({
                    coluna: colunaSelecionada,
                    valor: "",
                    busca: ""
                });
            }
        })["Filtros[selecionarTodos]"];
        $[12] = colunaSelecionada;
        $[13] = setFiltros;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    const selecionarTodos = t3;
    let t4;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "section-subtitle",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-search-line"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 125,
                    columnNumber: 43
                }, this),
                "Busca Global"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    let t5;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-search-2-line input-icon"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Filtros[<input>.onChange]": (e)=>setBuscaGlobal(e.target.value)
        })["Filtros[<input>.onChange]"];
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== aplicarFiltros) {
        t7 = ({
            "Filtros[<input>.onKeyPress]": (e_0)=>{
                if (e_0.key === "Enter") {
                    aplicarFiltros();
                }
            }
        })["Filtros[<input>.onKeyPress]"];
        $[18] = aplicarFiltros;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== buscaGlobal || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: buscaGlobal,
            onChange: t6,
            placeholder: "Digite para buscar em todos os campos...",
            className: "busca-input",
            onKeyPress: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[20] = buscaGlobal;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== buscaGlobal) {
        t9 = buscaGlobal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Filtros[<button>.onClick]": ()=>setBuscaGlobal("")
            }["Filtros[<button>.onClick]"],
            className: "clear-search-btn",
            title: "Limpar busca",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-close-line"
            }, void 0, false, {
                fileName: "[project]/src/components/Filtros.tsx",
                lineNumber: 173,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 171,
            columnNumber: 25
        }, this);
        $[23] = buscaGlobal;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t8 || $[26] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "busca-global-section",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "busca-input-group",
                    children: [
                        t5,
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 181,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[25] = t8;
        $[26] = t9;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "section-subtitle",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-filter-3-line"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 190,
                    columnNumber: 44
                }, this),
                "Filtrar por Categoria"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label",
            children: "Selecione a coluna:"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Filtros[<select>.onChange]": (e_1)=>{
                setColunaSelecionada(e_1.target.value);
                setValorSelecionado("");
            }
        })["Filtros[<select>.onChange]"];
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Nenhum filtro (Visão Geral)"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== colunas) {
        t15 = colunas?.map(_FiltrosAnonymous);
        $[32] = colunas;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== colunaSelecionada || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: colunaSelecionada,
                    onChange: t13,
                    className: "form-select",
                    children: [
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 231,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[34] = colunaSelecionada;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== colunaSelecionada || $[38] !== valorSelecionado || $[39] !== valoresUnicos) {
        t17 = colunaSelecionada && valoresUnicos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "form-label",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-checkbox-multiple-line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 240,
                            columnNumber: 118
                        }, this),
                        "Selecione o valor:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 240,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: valorSelecionado,
                    onChange: {
                        "Filtros[<select>.onChange]": (e_2)=>setValorSelecionado(e_2.target.value)
                    }["Filtros[<select>.onChange]"],
                    className: "form-select",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Todos os itens (visão agregada)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 242,
                            columnNumber: 64
                        }, this),
                        valoresUnicos.map(_FiltrosValoresUnicosMap)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 240,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 240,
            columnNumber: 60
        }, this);
        $[37] = colunaSelecionada;
        $[38] = valorSelecionado;
        $[39] = valoresUnicos;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t16 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filtro-categoria-section",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filtros-grid",
                    children: [
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 252,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    const t19 = !colunaSelecionada && !buscaGlobal;
    let t20;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-check-line"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== aplicarFiltros || $[46] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: aplicarFiltros,
            className: "btn btn-primary",
            disabled: t19,
            children: [
                t20,
                "Aplicar Filtros"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[45] = aplicarFiltros;
        $[46] = t19;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== colunaSelecionada || $[49] !== selecionarTodos) {
        t22 = colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: selecionarTodos,
            className: "btn btn-success",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-bar-chart-grouped-line"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 278,
                    columnNumber: 94
                }, this),
                "Ver Todos os Itens Agregados"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 278,
            columnNumber: 32
        }, this);
        $[48] = colunaSelecionada;
        $[49] = selecionarTodos;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-delete-bin-line"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== limparFiltros) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: limparFiltros,
            className: "btn btn-danger",
            children: [
                t23,
                "Limpar Tudo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[52] = limparFiltros;
        $[53] = t24;
    } else {
        t24 = $[53];
    }
    let t25;
    if ($[54] !== t21 || $[55] !== t22 || $[56] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "acoes-buttons",
            children: [
                t21,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[54] = t21;
        $[55] = t22;
        $[56] = t24;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== buscaGlobal || $[59] !== colunaSelecionada || $[60] !== valorSelecionado) {
        t26 = (colunaSelecionada || buscaGlobal) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filtros-ativos",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filtros-ativos-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-filter-2-fill"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 312,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Filtros Ativos:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 312,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 312,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filtros-ativos-content",
                    children: [
                        colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filtro-ativo-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-folder-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 289
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Categoria:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 321
                                }, this),
                                " ",
                                colunaSelecionada,
                                valorSelecionado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filtro-valor",
                                    children: [
                                        '= "',
                                        valorSelecionado,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 388
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filtro-valor",
                                    children: "Todos os itens"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 451
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 312,
                            columnNumber: 254
                        }, this),
                        buscaGlobal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filtro-ativo-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-search-eye-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 562
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Busca:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 598
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "filtro-valor",
                                    children: [
                                        '"',
                                        buscaGlobal,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 312,
                                    columnNumber: 621
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 312,
                            columnNumber: 527
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 312,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 312,
            columnNumber: 49
        }, this);
        $[58] = buscaGlobal;
        $[59] = colunaSelecionada;
        $[60] = valorSelecionado;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== t10 || $[63] !== t18 || $[64] !== t25 || $[65] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filtros-container",
            children: [
                t10,
                t18,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[62] = t10;
        $[63] = t18;
        $[64] = t25;
        $[65] = t26;
        $[66] = t27;
    } else {
        t27 = $[66];
    }
    return t27;
}
_s(Filtros, "cQtMdjnlWo6z0vg1rZzZToMUqRY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = Filtros;
function _FiltrosValoresUnicosMap(valor_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: valor_0,
        children: valor_0
    }, valor_0, false, {
        fileName: "[project]/src/components/Filtros.tsx",
        lineNumber: 334,
        columnNumber: 10
    }, this);
}
function _FiltrosAnonymous(col) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: col,
        children: col
    }, col, false, {
        fileName: "[project]/src/components/Filtros.tsx",
        lineNumber: 337,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Filtros");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/chart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
// Registra TODOS os elementos necessários
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"]);
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Graficos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Graficos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/chart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Graficos() {
    _s();
    const { eventos, eventosTodos, filtros, colunas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const colunaSelecionada = filtros?.coluna || "";
    const totalEventos = eventosTodos?.length || 0;
    const eventosFiltrados = eventos?.length || 0;
    // ============================================
    // FUNÇÃO HELPER: Agrupa dados por coluna
    // ============================================
    const agruparPorColuna = (coluna, dadosBase = [])=>{
        const agrupado = {};
        dadosBase.forEach((item)=>{
            const valor = String(item[coluna] || "Não informado");
            agrupado[valor] = (agrupado[valor] || 0) + 1;
        });
        return agrupado;
    };
    // ============================================
    // GRÁFICOS GENÉRICOS - AGORA USANDO eventos (FILTRADOS)
    // ============================================
    const graficosGenericos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficosGenericos]": ()=>{
            if (!eventos?.length || !colunas?.length) return null;
            // Pega outras colunas para análise cruzada (ignora a coluna do filtro)
            const outrasColunas = colunas.filter({
                "Graficos.useMemo[graficosGenericos].outrasColunas": (col)=>col !== colunaSelecionada
            }["Graficos.useMemo[graficosGenericos].outrasColunas"]);
            // Gráfico 1: Distribuição da própria coluna selecionada (se houver filtro)
            let dadosColunaSelecionada = null;
            if (colunaSelecionada) {
                const dados = agruparPorColuna(colunaSelecionada, eventos);
                dadosColunaSelecionada = {
                    labels: Object.keys(dados),
                    datasets: [
                        {
                            label: `Distribuição por ${colunaSelecionada}`,
                            data: Object.values(dados),
                            backgroundColor: [
                                "#4f46e5",
                                "#10b981",
                                "#f59e0b",
                                "#ef4444",
                                "#8b5cf6",
                                "#ec4899",
                                "#06b6d4",
                                "#84cc16"
                            ]
                        }
                    ]
                };
            }
            // Gráfico 2: Análise cruzada - primeira coluna diferente
            const coluna1 = outrasColunas[0] || colunas[0];
            const dados1 = agruparPorColuna(coluna1, eventos);
            const top10Dados1 = Object.entries(dados1).sort({
                "Graficos.useMemo[graficosGenericos].top10Dados1": ([, a], [, b])=>b - a
            }["Graficos.useMemo[graficosGenericos].top10Dados1"]).slice(0, 10);
            // Gráfico 3: Análise cruzada - segunda coluna diferente
            const coluna2 = outrasColunas[1] || colunas[1];
            const dados2 = agruparPorColuna(coluna2, eventos);
            // Gráfico 4: Análise cruzada - terceira coluna diferente
            const coluna3 = outrasColunas[2] || colunas[2];
            const dados3 = agruparPorColuna(coluna3, eventos);
            return {
                colunaSelecionada: dadosColunaSelecionada,
                analise1: {
                    titulo: coluna1,
                    labels: top10Dados1.map({
                        "Graficos.useMemo[graficosGenericos]": ([key])=>key
                    }["Graficos.useMemo[graficosGenericos]"]),
                    datasets: [
                        {
                            label: `Top 10 - ${coluna1}`,
                            data: top10Dados1.map({
                                "Graficos.useMemo[graficosGenericos]": ([, value])=>value
                            }["Graficos.useMemo[graficosGenericos]"]),
                            backgroundColor: "#10b981"
                        }
                    ]
                },
                analise2: {
                    titulo: coluna2,
                    labels: Object.keys(dados2),
                    datasets: [
                        {
                            label: `Distribuição por ${coluna2}`,
                            data: Object.values(dados2),
                            backgroundColor: [
                                "#8b5cf6",
                                "#ec4899",
                                "#06b6d4",
                                "#84cc16",
                                "#f59e0b",
                                "#ef4444"
                            ]
                        }
                    ]
                },
                analise3: {
                    titulo: coluna3,
                    labels: Object.keys(dados3).slice(0, 8),
                    datasets: [
                        {
                            label: coluna3,
                            data: Object.values(dados3).slice(0, 8),
                            backgroundColor: "#f59e0b"
                        }
                    ]
                }
            };
        }
    }["Graficos.useMemo[graficosGenericos]"], [
        eventos,
        colunas,
        colunaSelecionada
    ]);
    // ============================================
    // GRÁFICO DE TIMELINE - AGORA USANDO eventos (FILTRADOS)
    // ============================================
    const graficoTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficoTimeline]": ()=>{
            if (!eventos?.length || !colunas?.length) return null;
            // Procura qualquer coluna com "data" no nome
            const colunaData = colunas.find({
                "Graficos.useMemo[graficoTimeline].colunaData": (c)=>c.toLowerCase().includes("data")
            }["Graficos.useMemo[graficoTimeline].colunaData"]);
            if (!colunaData) return null;
            const dadosTimeline = {};
            eventos.forEach({
                "Graficos.useMemo[graficoTimeline]": (item_0)=>{
                    let dataValor = item_0[colunaData];
                    if (dataValor) {
                        try {
                            const data = new Date(dataValor);
                            if (!isNaN(data.getTime())) {
                                dataValor = `${data.getMonth() + 1}/${data.getFullYear()}`;
                                dadosTimeline[dataValor] = (dadosTimeline[dataValor] || 0) + 1;
                            }
                        } catch  {}
                    }
                }
            }["Graficos.useMemo[graficoTimeline]"]);
            const timelineOrdenada = Object.keys(dadosTimeline).sort();
            if (timelineOrdenada.length === 0) return null;
            return {
                titulo: colunaData,
                labels: timelineOrdenada,
                datasets: [
                    {
                        label: `Eventos ao longo do tempo (${colunaData})`,
                        data: timelineOrdenada.map({
                            "Graficos.useMemo[graficoTimeline]": (k)=>dadosTimeline[k]
                        }["Graficos.useMemo[graficoTimeline]"]),
                        borderColor: "#4f46e5",
                        backgroundColor: "rgba(79, 70, 229, 0.1)",
                        tension: 0.4,
                        fill: true
                    }
                ]
            };
        }
    }["Graficos.useMemo[graficoTimeline]"], [
        eventos,
        colunas
    ]);
    // ============================================
    // VERIFICAÇÃO DE DADOS
    // ============================================
    if (!eventosTodos?.length || !colunas?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "40px",
                color: "#999"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-pie-chart-2-line",
                    style: {
                        fontSize: "64px",
                        display: "block",
                        marginBottom: "20px",
                        opacity: 0.5
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "18px"
                    },
                    children: "Sem dados para exibir gráficos"
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "14px",
                        marginTop: "10px"
                    },
                    children: "Faça upload de uma planilha para começar"
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 142,
            columnNumber: 12
        }, this);
    }
    if (!graficosGenericos) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "40px",
                color: "#999"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-loader-4-line",
                    style: {
                        fontSize: "48px",
                        display: "block",
                        marginBottom: "20px",
                        animation: "spin 1s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "18px"
                    },
                    children: "Processando dados..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 165,
            columnNumber: 12
        }, this);
    }
    // ============================================
    // RENDERIZAÇÃO COM GRID LAYOUT
    // ============================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "15px",
                    background: colunaSelecionada || filtros?.busca ? "#eff6ff" : "#f0fdf4",
                    borderRadius: "8px",
                    marginBottom: "25px",
                    borderLeft: `4px solid ${colunaSelecionada || filtros?.busca ? "#4f46e5" : "#10b981"}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: colunaSelecionada || filtros?.busca ? "ri-focus-3-line" : "ri-dashboard-line",
                            style: {
                                fontSize: "24px",
                                color: colunaSelecionada || filtros?.busca ? "#4f46e5" : "#10b981"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: colunaSelecionada ? `Análise focada em: ${colunaSelecionada}` : filtros?.busca ? `Resultado da busca: "${filtros.busca}"` : "Visão Geral de Todos os Eventos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: "5px 0 0 0",
                                        fontSize: "14px",
                                        color: "#666"
                                    },
                                    children: colunaSelecionada || filtros?.busca ? `Mostrando ${eventosFiltrados} de ${totalEventos} eventos` : `Total de ${totalEventos} eventos cadastrados`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                filtros?.busca && colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: "5px 0 0 0",
                                        fontSize: "13px",
                                        color: "#666",
                                        fontStyle: "italic"
                                    },
                                    children: [
                                        "Filtrando por: ",
                                        colunaSelecionada,
                                        " + Busca global"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 214,
                                    columnNumber: 53
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            eventos?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    padding: "60px 20px",
                    background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                    borderRadius: "12px",
                    border: "2px solid #f59e0b"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-filter-off-line",
                        style: {
                            fontSize: "64px",
                            color: "#d97706",
                            marginBottom: "20px",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#92400e",
                            margin: "0 0 10px 0"
                        },
                        children: "Nenhum evento encontrado com os filtros aplicados"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "14px",
                            color: "#78350f",
                            margin: 0
                        },
                        children: "Tente ajustar os filtros ou limpar a busca"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 227,
                columnNumber: 32
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                        gap: "25px"
                    },
                    children: [
                        graficosGenericos.colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                            titulo: `Distribuição: ${colunaSelecionada}`,
                            tipo: "pizza",
                            icone: "ri-pie-chart-line",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: graficosGenericos.colunaSelecionada
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 265,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 264,
                            columnNumber: 53
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                            titulo: `Top 10 - ${graficosGenericos.analise1.titulo}`,
                            tipo: "barras",
                            icone: "ri-bar-chart-horizontal-line",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                data: graficosGenericos.analise1,
                                options: {
                                    indexAxis: "y"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                            titulo: `Análise por ${graficosGenericos.analise2.titulo}`,
                            tipo: "rosca",
                            icone: "ri-donut-chart-line",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                data: graficosGenericos.analise2
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                            titulo: `Distribuição: ${graficosGenericos.analise3.titulo}`,
                            tipo: "barras",
                            icone: "ri-bar-chart-box-line",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                data: graficosGenericos.analise3
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this),
                        graficoTimeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gridColumn: "1 / -1"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: `Timeline - ${graficoTimeline.titulo}`,
                                tipo: "linha",
                                icone: "ri-line-chart-line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    data: graficoTimeline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 290,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 289,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 286,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Graficos.tsx",
        lineNumber: 185,
        columnNumber: 10
    }, this);
}
_s(Graficos, "66npQ4UGwsALmNaaOW/ZRpAn/30=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = Graficos;
// ============================================
// 📦 COMPONENTE AUXILIAR: Card de Gráfico
// ============================================
function GraficoCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "4f66ed0168747781ad56d59ed34a4616fb4beeea25f651c49308a988754b31d4") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4f66ed0168747781ad56d59ed34a4616fb4beeea25f651c49308a988754b31d4";
    }
    const { titulo, icone, children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.3s ease"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            marginBottom: "20px",
            color: "#374151",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontSize: "20px",
            color: "#4f46e5"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== icone) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: icone,
            style: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 356,
            columnNumber: 10
        }, this);
        $[4] = icone;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4 || $[7] !== titulo) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: t2,
            children: [
                t4,
                titulo
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 364,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = titulo;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== children) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 385,
            columnNumber: 10
        }, this);
        $[10] = children;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t5 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            onMouseEnter: _GraficoCardDivOnMouseEnter,
            onMouseLeave: _GraficoCardDivOnMouseLeave,
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 393,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_c1 = GraficoCard;
function _GraficoCardDivOnMouseLeave(e_0) {
    e_0.currentTarget.style.transform = "translateY(0)";
    e_0.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
}
function _GraficoCardDivOnMouseEnter(e) {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
}
var _c, _c1;
__turbopack_context__.k.register(_c, "Graficos");
__turbopack_context__.k.register(_c1, "GraficoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TabelaEventos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TabelaEventos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ORDEM_COLUNAS = [
    "Nome",
    "Tema",
    "Tipo",
    "Data Inicial",
    "Data Final",
    "Local",
    "Cidade",
    "Empresa",
    "Formato",
    "Site Evento",
    "Tem Fornecedor Patrocinador",
    "Nome Fornecedor Patrocinador",
    "E-Mail Fornecedor Patrocinador",
    "Vivo Patrocina",
    "Pago",
    "Valor Inscrição"
];
function TabelaEventos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(90);
    if ($[0] !== "1ad61f3a9321ee982cc477413ad224a9b32fb1dd97165c3b0c8a21ad236cf842") {
        for(let $i = 0; $i < 90; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ad61f3a9321ee982cc477413ad224a9b32fb1dd97165c3b0c8a21ad236cf842";
    }
    const { eventos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [paginaAtual, setPaginaAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itensPorPagina, setItensPorPagina] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [ordenacao, setOrdenacao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!eventos?.length) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabela-vazia",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-inbox-line tabela-vazia-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 30,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "tabela-vazia-titulo",
                        children: "Nenhum evento para exibir"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 30,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "tabela-vazia-subtitulo",
                        children: "Faça upload de uma planilha ou ajuste os filtros"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 30,
                        columnNumber: 155
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let totalPaginas;
    if ($[2] !== eventos || $[3] !== itensPorPagina || $[4] !== ordenacao || $[5] !== paginaAtual) {
        let t6;
        if ($[13] !== eventos) {
            t6 = ({
                "TabelaEventos[ORDEM_COLUNAS.filter()]": (col)=>Object.keys(eventos[0]).includes(col)
            })["TabelaEventos[ORDEM_COLUNAS.filter()]"];
            $[13] = eventos;
            $[14] = t6;
        } else {
            t6 = $[14];
        }
        const colunasVisiveis = ORDEM_COLUNAS.filter(t6);
        let t7;
        bb0: {
            if (!ordenacao) {
                t7 = eventos;
                break bb0;
            }
            let t8;
            if ($[15] !== eventos || $[16] !== ordenacao) {
                let t9;
                if ($[18] !== ordenacao) {
                    t9 = ({
                        "TabelaEventos[(anonymous)()]": (a, b)=>{
                            const valorA = String(a[ordenacao.coluna] || "");
                            const valorB = String(b[ordenacao.coluna] || "");
                            const comparacao = valorA.localeCompare(valorB, "pt-BR", {
                                numeric: true
                            });
                            return ordenacao.direcao === "asc" ? comparacao : -comparacao;
                        }
                    })["TabelaEventos[(anonymous)()]"];
                    $[18] = ordenacao;
                    $[19] = t9;
                } else {
                    t9 = $[19];
                }
                t8 = [
                    ...eventos
                ].sort(t9);
                $[15] = eventos;
                $[16] = ordenacao;
                $[17] = t8;
            } else {
                t8 = $[17];
            }
            t7 = t8;
        }
        const eventosOrdenados = t7;
        totalPaginas = Math.ceil(eventosOrdenados.length / itensPorPagina);
        const indiceInicio = (paginaAtual - 1) * itensPorPagina;
        const indiceFim = indiceInicio + itensPorPagina;
        const eventosPaginados = eventosOrdenados.slice(indiceInicio, indiceFim);
        let t8;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = ({
                "TabelaEventos[handleOrdenar]": (coluna)=>{
                    setOrdenacao({
                        "TabelaEventos[handleOrdenar > setOrdenacao()]": (prev)=>{
                            if (prev?.coluna === coluna) {
                                return {
                                    coluna,
                                    direcao: prev.direcao === "asc" ? "desc" : "asc"
                                };
                            }
                            return {
                                coluna,
                                direcao: "asc"
                            };
                        }
                    }["TabelaEventos[handleOrdenar > setOrdenacao()]"]);
                }
            })["TabelaEventos[handleOrdenar]"];
            $[20] = t8;
        } else {
            t8 = $[20];
        }
        const handleOrdenar = t8;
        let t9;
        if ($[21] !== eventosOrdenados) {
            t9 = ({
                "TabelaEventos[exportarParaExcel]": ()=>{
                    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(eventosOrdenados);
                    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Eventos");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `eventos_${new Date().toISOString().split("T")[0]}.xlsx`);
                }
            })["TabelaEventos[exportarParaExcel]"];
            $[21] = eventosOrdenados;
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        const exportarParaExcel = t9;
        let t10;
        if ($[23] !== ordenacao) {
            t10 = ({
                "TabelaEventos[getIconeOrdenacao]": (coluna_0)=>{
                    if (ordenacao?.coluna !== coluna_0) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "ri-arrow-up-down-line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelaEventos.tsx",
                            lineNumber: 141,
                            columnNumber: 20
                        }, this);
                    }
                    return ordenacao.direcao === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-arrow-up-line"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 143,
                        columnNumber: 48
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-arrow-down-line"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 143,
                        columnNumber: 85
                    }, this);
                }
            })["TabelaEventos[getIconeOrdenacao]"];
            $[23] = ordenacao;
            $[24] = t10;
        } else {
            t10 = $[24];
        }
        const getIconeOrdenacao = t10;
        t4 = "tabela-container";
        let t11;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-list-settings-line"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this);
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        let t12;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = ({
                "TabelaEventos[<select>.onChange]": (e)=>{
                    setItensPorPagina(Number(e.target.value));
                    setPaginaAtual(1);
                }
            })["TabelaEventos[<select>.onChange]"];
            $[26] = t12;
        } else {
            t12 = $[26];
        }
        let t13;
        let t14;
        let t15;
        let t16;
        let t17;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: 5,
                children: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this);
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: 10,
                children: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: 25,
                children: "25"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this);
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: 50,
                children: "50"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this);
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: 100,
                children: "100"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this);
            $[27] = t13;
            $[28] = t14;
            $[29] = t15;
            $[30] = t16;
            $[31] = t17;
        } else {
            t13 = $[27];
            t14 = $[28];
            t15 = $[29];
            t16 = $[30];
            t17 = $[31];
        }
        let t18;
        if ($[32] !== itensPorPagina) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controles-esquerda",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "controle-label",
                    children: [
                        t11,
                        "Itens por página:",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: itensPorPagina,
                            onChange: t12,
                            className: "controle-select",
                            children: [
                                t13,
                                t14,
                                t15,
                                t16,
                                t17
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TabelaEventos.tsx",
                            lineNumber: 197,
                            columnNumber: 105
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 197,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this);
            $[32] = itensPorPagina;
            $[33] = t18;
        } else {
            t18 = $[33];
        }
        let t19;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-file-excel-2-line"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, this);
            $[34] = t19;
        } else {
            t19 = $[34];
        }
        let t20;
        if ($[35] !== exportarParaExcel) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controles-direita",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: exportarParaExcel,
                    className: "btn-exportar",
                    title: "Exportar para Excel",
                    children: [
                        t19,
                        "Exportar Excel"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 212,
                    columnNumber: 48
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this);
            $[35] = exportarParaExcel;
            $[36] = t20;
        } else {
            t20 = $[36];
        }
        if ($[37] !== t18 || $[38] !== t20) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabela-controles",
                children: [
                    t18,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
            $[37] = t18;
            $[38] = t20;
            $[39] = t5;
        } else {
            t5 = $[39];
        }
        t3 = "tabela-wrapper";
        t1 = "tabela-eventos";
        let t21;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "coluna-id",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-hashtag"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 230,
                        columnNumber: 39
                    }, this),
                    " ID"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this);
            $[40] = t21;
        } else {
            t21 = $[40];
        }
        let t22;
        if ($[41] !== getIconeOrdenacao) {
            t22 = ({
                "TabelaEventos[colunasVisiveis.map()]": (col_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        onClick: {
                            "TabelaEventos[colunasVisiveis.map() > <th>.onClick]": ()=>handleOrdenar(col_0)
                        }["TabelaEventos[colunasVisiveis.map() > <th>.onClick]"],
                        className: "coluna-ordenavel",
                        title: `Ordenar por ${col_0}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "th-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: col_0
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TabelaEventos.tsx",
                                    lineNumber: 240,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "icone-ordenacao",
                                    children: getIconeOrdenacao(col_0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TabelaEventos.tsx",
                                    lineNumber: 240,
                                    columnNumber: 175
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TabelaEventos.tsx",
                            lineNumber: 240,
                            columnNumber: 127
                        }, this)
                    }, col_0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 238,
                        columnNumber: 58
                    }, this)
            })["TabelaEventos[colunasVisiveis.map()]"];
            $[41] = getIconeOrdenacao;
            $[42] = t22;
        } else {
            t22 = $[42];
        }
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    t21,
                    colunasVisiveis.map(t22)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 247,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 247,
            columnNumber: 10
        }, this);
        t0 = eventosPaginados.map({
            "TabelaEventos[eventosPaginados.map()]": (evento, index)=>{
                const idGlobal = indiceInicio + index + 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "linha-evento",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "coluna-id",
                            children: idGlobal
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelaEventos.tsx",
                            lineNumber: 251,
                            columnNumber: 72
                        }, this),
                        colunasVisiveis.map({
                            "TabelaEventos[eventosPaginados.map() > colunasVisiveis.map()]": (col_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "celula-dado",
                                    children: String(evento[col_1] ?? "")
                                }, `${idGlobal}-${col_1}`, false, {
                                    fileName: "[project]/src/components/TabelaEventos.tsx",
                                    lineNumber: 252,
                                    columnNumber: 87
                                }, this)
                        }["TabelaEventos[eventosPaginados.map() > colunasVisiveis.map()]"])
                    ]
                }, `evento-${idGlobal}`, true, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 251,
                    columnNumber: 16
                }, this);
            }
        }["TabelaEventos[eventosPaginados.map()]"]);
        $[2] = eventos;
        $[3] = itensPorPagina;
        $[4] = ordenacao;
        $[5] = paginaAtual;
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = totalPaginas;
    } else {
        t0 = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        totalPaginas = $[12];
    }
    let t6;
    if ($[43] !== t0) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 278,
            columnNumber: 10
        }, this);
        $[43] = t0;
        $[44] = t6;
    } else {
        t6 = $[44];
    }
    let t7;
    if ($[45] !== t1 || $[46] !== t2 || $[47] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t1,
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 286,
            columnNumber: 10
        }, this);
        $[45] = t1;
        $[46] = t2;
        $[47] = t6;
        $[48] = t7;
    } else {
        t7 = $[48];
    }
    let t8;
    if ($[49] !== t3 || $[50] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 296,
            columnNumber: 10
        }, this);
        $[49] = t3;
        $[50] = t7;
        $[51] = t8;
    } else {
        t8 = $[51];
    }
    let t9;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "TabelaEventos[<button>.onClick]": ()=>setPaginaAtual(1)
        })["TabelaEventos[<button>.onClick]"];
        $[52] = t9;
    } else {
        t9 = $[52];
    }
    const t10 = paginaAtual === 1;
    let t11;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-skip-back-mini-line"
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[53] = t11;
    } else {
        t11 = $[53];
    }
    let t12;
    if ($[54] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            disabled: t10,
            className: "btn-paginacao",
            title: "Primeira p\xE1gina",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[54] = t10;
        $[55] = t12;
    } else {
        t12 = $[55];
    }
    let t13;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "TabelaEventos[<button>.onClick]": ()=>setPaginaAtual(_TabelaEventosButtonOnClickSetPaginaAtual)
        })["TabelaEventos[<button>.onClick]"];
        $[56] = t13;
    } else {
        t13 = $[56];
    }
    const t14 = paginaAtual === 1;
    let t15;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-arrow-left-s-line"
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[57] = t15;
    } else {
        t15 = $[57];
    }
    let t16;
    if ($[58] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            disabled: t14,
            className: "btn-paginacao",
            title: "P\xE1gina anterior",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[58] = t14;
        $[59] = t16;
    } else {
        t16 = $[59];
    }
    let t17;
    if ($[60] !== paginaAtual) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: paginaAtual
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 355,
            columnNumber: 11
        }, this);
        $[60] = paginaAtual;
        $[61] = t17;
    } else {
        t17 = $[61];
    }
    let t18;
    if ($[62] !== totalPaginas) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: totalPaginas
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        $[62] = totalPaginas;
        $[63] = t18;
    } else {
        t18 = $[63];
    }
    let t19;
    if ($[64] !== t17 || $[65] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "paginacao-info",
            children: [
                "Página ",
                t17,
                " de ",
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[64] = t17;
        $[65] = t18;
        $[66] = t19;
    } else {
        t19 = $[66];
    }
    let t20;
    if ($[67] !== totalPaginas) {
        t20 = ({
            "TabelaEventos[<button>.onClick]": ()=>setPaginaAtual({
                    "TabelaEventos[<button>.onClick > setPaginaAtual()]": (prev_1)=>Math.min(totalPaginas, prev_1 + 1)
                }["TabelaEventos[<button>.onClick > setPaginaAtual()]"])
        })["TabelaEventos[<button>.onClick]"];
        $[67] = totalPaginas;
        $[68] = t20;
    } else {
        t20 = $[68];
    }
    const t21 = paginaAtual === totalPaginas;
    let t22;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-arrow-right-s-line"
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[69] = t22;
    } else {
        t22 = $[69];
    }
    let t23;
    if ($[70] !== t20 || $[71] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t20,
            disabled: t21,
            className: "btn-paginacao",
            title: "Pr\xF3xima p\xE1gina",
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[70] = t20;
        $[71] = t21;
        $[72] = t23;
    } else {
        t23 = $[72];
    }
    let t24;
    if ($[73] !== totalPaginas) {
        t24 = ({
            "TabelaEventos[<button>.onClick]": ()=>setPaginaAtual(totalPaginas)
        })["TabelaEventos[<button>.onClick]"];
        $[73] = totalPaginas;
        $[74] = t24;
    } else {
        t24 = $[74];
    }
    const t25 = paginaAtual === totalPaginas;
    let t26;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "ri-skip-forward-mini-line"
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[75] = t26;
    } else {
        t26 = $[75];
    }
    let t27;
    if ($[76] !== t24 || $[77] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            disabled: t25,
            className: "btn-paginacao",
            title: "\xDAltima p\xE1gina",
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[76] = t24;
        $[77] = t25;
        $[78] = t27;
    } else {
        t27 = $[78];
    }
    let t28;
    if ($[79] !== t12 || $[80] !== t16 || $[81] !== t19 || $[82] !== t23 || $[83] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "paginacao",
            children: [
                t12,
                t16,
                t19,
                t23,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[79] = t12;
        $[80] = t16;
        $[81] = t19;
        $[82] = t23;
        $[83] = t27;
        $[84] = t28;
    } else {
        t28 = $[84];
    }
    let t29;
    if ($[85] !== t28 || $[86] !== t4 || $[87] !== t5 || $[88] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t8,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[85] = t28;
        $[86] = t4;
        $[87] = t5;
        $[88] = t8;
        $[89] = t29;
    } else {
        t29 = $[89];
    }
    return t29;
}
_s(TabelaEventos, "9Sm3FiGgsBxYCECe+fGb09B7q/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = TabelaEventos;
function _TabelaEventosButtonOnClickSetPaginaAtual(prev_0) {
    return Math.max(1, prev_0 - 1);
}
var _c;
__turbopack_context__.k.register(_c, "TabelaEventos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Estatisticas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Estatisticas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Estatisticas() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "f4857252f7e5b2112be4338a752a06b07d3d2e59779a47b741fa068ed8c71849") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f4857252f7e5b2112be4338a752a06b07d3d2e59779a47b741fa068ed8c71849";
    }
    const { eventos, eventosTodos, colunas, filtros } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const total = eventosTodos?.length || 0;
    const filtrados = eventos?.length || 0;
    const colunaPago = colunas?.includes("Pago") ? "Pago" : null;
    let t0;
    if ($[1] !== colunaPago || $[2] !== eventos) {
        t0 = colunaPago ? eventos.filter({
            "Estatisticas[eventos.filter()]": (e)=>e[colunaPago]?.toString().toLowerCase() === "sim"
        }["Estatisticas[eventos.filter()]"]).length : 0;
        $[1] = colunaPago;
        $[2] = eventos;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const eventosPagos = t0;
    const colunaVivo = colunas?.includes("Vivo Patrocina") ? "Vivo Patrocina" : null;
    let t1;
    if ($[4] !== colunaVivo || $[5] !== eventos) {
        t1 = colunaVivo ? eventos.filter({
            "Estatisticas[eventos.filter()]": (e_0)=>e_0[colunaVivo]?.toString().toLowerCase() === "sim"
        }["Estatisticas[eventos.filter()]"]).length : 0;
        $[4] = colunaVivo;
        $[5] = eventos;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const vivoPatrocina = t1;
    let t2;
    if ($[7] !== colunas) {
        t2 = colunas?.includes("Tipo") ? "Tipo" : colunas?.[1];
        $[7] = colunas;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const colunaTipo = t2;
    let t3;
    if ($[9] !== colunaTipo || $[10] !== eventos) {
        t3 = colunaTipo ? new Set(eventos.map({
            "Estatisticas[eventos.map()]": (e_1)=>e_1[colunaTipo]
        }["Estatisticas[eventos.map()]"]).filter(Boolean)).size : 0;
        $[9] = colunaTipo;
        $[10] = eventos;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const tiposUnicos = t3;
    let t4;
    if ($[12] !== eventosPagos || $[13] !== filtrados || $[14] !== tiposUnicos || $[15] !== total || $[16] !== vivoPatrocina) {
        t4 = {
            total,
            filtrados,
            eventosPagos,
            vivoPatrocina,
            tiposUnicos
        };
        $[12] = eventosPagos;
        $[13] = filtrados;
        $[14] = tiposUnicos;
        $[15] = total;
        $[16] = vivoPatrocina;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    const stats = t4;
    const temFiltroAtivo = filtros?.coluna || filtros?.busca;
    let t5;
    if ($[18] !== stats.total) {
        t5 = {
            titulo: "Total de Eventos",
            valor: stats.total,
            icone: "ri-bar-chart-box-line",
            cor: "#4f46e5"
        };
        $[18] = stats.total;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    const t6 = temFiltroAtivo ? "Eventos Filtrados" : "Eventos Dispon\xEDveis";
    let t7;
    if ($[20] !== stats.filtrados || $[21] !== t6) {
        t7 = {
            titulo: t6,
            valor: stats.filtrados,
            icone: "ri-filter-3-line",
            cor: "#10b981"
        };
        $[20] = stats.filtrados;
        $[21] = t6;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== stats.eventosPagos) {
        t8 = {
            titulo: "Eventos Pagos",
            valor: stats.eventosPagos,
            icone: "ri-money-dollar-circle-line",
            cor: "#f59e0b"
        };
        $[23] = stats.eventosPagos;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== stats.vivoPatrocina) {
        t9 = {
            titulo: "Vivo Patrocina",
            valor: stats.vivoPatrocina,
            icone: "ri-award-line",
            cor: "#ef4444"
        };
        $[25] = stats.vivoPatrocina;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== stats.tiposUnicos) {
        t10 = {
            titulo: "Tipos Diferentes",
            valor: stats.tiposUnicos,
            icone: "ri-price-tag-3-line",
            cor: "#8b5cf6"
        };
        $[27] = stats.tiposUnicos;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] !== t10 || $[30] !== t5 || $[31] !== t7 || $[32] !== t8 || $[33] !== t9) {
        t11 = [
            t5,
            t7,
            t8,
            t9,
            t10
        ];
        $[29] = t10;
        $[30] = t5;
        $[31] = t7;
        $[32] = t8;
        $[33] = t9;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    const cards = t11;
    let t12;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "20px"
        };
        $[35] = t12;
    } else {
        t12 = $[35];
    }
    let t13;
    if ($[36] !== cards) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t12,
                children: cards.map(_EstatisticasCardsMap)
            }, void 0, false, {
                fileName: "[project]/src/components/Estatisticas.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[36] = cards;
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    return t13;
}
_s(Estatisticas, "eFGaYUYWgR+pScNorcr4kIHEJtQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = Estatisticas;
function _EstatisticasCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            borderLeft: `4px solid ${card.cor}`,
            transition: "all 0.3s ease"
        },
        onMouseEnter: _EstatisticasCardsMapDivOnMouseEnter,
        onMouseLeave: _EstatisticasCardsMapDivOnMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: card.icone,
                        style: {
                            fontSize: "28px",
                            color: card.cor
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Estatisticas.tsx",
                        lineNumber: 204,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                margin: 0,
                                fontSize: "14px",
                                color: "#666",
                                fontWeight: "500"
                            },
                            children: card.titulo
                        }, void 0, false, {
                            fileName: "[project]/src/components/Estatisticas.tsx",
                            lineNumber: 209,
                            columnNumber: 10
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Estatisticas.tsx",
                        lineNumber: 207,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Estatisticas.tsx",
                lineNumber: 199,
                columnNumber: 110
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0,
                    fontSize: "32px",
                    fontWeight: "700",
                    color: card.cor
                },
                children: card.valor
            }, void 0, false, {
                fileName: "[project]/src/components/Estatisticas.tsx",
                lineNumber: 214,
                columnNumber: 42
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/Estatisticas.tsx",
        lineNumber: 192,
        columnNumber: 10
    }, this);
}
function _EstatisticasCardsMapDivOnMouseLeave(e_3) {
    e_3.currentTarget.style.transform = "translateY(0)";
    e_3.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
}
function _EstatisticasCardsMapDivOnMouseEnter(e_2) {
    e_2.currentTarget.style.transform = "translateY(-2px)";
    e_2.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
}
var _c;
__turbopack_context__.k.register(_c, "Estatisticas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboards/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageDash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadExcel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadExcel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filtros$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Filtros.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Graficos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Graficos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelaEventos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TabelaEventos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Estatisticas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Estatisticas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/eventsContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function PageDash() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "f085b952c7c73e60084c93bb395aa1462dbd14b1cabb5a94166e4915b1500b14") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f085b952c7c73e60084c93bb395aa1462dbd14b1cabb5a94166e4915b1500b14";
    }
    const { loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "PageDash[useEffect()]": ()=>{
                setMounted(true);
            }
        })["PageDash[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!mounted) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    style: {
                        textAlign: "center",
                        marginBottom: "30px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "36px",
                                marginBottom: "10px"
                            },
                            children: "Eventos 2026"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboards/page.tsx",
                            lineNumber: 46,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#666",
                                fontSize: "16px"
                            },
                            children: "Carregando dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboards/page.tsx",
                            lineNumber: 49,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 43,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboards/page.tsx",
                lineNumber: 43,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            style: {
                textAlign: "center",
                marginBottom: "30px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "24px",
                    marginBottom: "10px"
                },
                children: "Dashboard interativo para visualização e gerenciamento de eventos"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboards/page.tsx",
                lineNumber: 64,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Upload da Planilha"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 74,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Faça upload de um arquivo Excel (.xlsx ou .xls) com os dados dos eventos"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 74,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadExcel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 78,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== loading) {
        t4 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "20px",
                background: "#eff6ff",
                borderRadius: "8px",
                marginBottom: "20px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0
                },
                children: "⏳ Carregando dados..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboards/page.tsx",
                lineNumber: 91,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 85,
            columnNumber: 21
        }, this);
        $[6] = loading;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Estatisticas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboards/page.tsx",
                lineNumber: 101,
                columnNumber: 19
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 108,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Filtre os eventos por coluna específica ou faça uma busca global"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 108,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filtros$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 112,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Visualizações em gráficos"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 119,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Faça uma análise visual dos dados com diferentes tipos de gráficos"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 119,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Graficos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 123,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Tabela de Dados"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 131,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Visualize todos os eventos cadastrados"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 131,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelaEventos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/dashboards/page.tsx",
                    lineNumber: 135,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            style: {
                textAlign: "center",
                marginTop: "40px",
                color: "#999"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: " © Desenvolvido por Emilly Silva •  2026 Eventos "
            }, void 0, false, {
                fileName: "[project]/src/app/dashboards/page.tsx",
                lineNumber: 140,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboards/page.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[13] = t4;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    return t10;
}
_s(PageDash, "tnxb3th3O6DOctukBquK8hNscXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = PageDash;
var _c;
__turbopack_context__.k.register(_c, "PageDash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_24564c51._.js.map