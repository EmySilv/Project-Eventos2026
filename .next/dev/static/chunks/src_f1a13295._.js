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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "7112f4c9b4612afedb7f3bc0eeebd828150e2221592ba4425613e89a7e6735de") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7112f4c9b4612afedb7f3bc0eeebd828150e2221592ba4425613e89a7e6735de";
    }
    const { salvarFirebase, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [mensagem, setMensagem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== file || $[2] !== salvarFirebase) {
        t0 = ({
            "UploadExcel[processarArquivo]": async ()=>{
                if (!file) {
                    return;
                }
                if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
                    setStatus("error");
                    setMensagem("Arquivo n\xE3o suportado. Envie um Excel.");
                    return;
                }
                ;
                try {
                    setStatus("loading");
                    setMensagem("Processando e enviando dados para o banco...");
                    const buffer = await file.arrayBuffer();
                    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](buffer);
                    const sheet = workbook.Sheets[workbook.SheetNames[0]];
                    const json = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(sheet, {
                        defval: ""
                    });
                    await salvarFirebase(json);
                    setStatus("success");
                    setMensagem("Arquivo salvo com sucesso!");
                } catch (t1) {
                    const error = t1;
                    console.error(error);
                    const mensagemErro = error instanceof Error ? error.message : "Erro desconhecido";
                    setMensagem(`Erro: ${mensagemErro}`);
                }
            }
        })["UploadExcel[processarArquivo]"];
        $[1] = file;
        $[2] = salvarFirebase;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const processarArquivo = t0;
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            accept: ".xlsx,.xls",
            onChange: {
                "UploadExcel[<input>.onChange]": (e)=>setFile(e.target.files?.[0] || null)
            }["UploadExcel[<input>.onChange]"]
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            marginTop: 8
        };
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== loading || $[7] !== processarArquivo) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: processarArquivo,
            disabled: loading,
            style: t2,
            children: "Processar arquivo"
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[6] = loading;
        $[7] = processarArquivo;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== mensagem || $[10] !== status) {
        t4 = status !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                marginTop: 8,
                color: status === "error" ? "red" : "green"
            },
            children: mensagem
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 91,
            columnNumber: 31
        }, this);
        $[9] = mensagem;
        $[10] = status;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t3 || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_s(UploadExcel, "8NH/1XJxSejWROi2BSPOgG5kGgk=", false, function() {
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
    if ($[0] !== "5f63474869d409148e55aed574ee0d1b6aa3821336a589c74e9f600292c4d2d6") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f63474869d409148e55aed574ee0d1b6aa3821336a589c74e9f600292c4d2d6";
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
                background: "#10b981",
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

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
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
                    lineNumber: 21,
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
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    const colunaSelecionada = filtros?.coluna || "";
    const totalEventos = eventosTodos.length;
    const eventosFiltrados = eventos.length;
    // ============================================
    // 🎯 FUNÇÃO HELPER: Agrupa dados por coluna
    // ============================================
    const agruparPorColuna = (coluna, dadosBase = eventos)=>{
        const agrupado = {};
        dadosBase.forEach((item)=>{
            const valor = String(item[coluna] || "Não informado");
            agrupado[valor] = (agrupado[valor] || 0) + 1;
        });
        return agrupado;
    };
    // ============================================
    // 📊 GRÁFICOS PARA VISÃO GERAL (SEM FILTRO)
    // ============================================
    const graficosGerais = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficosGerais]": ()=>{
            // Gráfico 1: Distribuição por Tipo
            const colunaTipo = colunas.includes("Tipo") ? "Tipo" : colunas[0];
            const dadosTipo = agruparPorColuna(colunaTipo, eventosTodos);
            // Gráfico 2: Distribuição por Cidade
            const colunaCidade = colunas.includes("Cidade") ? "Cidade" : colunas[1];
            const dadosCidade = agruparPorColuna(colunaCidade, eventosTodos);
            const top10Cidades = Object.entries(dadosCidade).sort({
                "Graficos.useMemo[graficosGerais].top10Cidades": ([, a], [, b])=>b - a
            }["Graficos.useMemo[graficosGerais].top10Cidades"]).slice(0, 10);
            // Gráfico 3: Eventos Pagos vs Gratuitos
            const colunaPago = colunas.includes("Pago") ? "Pago" : null;
            const dadosPago = colunaPago ? agruparPorColuna(colunaPago, eventosTodos) : null;
            return {
                tipo: {
                    labels: Object.keys(dadosTipo),
                    datasets: [
                        {
                            label: `Distribuição por ${colunaTipo}`,
                            data: Object.values(dadosTipo),
                            backgroundColor: [
                                "#4f46e5",
                                "#10b981",
                                "#f59e0b",
                                "#ef4444",
                                "#8b5cf6",
                                "#ec4899"
                            ]
                        }
                    ]
                },
                cidades: {
                    labels: top10Cidades.map({
                        "Graficos.useMemo[graficosGerais]": ([key])=>key
                    }["Graficos.useMemo[graficosGerais]"]),
                    datasets: [
                        {
                            label: "Top 10 Cidades",
                            data: top10Cidades.map({
                                "Graficos.useMemo[graficosGerais]": ([, value])=>value
                            }["Graficos.useMemo[graficosGerais]"]),
                            backgroundColor: "#f59e0b"
                        }
                    ]
                },
                pago: dadosPago ? {
                    labels: Object.keys(dadosPago),
                    datasets: [
                        {
                            label: "Eventos Pagos vs Gratuitos",
                            data: Object.values(dadosPago),
                            backgroundColor: [
                                "#10b981",
                                "#ef4444"
                            ]
                        }
                    ]
                } : null
            };
        }
    }["Graficos.useMemo[graficosGerais]"], [
        eventosTodos,
        colunas
    ]);
    // ============================================
    // 🏙️ GRÁFICOS ESPECÍFICOS PARA CIDADE
    // ============================================
    const graficosCidade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficosCidade]": ()=>{
            if (!colunaSelecionada.toLowerCase().includes("cidade")) return null;
            // Distribuição por Tema dentro dessa cidade
            const colunaTema = colunas.includes("Tema") ? "Tema" : colunas[2];
            const dadosTema = agruparPorColuna(colunaTema, eventos);
            // Distribuição por Formato
            const colunaFormato = colunas.includes("Formato") ? "Formato" : colunas[3];
            const dadosFormato = agruparPorColuna(colunaFormato, eventos);
            // Eventos ao longo do tempo nessa cidade
            const colunaData = colunas.find({
                "Graficos.useMemo[graficosCidade]": (c)=>c.toLowerCase().includes("data inicial")
            }["Graficos.useMemo[graficosCidade]"]) || colunas[4];
            const dadosTimeline = {};
            eventos.forEach({
                "Graficos.useMemo[graficosCidade]": (item_0)=>{
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
            }["Graficos.useMemo[graficosCidade]"]);
            const timelineOrdenada = Object.keys(dadosTimeline).sort();
            return {
                tema: {
                    labels: Object.keys(dadosTema),
                    datasets: [
                        {
                            label: "Temas mais populares",
                            data: Object.values(dadosTema),
                            backgroundColor: [
                                "#8b5cf6",
                                "#ec4899",
                                "#06b6d4",
                                "#84cc16"
                            ]
                        }
                    ]
                },
                formato: {
                    labels: Object.keys(dadosFormato),
                    datasets: [
                        {
                            label: "Formato dos eventos",
                            data: Object.values(dadosFormato),
                            backgroundColor: [
                                "#4f46e5",
                                "#10b981",
                                "#f59e0b"
                            ]
                        }
                    ]
                },
                timeline: timelineOrdenada.length > 0 ? {
                    labels: timelineOrdenada,
                    datasets: [
                        {
                            label: "Eventos ao longo do tempo",
                            data: timelineOrdenada.map({
                                "Graficos.useMemo[graficosCidade]": (k)=>dadosTimeline[k]
                            }["Graficos.useMemo[graficosCidade]"]),
                            borderColor: "#4f46e5",
                            backgroundColor: "rgba(79, 70, 229, 0.1)",
                            tension: 0.4,
                            fill: true
                        }
                    ]
                } : null
            };
        }
    }["Graficos.useMemo[graficosCidade]"], [
        colunaSelecionada,
        eventos,
        colunas
    ]);
    // ============================================
    // 🎨 GRÁFICOS ESPECÍFICOS PARA TEMA
    // ============================================
    const graficosTema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficosTema]": ()=>{
            if (!colunaSelecionada.toLowerCase().includes("tema")) return null;
            // Distribuição por Cidade
            const colunaCidade_0 = colunas.includes("Cidade") ? "Cidade" : colunas[1];
            const dadosCidade_0 = agruparPorColuna(colunaCidade_0, eventos);
            const top5Cidades = Object.entries(dadosCidade_0).sort({
                "Graficos.useMemo[graficosTema].top5Cidades": ([, a_0], [, b_0])=>b_0 - a_0
            }["Graficos.useMemo[graficosTema].top5Cidades"]).slice(0, 5);
            // Distribuição por Tipo
            const colunaTipo_0 = colunas.includes("Tipo") ? "Tipo" : colunas[0];
            const dadosTipo_0 = agruparPorColuna(colunaTipo_0, eventos);
            // Patrocínio
            const colunaVivo = colunas.includes("Vivo Patrocina") ? "Vivo Patrocina" : null;
            const dadosVivo = colunaVivo ? agruparPorColuna(colunaVivo, eventos) : null;
            return {
                cidades: {
                    labels: top5Cidades.map({
                        "Graficos.useMemo[graficosTema]": ([key_0])=>key_0
                    }["Graficos.useMemo[graficosTema]"]),
                    datasets: [
                        {
                            label: "Top 5 Cidades para este Tema",
                            data: top5Cidades.map({
                                "Graficos.useMemo[graficosTema]": ([, value_0])=>value_0
                            }["Graficos.useMemo[graficosTema]"]),
                            backgroundColor: "#10b981"
                        }
                    ]
                },
                tipo: {
                    labels: Object.keys(dadosTipo_0),
                    datasets: [
                        {
                            label: "Tipos de Evento",
                            data: Object.values(dadosTipo_0),
                            backgroundColor: [
                                "#4f46e5",
                                "#f59e0b",
                                "#ef4444",
                                "#8b5cf6"
                            ]
                        }
                    ]
                },
                vivo: dadosVivo ? {
                    labels: Object.keys(dadosVivo),
                    datasets: [
                        {
                            label: "Vivo Patrocina",
                            data: Object.values(dadosVivo),
                            backgroundColor: [
                                "#10b981",
                                "#ef4444"
                            ]
                        }
                    ]
                } : null
            };
        }
    }["Graficos.useMemo[graficosTema]"], [
        colunaSelecionada,
        eventos,
        colunas
    ]);
    // ============================================
    // 📅 GRÁFICOS ESPECÍFICOS PARA DATA
    // ============================================
    const graficosData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Graficos.useMemo[graficosData]": ()=>{
            if (!colunaSelecionada.toLowerCase().includes("data")) return null;
            // Distribuição por Tema
            const colunaTema_0 = colunas.includes("Tema") ? "Tema" : colunas[2];
            const dadosTema_0 = agruparPorColuna(colunaTema_0, eventos);
            // Distribuição por Cidade
            const colunaCidade_1 = colunas.includes("Cidade") ? "Cidade" : colunas[1];
            const dadosCidade_1 = agruparPorColuna(colunaCidade_1, eventos);
            return {
                tema: {
                    labels: Object.keys(dadosTema_0),
                    datasets: [
                        {
                            label: "Temas neste período",
                            data: Object.values(dadosTema_0),
                            backgroundColor: Object.keys(dadosTema_0).map({
                                "Graficos.useMemo[graficosData]": (_, i)=>`hsl(${i * 360 / Object.keys(dadosTema_0).length}, 70%, 60%)`
                            }["Graficos.useMemo[graficosData]"])
                        }
                    ]
                },
                cidade: {
                    labels: Object.keys(dadosCidade_1).slice(0, 8),
                    datasets: [
                        {
                            label: "Principais cidades",
                            data: Object.values(dadosCidade_1).slice(0, 8),
                            backgroundColor: "#06b6d4"
                        }
                    ]
                }
            };
        }
    }["Graficos.useMemo[graficosData]"], [
        colunaSelecionada,
        eventos,
        colunas
    ]);
    // ============================================
    // 🎯 RENDERIZAÇÃO CONDICIONAL
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
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: colunaSelecionada ? `Visualização filtrada: ${colunaSelecionada}` : "Visão Geral de Todos os Eventos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 261,
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
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Graficos.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Graficos.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gap: "25px"
                },
                children: [
                    !colunaSelecionada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🎯 Distribuição por Tipo de Evento",
                                tipo: "pizza",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: graficosGerais.tipo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🏙️ Top 10 Cidades com Mais Eventos",
                                tipo: "barras",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    data: graficosGerais.cidades,
                                    options: {
                                        indexAxis: "y"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            graficosGerais.pago && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "💰 Eventos Pagos vs Gratuitos",
                                tipo: "rosca",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                    data: graficosGerais.pago
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 294,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true),
                    graficosCidade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🎨 Temas Mais Populares nesta Cidade",
                                tipo: "rosca",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                    data: graficosCidade.tema
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "📍 Formato dos Eventos",
                                tipo: "pizza",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: graficosCidade.formato
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            graficosCidade.timeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "📈 Timeline de Eventos",
                                tipo: "linha",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    data: graficosCidade.timeline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 311,
                                columnNumber: 41
                            }, this)
                        ]
                    }, void 0, true),
                    graficosTema && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🏙️ Top 5 Cidades para este Tema",
                                tipo: "barras",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    data: graficosTema.cidades
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "📊 Tipos de Evento",
                                tipo: "pizza",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: graficosTema.tipo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            graficosTema.vivo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🎯 Patrocínio Vivo",
                                tipo: "rosca",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                    data: graficosTema.vivo
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 329,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 328,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true),
                    graficosData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🎨 Temas Neste Período",
                                tipo: "pizza",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                    data: graficosData.tema
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoCard, {
                                titulo: "🏙️ Principais Cidades",
                                tipo: "barras",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    data: graficosData.cidade
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Graficos.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Graficos.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Graficos.tsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
_s(Graficos, "kyCcI6FoSZ3ZHJXXh//IF8bed6w=", false, function() {
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
    if ($[0] !== "bc07d7a8a7f2bfcd7136a0f72329b2042ae05305130a8db18b490823decda390") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc07d7a8a7f2bfcd7136a0f72329b2042ae05305130a8db18b490823decda390";
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
            lineNumber: 387,
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
            lineNumber: 406,
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
            lineNumber: 415,
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
    "Cód",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "54281b2b672c37c8e3502b1f6a13023916001495720ae1eee9f04e3436c01f91") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54281b2b672c37c8e3502b1f6a13023916001495720ae1eee9f04e3436c01f91";
    }
    const { eventos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"])();
    if (!eventos.length) {
        return null;
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== eventos) {
        let t4;
        if ($[6] !== eventos[0]) {
            t4 = ({
                "TabelaEventos[ORDEM_COLUNAS.filter()]": (col)=>Object.keys(eventos[0]).includes(col)
            })["TabelaEventos[ORDEM_COLUNAS.filter()]"];
            $[6] = eventos[0];
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        const colunasVisiveis = ORDEM_COLUNAS.filter(t4);
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                width: "100%",
                overflowX: "auto",
                marginTop: 16
            };
            t1 = {
                width: "max-content",
                minWidth: "100%",
                borderCollapse: "collapse"
            };
            $[8] = t1;
            $[9] = t3;
        } else {
            t1 = $[8];
            t3 = $[9];
        }
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: colunasVisiveis.map(_TabelaEventosColunasVisiveisMap)
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        t0 = eventos.map({
            "TabelaEventos[eventos.map()]": (evento, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: colunasVisiveis.map({
                        "TabelaEventos[eventos.map() > colunasVisiveis.map()]": (col_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                style: {
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    whiteSpace: "nowrap"
                                },
                                children: String(evento[col_1] ?? "")
                            }, col_1, false, {
                                fileName: "[project]/src/components/TabelaEventos.tsx",
                                lineNumber: 57,
                                columnNumber: 76
                            }, this)
                    }["TabelaEventos[eventos.map() > colunasVisiveis.map()]"])
                }, index, false, {
                    fileName: "[project]/src/components/TabelaEventos.tsx",
                    lineNumber: 56,
                    columnNumber: 58
                }, this)
        }["TabelaEventos[eventos.map()]"]);
        $[1] = eventos;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
    }
    let t4;
    if ($[10] !== t0) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t0
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[10] = t0;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t1 || $[13] !== t2 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: t1,
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t2;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t3 || $[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    return t6;
}
_s(TabelaEventos, "UBoUXLbzReyotPe9VvWZ2ZRaA10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventsContext"]
    ];
});
_c = TabelaEventos;
function _TabelaEventosColunasVisiveisMap(col_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        style: {
            border: "1px solid #ccc",
            padding: "8px",
            background: "#f5f5f5",
            whiteSpace: "nowrap",
            textAlign: "left"
        },
        children: col_0
    }, col_0, false, {
        fileName: "[project]/src/components/TabelaEventos.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TabelaEventos");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadExcel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadExcel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filtros$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Filtros.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Graficos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Graficos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelaEventos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TabelaEventos.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0e5553d7e8801f3b15c0404e5f862c5438d2267243ecef50e87ba7aacc02e5dc") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0e5553d7e8801f3b15c0404e5f862c5438d2267243ecef50e87ba7aacc02e5dc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Eventos 2026"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Upload da Planilha"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadExcel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Filtros"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filtros$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Visualizações"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Graficos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            children: [
                t0,
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Dados"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 80
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabelaEventos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 94
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f1a13295._.js.map