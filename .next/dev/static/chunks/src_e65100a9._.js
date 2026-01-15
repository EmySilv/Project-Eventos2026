(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UploadExcel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "02889e2bab5df67ecc8f43c83e8185e8462f5dc9996a2e192bfe5bb9b4cb914b") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "02889e2bab5df67ecc8f43c83e8185e8462f5dc9996a2e192bfe5bb9b4cb914b";
    }
    const { salvarFirebase, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [mensagem, setMensagem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "UploadExcel[handleFileChange]": (e)=>{
                const selectedFile = e.target.files?.[0] || null;
                setFile(selectedFile);
                if (selectedFile) {
                    setStatus("idle");
                    setMensagem("");
                }
            }
        })["UploadExcel[handleFileChange]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleFileChange = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "UploadExcel[handleButtonClick]": ()=>{
                fileInputRef.current?.click();
            }
        })["UploadExcel[handleButtonClick]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleButtonClick = t1;
    let t2;
    if ($[3] !== file || $[4] !== salvarFirebase) {
        t2 = ({
            "UploadExcel[processarArquivo]": async ()=>{
                if (!file) {
                    setStatus("error");
                    setMensagem("\u26A0\uFE0F Selecione um arquivo antes de processar");
                    return;
                }
                if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
                    setStatus("error");
                    setMensagem("\u274C Arquivo n\xE3o suportado. Envie um Excel (.xlsx ou .xls)");
                    return;
                }
                ;
                try {
                    setStatus("loading");
                    setMensagem("\u23F3 Processando arquivo... Isso pode levar alguns segundos");
                    const buffer = await file.arrayBuffer();
                    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](buffer);
                    const sheet = workbook.Sheets[workbook.SheetNames[0]];
                    const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet, {
                        defval: ""
                    });
                    if (json.length === 0) {
                        setStatus("error");
                        setMensagem("\u274C Planilha vazia! Adicione dados antes de fazer upload.");
                        return;
                    }
                    await salvarFirebase(json);
                    setStatus("success");
                    setMensagem(`✅ Upload concluído! ${json.length} eventos salvos com sucesso.`);
                    setTimeout({
                        "UploadExcel[processarArquivo > setTimeout()]": ()=>{
                            setFile(null);
                            setStatus("idle");
                            setMensagem("");
                        }
                    }["UploadExcel[processarArquivo > setTimeout()]"], 5000);
                } catch (t3) {
                    const error = t3;
                    setStatus("error");
                    setMensagem(`❌ Erro ao processar arquivo: ${error instanceof Error ? error.message : "Erro desconhecido"}`);
                }
            }
        })["UploadExcel[processarArquivo]"];
        $[3] = file;
        $[4] = salvarFirebase;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const processarArquivo = t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: {
                display: "block",
                marginBottom: "12px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#374151"
            },
            children: "📁 Selecione o arquivo Excel:"
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            ref: fileInputRef,
            type: "file",
            accept: ".xlsx,.xls",
            onChange: handleFileChange,
            style: {
                display: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = file ? "2px solid #10b981" : "2px dashed #d1d5db";
    const t7 = file ? "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" : "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)";
    let t8;
    if ($[9] !== t6 || $[10] !== t7) {
        t8 = {
            border: t6,
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
            cursor: "pointer",
            background: t7,
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden"
        };
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t10;
    let t9;
    if ($[12] !== file) {
        t9 = ({
            "UploadExcel[<div>.onMouseEnter]": (e_0)=>{
                if (!file) {
                    e_0.currentTarget.style.borderColor = "#4f46e5";
                    e_0.currentTarget.style.background = "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)";
                }
            }
        })["UploadExcel[<div>.onMouseEnter]"];
        t10 = ({
            "UploadExcel[<div>.onMouseLeave]": (e_1)=>{
                if (!file) {
                    e_1.currentTarget.style.borderColor = "#d1d5db";
                    e_1.currentTarget.style.background = "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)";
                }
            }
        })["UploadExcel[<div>.onMouseLeave]"];
        $[12] = file;
        $[13] = t10;
        $[14] = t9;
    } else {
        t10 = $[13];
        t9 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            fontSize: "48px",
            marginBottom: "15px",
            transition: "transform 0.3s ease"
        };
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const t12 = file ? "\u2705" : "\uD83D\uDCE4";
    let t13;
    if ($[16] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[16] = t12;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== file) {
        t14 = file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: "0 0 8px 0",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#065f46"
                    },
                    children: file.name
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 204,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: 0,
                        fontSize: "14px",
                        color: "#059669"
                    },
                    children: [
                        (file.size / 1024).toFixed(2),
                        " KB"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 209,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: "10px 0 0 0",
                        fontSize: "13px",
                        color: "#047857"
                    },
                    children: "Clique para selecionar outro arquivo"
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 213,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 204,
            columnNumber: 18
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: "0 0 8px 0",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#374151"
                    },
                    children: "Clique para selecionar arquivo"
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 217,
                    columnNumber: 64
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: 0,
                        fontSize: "14px",
                        color: "#6b7280"
                    },
                    children: "ou arraste e solte aqui"
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 222,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        margin: "10px 0 0 0",
                        fontSize: "13px",
                        color: "#9ca3af"
                    },
                    children: "Formatos aceitos: .xlsx, .xls"
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 226,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 217,
            columnNumber: 59
        }, this);
        $[18] = file;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t10 || $[21] !== t13 || $[22] !== t14 || $[23] !== t8 || $[24] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: handleButtonClick,
                    style: t8,
                    onMouseEnter: t9,
                    onMouseLeave: t10,
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 238,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t13;
        $[22] = t14;
        $[23] = t8;
        $[24] = t9;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    const t16 = loading || !file;
    const t17 = file && !loading ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "#cbd5e1";
    const t18 = file && !loading ? "pointer" : "not-allowed";
    const t19 = file && !loading ? "0 4px 15px rgba(102, 126, 234, 0.4)" : "none";
    let t20;
    if ($[26] !== t17 || $[27] !== t18 || $[28] !== t19) {
        t20 = {
            padding: "16px 24px",
            background: t17,
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: t18,
            fontWeight: "700",
            fontSize: "16px",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            boxShadow: t19,
            transform: "scale(1)"
        };
        $[26] = t17;
        $[27] = t18;
        $[28] = t19;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    let t22;
    if ($[30] !== file || $[31] !== loading) {
        t21 = ({
            "UploadExcel[<button>.onMouseEnter]": (e_2)=>{
                if (file && !loading) {
                    e_2.currentTarget.style.transform = "scale(1.02)";
                    e_2.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
                }
            }
        })["UploadExcel[<button>.onMouseEnter]"];
        t22 = ({
            "UploadExcel[<button>.onMouseLeave]": (e_3)=>{
                e_3.currentTarget.style.transform = "scale(1)";
                e_3.currentTarget.style.boxShadow = file && !loading ? "0 4px 15px rgba(102, 126, 234, 0.4)" : "none";
            }
        })["UploadExcel[<button>.onMouseLeave]"];
        $[30] = file;
        $[31] = loading;
        $[32] = t21;
        $[33] = t22;
    } else {
        t21 = $[32];
        t22 = $[33];
    }
    let t23;
    if ($[34] !== loading) {
        t23 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "20px",
                        height: "20px",
                        border: "3px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 305,
                    columnNumber: 23
                }, this),
                "Processando..."
            ]
        }, void 0, true) : "\uD83D\uDE80 Processar Upload";
        $[34] = loading;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] !== processarArquivo || $[37] !== t16 || $[38] !== t20 || $[39] !== t21 || $[40] !== t22 || $[41] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: processarArquivo,
            disabled: t16,
            style: t20,
            onMouseEnter: t21,
            onMouseLeave: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[36] = processarArquivo;
        $[37] = t16;
        $[38] = t20;
        $[39] = t21;
        $[40] = t22;
        $[41] = t23;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== mensagem || $[44] !== status) {
        t25 = status !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "16px 20px",
                background: status === "error" ? "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)" : status === "success" ? "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)" : "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                border: `2px solid ${status === "error" ? "#f87171" : status === "success" ? "#34d399" : "#60a5fa"}`,
                borderRadius: "10px",
                color: status === "error" ? "#991b1b" : status === "success" ? "#065f46" : "#1e40af",
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: "20px"
                    },
                    children: status === "error" ? "\u26A0\uFE0F" : status === "success" ? "\u2705" : "\u2139\uFE0F"
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadExcel.tsx",
                    lineNumber: 345,
                    columnNumber: 8
                }, this),
                mensagem
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 333,
            columnNumber: 32
        }, this);
        $[43] = mensagem;
        $[44] = status;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== t15 || $[47] !== t24 || $[48] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t15,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[46] = t15;
        $[47] = t24;
        $[48] = t25;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    return t26;
}
_s(UploadExcel, "EPfSH9X1c8CZjLzo6JlwMPRNPDQ=", false, function() {
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
function Filtros() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "d981cd85b12a2f02f7a59e05f5ab368a188b995f78445fdf144e2741d8fdd746") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d981cd85b12a2f02f7a59e05f5ab368a188b995f78445fdf144e2741d8fdd746";
    }
    const { eventosTodos, colunas, setFiltros } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [colunaSelecionada, setColunaSelecionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [valorSelecionado, setValorSelecionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [textoBusca, setTextoBusca] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    if ($[5] !== colunaSelecionada || $[6] !== setFiltros || $[7] !== textoBusca || $[8] !== valorSelecionado) {
        t1 = ({
            "Filtros[aplicarFiltros]": ()=>{
                setFiltros({
                    coluna: colunaSelecionada,
                    valor: valorSelecionado,
                    busca: textoBusca
                });
            }
        })["Filtros[aplicarFiltros]"];
        $[5] = colunaSelecionada;
        $[6] = setFiltros;
        $[7] = textoBusca;
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
                setTextoBusca("");
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
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: "20px"
                    },
                    children: "🎯"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 132,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "600"
                    },
                    children: "Filtrar por Categoria"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 134,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        t6 = {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
        };
        t7 = {
            flex: 1,
            minWidth: "200px"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: {
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#666"
            },
            children: "Selecione a coluna:"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
    } else {
        t4 = $[15];
        t5 = $[16];
        t6 = $[17];
        t7 = $[18];
        t8 = $[19];
    }
    let t10;
    let t11;
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Filtros[<select>.onChange]": (e)=>{
                setColunaSelecionada(e.target.value);
                setValorSelecionado("");
            }
        })["Filtros[<select>.onChange]"];
        t10 = {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "2px solid #e5e7eb",
            fontSize: "14px",
            cursor: "pointer",
            background: "#fff"
        };
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Nenhum filtro (Visão Geral)"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
        $[22] = t9;
    } else {
        t10 = $[20];
        t11 = $[21];
        t9 = $[22];
    }
    let t12;
    if ($[23] !== colunas) {
        t12 = colunas?.map(_FiltrosAnonymous);
        $[23] = colunas;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== colunaSelecionada || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t7,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: colunaSelecionada,
                    onChange: t9,
                    style: t10,
                    children: [
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 204,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[25] = colunaSelecionada;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== colunaSelecionada || $[29] !== valorSelecionado || $[30] !== valoresUnicos) {
        t14 = colunaSelecionada && valoresUnicos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                minWidth: "200px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    style: {
                        display: "block",
                        marginBottom: "8px",
                        fontSize: "14px",
                        color: "#666"
                    },
                    children: "Selecione o valor:"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 216,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: valorSelecionado,
                    onChange: {
                        "Filtros[<select>.onChange]": (e_0)=>setValorSelecionado(e_0.target.value)
                    }["Filtros[<select>.onChange]"],
                    style: {
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "2px solid #e5e7eb",
                        fontSize: "14px",
                        cursor: "pointer",
                        background: "#fff"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "📊 Todos os itens (visão agregada)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 231,
                            columnNumber: 10
                        }, this),
                        valoresUnicos.map(_FiltrosValoresUnicosMap)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 221,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 213,
            columnNumber: 60
        }, this);
        $[28] = colunaSelecionada;
        $[29] = valorSelecionado;
        $[30] = valoresUnicos;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t13 || $[33] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t6,
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 241,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t14;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    let t17;
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                borderTop: "1px solid #e5e7eb"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: "20px"
                    },
                    children: "🔍"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 260,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "600"
                    },
                    children: "Busca Rápida"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 262,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: {
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#666"
            },
            children: "Pesquisar em todas as colunas:"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[35] = t16;
        $[36] = t17;
        $[37] = t18;
    } else {
        t16 = $[35];
        t17 = $[36];
        t18 = $[37];
    }
    let t19;
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Filtros[<input>.onChange]": (e_1)=>setTextoBusca(e_1.target.value)
        })["Filtros[<input>.onChange]"];
        t20 = {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "2px solid #e5e7eb",
            fontSize: "14px"
        };
        $[38] = t19;
        $[39] = t20;
    } else {
        t19 = $[38];
        t20 = $[39];
    }
    let t21;
    if ($[40] !== textoBusca) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Digite qualquer termo para buscar...",
                            value: textoBusca,
                            onChange: t19,
                            style: t20
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 302,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 302,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[40] = textoBusca;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap"
        };
        $[42] = t22;
    } else {
        t22 = $[42];
    }
    let t23;
    let t24;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            padding: "10px 20px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
        };
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✅"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[43] = t23;
        $[44] = t24;
    } else {
        t23 = $[43];
        t24 = $[44];
    }
    let t25;
    if ($[45] !== aplicarFiltros) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: aplicarFiltros,
            style: t23,
            children: [
                t24,
                "Aplicar Filtros"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[45] = aplicarFiltros;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    let t26;
    if ($[47] !== colunaSelecionada || $[48] !== selecionarTodos) {
        t26 = colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: selecionarTodos,
            style: {
                padding: "10px 20px",
                background: "#28b183",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "📊"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 364,
                    columnNumber: 8
                }, this),
                "Ver Todos os Itens Agregados"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 352,
            columnNumber: 32
        }, this);
        $[47] = colunaSelecionada;
        $[48] = selecionarTodos;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    let t28;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            padding: "10px 20px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
        };
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🗑️"
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[50] = t27;
        $[51] = t28;
    } else {
        t27 = $[50];
        t28 = $[51];
    }
    let t29;
    if ($[52] !== limparFiltros) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: limparFiltros,
            style: t27,
            children: [
                t28,
                "Limpar Tudo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[52] = limparFiltros;
        $[53] = t29;
    } else {
        t29 = $[53];
    }
    let t30;
    if ($[54] !== t25 || $[55] !== t26 || $[56] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t22,
            children: [
                t25,
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[54] = t25;
        $[55] = t26;
        $[56] = t29;
        $[57] = t30;
    } else {
        t30 = $[57];
    }
    let t31;
    if ($[58] !== colunaSelecionada || $[59] !== textoBusca || $[60] !== valorSelecionado) {
        t31 = (colunaSelecionada || textoBusca) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "15px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "8px",
                color: "#fff"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "18px"
                            },
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 424,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                fontSize: "15px"
                            },
                            children: "Filtros Ativos:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 426,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 419,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        paddingLeft: "30px"
                    },
                    children: [
                        colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "5px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "📋 Categoria:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 432,
                                    columnNumber: 12
                                }, this),
                                " ",
                                colunaSelecionada,
                                valorSelecionado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: "10px",
                                        background: "rgba(255,255,255,0.3)",
                                        padding: "2px 8px",
                                        borderRadius: "4px"
                                    },
                                    children: [
                                        '= "',
                                        valorSelecionado,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 432,
                                    columnNumber: 82
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: "10px",
                                        background: "rgba(255,255,255,0.3)",
                                        padding: "2px 8px",
                                        borderRadius: "4px"
                                    },
                                    children: "Todos os itens"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 437,
                                    columnNumber: 46
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 430,
                            columnNumber: 32
                        }, this),
                        textoBusca && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "🔍 Busca:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 442,
                                    columnNumber: 63
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: "rgba(255,255,255,0.3)",
                                        padding: "2px 8px",
                                        borderRadius: "4px"
                                    },
                                    children: [
                                        '"',
                                        textoBusca,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Filtros.tsx",
                                    lineNumber: 442,
                                    columnNumber: 94
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Filtros.tsx",
                            lineNumber: 442,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 428,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 414,
            columnNumber: 48
        }, this);
        $[58] = colunaSelecionada;
        $[59] = textoBusca;
        $[60] = valorSelecionado;
        $[61] = t31;
    } else {
        t31 = $[61];
    }
    let t32;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "12px",
                background: "#f0fdf4",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#166534",
                border: "1px solid #bbf7d0"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "💡 Dica:"
                }, void 0, false, {
                    fileName: "[project]/src/components/Filtros.tsx",
                    lineNumber: 463,
                    columnNumber: 8
                }, this),
                ' Selecione "Todos os itens" para ver gráficos agregados por categoria, ou escolha um valor específico para análise detalhada.'
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, this);
        $[62] = t32;
    } else {
        t32 = $[62];
    }
    let t33;
    if ($[63] !== t15 || $[64] !== t21 || $[65] !== t30 || $[66] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: [
                t15,
                t16,
                t21,
                t30,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[63] = t15;
        $[64] = t21;
        $[65] = t30;
        $[66] = t31;
        $[67] = t33;
    } else {
        t33 = $[67];
    }
    return t33;
}
_s(Filtros, "nMaGKeI+8WbgM/jTn4e1Ka0LtZg=", false, function() {
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
        lineNumber: 482,
        columnNumber: 10
    }, this);
}
function _FiltrosAnonymous(col) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: col,
        children: col
    }, col, false, {
        fileName: "[project]/src/components/Filtros.tsx",
        lineNumber: 485,
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
    // 🎯 FUNÇÃO HELPER: Agrupa dados por coluna
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
    // 📊 GRÁFICOS GENÉRICOS - FUNCIONAM PARA QUALQUER FILTRO
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
    // 📈 GRÁFICO DE TIMELINE (se houver coluna de data)
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
                        } catch  {
                        // Ignora datas inválidas
                        }
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
    // 🔍 VERIFICAÇÃO DE DADOS
    // ============================================
    if (!eventosTodos?.length || !colunas?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "40px",
                color: "#999"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "18px"
                    },
                    children: "📊 Sem dados para exibir gráficos"
                }, void 0, false, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 149,
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
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 144,
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "18px"
                },
                children: "⏳ Processando dados..."
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 161,
            columnNumber: 12
        }, this);
    }
    // ============================================
    // 🎯 RENDERIZAÇÃO
    // ============================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "15px",
                    background: colunaSelecionada ? "#eff6ff" : "#f0fdf4",
                    borderRadius: "8px",
                    marginBottom: "25px",
                    borderLeft: `4px solid ${colunaSelecionada ? "#4f46e5" : "#10b981"}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "20px"
                            },
                            children: colunaSelecionada ? "🎯" : "📊"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: colunaSelecionada ? `Análise focada em: ${colunaSelecionada}` : "Visão Geral de Todos os Eventos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: "5px 0 0 0",
                                        fontSize: "14px",
                                        color: "#666"
                                    },
                                    children: colunaSelecionada ? `Mostrando ${eventosFiltrados} de ${totalEventos} eventos` : `Total de ${totalEventos} eventos cadastrados`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gap: "25px"
                },
                children: [
                    graficosGenericos.colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                        titulo: `📊 Distribuição: ${colunaSelecionada}`,
                        tipo: "pizza",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                            data: graficosGenericos.colunaSelecionada
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 216,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                        titulo: `🏆 Top 10 - ${graficosGenericos.analise1.titulo}`,
                        tipo: "barras",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            data: graficosGenericos.analise1,
                            options: {
                                indexAxis: "y"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                        titulo: `🎨 Análise por ${graficosGenericos.analise2.titulo}`,
                        tipo: "rosca",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                            data: graficosGenericos.analise2
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                        titulo: `📈 Distribuição: ${graficosGenericos.analise3.titulo}`,
                        tipo: "barras",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            data: graficosGenericos.analise3
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    graficoTimeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                        titulo: `⏰ Timeline - ${graficoTimeline.titulo}`,
                        tipo: "linha",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            data: graficoTimeline
                        }, void 0, false, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Graficos.tsx",
                        lineNumber: 238,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Graficos.tsx",
        lineNumber: 175,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "91330cfdc5f4d26582a171d44f6da163c3400cd8c9cc7db391c8af6e9ac47892") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91330cfdc5f4d26582a171d44f6da163c3400cd8c9cc7db391c8af6e9ac47892";
    }
    const { titulo, tipo, children } = t0;
    const tamanhoMaximo = tipo === "pizza" || tipo === "rosca" ? 500 : 700;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        };
        t2 = {
            marginBottom: "20px",
            color: "#374151"
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== titulo) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: t2,
            children: titulo
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 283,
            columnNumber: 10
        }, this);
        $[3] = titulo;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== tamanhoMaximo) {
        t4 = {
            maxWidth: tamanhoMaximo,
            margin: "0 auto"
        };
        $[5] = tamanhoMaximo;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== children || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 302,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t3 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 311,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c1 = GraficoCard;
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "2649032fec0fc35d582837f47070936857b875a1369e201893a7d9e4579921b4") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2649032fec0fc35d582837f47070936857b875a1369e201893a7d9e4579921b4";
    }
    const { eventos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    if (!eventos?.length) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    padding: "40px",
                    color: "#999"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "16px"
                        },
                        children: "📋 Nenhum evento para exibir"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 24,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "14px",
                            marginTop: "8px"
                        },
                        children: "Faça upload de uma planilha ou ajuste os filtros"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 26,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 20,
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
    if ($[2] !== eventos) {
        let t4;
        if ($[7] !== eventos[0]) {
            t4 = ({
                "TabelaEventos[ORDEM_COLUNAS.filter()]": (col)=>Object.keys(eventos[0]).includes(col)
            })["TabelaEventos[ORDEM_COLUNAS.filter()]"];
            $[7] = eventos[0];
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        const colunasVisiveis = ORDEM_COLUNAS.filter(t4);
        let t5;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                width: "100%",
                overflowX: "auto",
                marginTop: 16,
                borderRadius: "8px",
                border: "1px solid #e5e7eb"
            };
            t1 = {
                width: "max-content",
                minWidth: "100%",
                borderCollapse: "collapse"
            };
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                style: {
                    border: "1px solid #ccc",
                    padding: "12px",
                    background: "#fff",
                    color: "#374151",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    fontWeight: "700",
                    position: "sticky",
                    left: 0,
                    zIndex: 2,
                    minWidth: "60px"
                },
                children: "ID"
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[9] = t1;
            $[10] = t3;
            $[11] = t5;
        } else {
            t1 = $[9];
            t3 = $[10];
            t5 = $[11];
        }
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    t5,
                    colunasVisiveis.map(_TabelaEventosColunasVisiveisMap)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t0 = eventos.map({
            "TabelaEventos[eventos.map()]": (evento, index)=>{
                const isEven = index % 2 === 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    style: {
                        transition: "background-color 0.2s",
                        backgroundColor: isEven ? "#fff" : "#fafafa"
                    },
                    onMouseEnter: _TabelaEventosEventosMapTrOnMouseEnter,
                    onMouseLeave: {
                        "TabelaEventos[eventos.map() > <tr>.onMouseLeave]": (e_0)=>{
                            e_0.currentTarget.style.backgroundColor = isEven ? "#fff" : "#fafafa";
                        }
                    }["TabelaEventos[eventos.map() > <tr>.onMouseLeave]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                border: "1px solid #ddd",
                                padding: "12px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                                fontWeight: "700",
                                background: "#fff",
                                color: "#374151",
                                position: "sticky",
                                left: 0,
                                zIndex: 1
                            },
                            children: index + 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/TabelaEventos.tsx",
                            lineNumber: 98,
                            columnNumber: 64
                        }, this),
                        colunasVisiveis.map({
                            "TabelaEventos[eventos.map() > colunasVisiveis.map()]": (col_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "12px",
                                        whiteSpace: "nowrap",
                                        background: isEven ? "#fff" : "#fafafa"
                                    },
                                    children: String(evento[col_1] ?? "")
                                }, `${index}-${col_1}`, false, {
                                    fileName: "[project]/src/components/TabelaEventos.tsx",
                                    lineNumber: 110,
                                    columnNumber: 78
                                }, this)
                        }["TabelaEventos[eventos.map() > colunasVisiveis.map()]"])
                    ]
                }, `evento-${index}`, true, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 91,
                    columnNumber: 16
                }, this);
            }
        }["TabelaEventos[eventos.map()]"]);
        $[2] = eventos;
        $[3] = t0;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t0 = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    if ($[12] !== t0) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[12] = t0;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== t1 || $[15] !== t2 || $[16] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: t1,
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t2;
        $[16] = t4;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            padding: "12px",
            background: "#f9fafb",
            borderTop: "2px solid #e5e7eb",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
            fontWeight: "500"
        };
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            color: "#4f46e5"
        };
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== eventos.length) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: [
                "📊 Total: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: t7,
                    children: eventos.length
                }, void 0, false, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 174,
                    columnNumber: 36
                }, this),
                " evento(s) exibido(s)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[20] = eventos.length;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== t3 || $[23] !== t5 || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 182,
            columnNumber: 10
        }, this);
        $[22] = t3;
        $[23] = t5;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    return t9;
}
_s(TabelaEventos, "UBoUXLbzReyotPe9VvWZ2ZRaA10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = TabelaEventos;
function _TabelaEventosEventosMapTrOnMouseEnter(e) {
    e.currentTarget.style.backgroundColor = "#f9fafb";
}
function _TabelaEventosColunasVisiveisMap(col_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        style: {
            border: "1px solid #ccc",
            padding: "12px",
            background: "#f9fafb",
            whiteSpace: "nowrap",
            textAlign: "left",
            fontWeight: "600",
            color: "#374151"
        },
        children: col_0
    }, col_0, false, {
        fileName: "[project]/src/components/TabelaEventos.tsx",
        lineNumber: 196,
        columnNumber: 10
    }, this);
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "0f4c8f7ac83441cda65fd6f9cd80cc1c667c9b6abb0712c83c657e5accbf1220") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f4c8f7ac83441cda65fd6f9cd80cc1c667c9b6abb0712c83c657e5accbf1220";
    }
    const { eventos, eventosTodos, colunas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
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
    let t5;
    if ($[18] !== stats.total) {
        t5 = {
            titulo: "Total de Eventos",
            valor: stats.total,
            icone: "\uD83D\uDCCA",
            cor: "#4f46e5"
        };
        $[18] = stats.total;
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== stats.filtrados) {
        t6 = {
            titulo: "Eventos Filtrados",
            valor: stats.filtrados,
            icone: "\uD83D\uDD0D",
            cor: "#10b981"
        };
        $[20] = stats.filtrados;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] !== stats.eventosPagos) {
        t7 = {
            titulo: "Eventos Pagos",
            valor: stats.eventosPagos,
            icone: "\uD83D\uDCB0",
            cor: "#f59e0b"
        };
        $[22] = stats.eventosPagos;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== stats.vivoPatrocina) {
        t8 = {
            titulo: "Vivo Patrocina",
            valor: stats.vivoPatrocina,
            icone: "\uD83C\uDFAF",
            cor: "#ef4444"
        };
        $[24] = stats.vivoPatrocina;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== stats.tiposUnicos) {
        t9 = {
            titulo: "Tipos Diferentes",
            valor: stats.tiposUnicos,
            icone: "\uD83C\uDFF7\uFE0F",
            cor: "#8b5cf6"
        };
        $[26] = stats.tiposUnicos;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== t5 || $[29] !== t6 || $[30] !== t7 || $[31] !== t8 || $[32] !== t9) {
        t10 = [
            t5,
            t6,
            t7,
            t8,
            t9
        ];
        $[28] = t5;
        $[29] = t6;
        $[30] = t7;
        $[31] = t8;
        $[32] = t9;
        $[33] = t10;
    } else {
        t10 = $[33];
    }
    const cards = t10;
    let t11;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginBottom: "20px"
        };
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    let t12;
    if ($[35] !== cards) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: cards.map(_EstatisticasCardsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/Estatisticas.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[35] = cards;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    return t12;
}
_s(Estatisticas, "yDn1gGH8KlNDxlEP6zP+d/AFZto=", false, function() {
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
            borderLeft: `4px solid ${card.cor}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "24px"
                        },
                        children: card.icone
                    }, void 0, false, {
                        fileName: "[project]/src/components/Estatisticas.tsx",
                        lineNumber: 199,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            margin: 0,
                            fontSize: "14px",
                            color: "#666",
                            fontWeight: "500"
                        },
                        children: card.titulo
                    }, void 0, false, {
                        fileName: "[project]/src/components/Estatisticas.tsx",
                        lineNumber: 201,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Estatisticas.tsx",
                lineNumber: 194,
                columnNumber: 6
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
                lineNumber: 206,
                columnNumber: 34
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/Estatisticas.tsx",
        lineNumber: 188,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Estatisticas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
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
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "cda6e161dffd7954437851cb6ba24dcbeb9e2f07eb5eb9335e5527c567ea3ee2") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cda6e161dffd7954437851cb6ba24dcbeb9e2f07eb5eb9335e5527c567ea3ee2";
    }
    const { loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                setMounted(true);
            }
        })["Home[useEffect()]"];
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
                            children: "📊 Eventos 2026"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 45,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#666",
                                fontSize: "16px"
                            },
                            children: "Carregando dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 34
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
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
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontSize: "36px",
                        marginBottom: "10px"
                    },
                    children: "Eventos 2026"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "16px"
                    },
                    children: "Dashboard interativo para visualização e gerenciamento de eventos"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 60,
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
                    children: "📤 Upload da Planilha"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 76,
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
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadExcel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 76,
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
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 87,
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
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 103,
                columnNumber: 19
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 103,
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
                    children: "🔍 Filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 110,
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
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filtros$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 114,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 110,
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
                    children: "📊 Visualizações"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Análise visual dos dados com diferentes tipos de gráficos"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Graficos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 125,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 121,
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
                    children: "📋 Tabela de Dados"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#666",
                        fontSize: "14px",
                        marginBottom: "15px"
                    },
                    children: "Visualização completa de todos os eventos cadastrados"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelaEventos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 137,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            style: {
                textAlign: "center",
                marginTop: "40px",
                color: "#999"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Desenvolvido para o projeto Eventos 2026 • 2026"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 138,
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
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[13] = t4;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    return t10;
}
_s(Home, "tnxb3th3O6DOctukBquK8hNscXQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e65100a9._.js.map