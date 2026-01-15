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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "43b2db0d0eaac66cab19fb6001060c4aeffb9c9a49ee8ebffe7f3d3bd4c3a65b") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43b2db0d0eaac66cab19fb6001060c4aeffb9c9a49ee8ebffe7f3d3bd4c3a65b";
    }
    const { salvarFirebase, limparFirebase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$eventsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventsContext"]);
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
                    setStatus("error");
                    setMensagem("Erro ao salvar os dados no banco.");
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
    if ($[4] !== limparFirebase) {
        t1 = ({
            "UploadExcel[limparDados]": async ()=>{
                const confirmar = window.confirm("Tem certeza que deseja apagar todos os dados?");
                if (confirmar) {
                    await limparFirebase();
                    setStatus("idle");
                    setMensagem("");
                    setFile(null);
                }
            }
        })["UploadExcel[limparDados]"];
        $[4] = limparFirebase;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const limparDados = t1;
    let t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            accept: ".xlsx,.xls",
            onChange: {
                "UploadExcel[<input>.onChange]": (e)=>setFile(e.target.files?.[0] || null)
            }["UploadExcel[<input>.onChange]"]
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        t3 = {
            marginTop: 8
        };
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    let t4;
    if ($[8] !== processarArquivo) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: processarArquivo,
            disabled: loading,
            children: "Processar arquivo"
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[8] = processarArquivo;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            marginLeft: 8
        };
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== limparDados) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: limparDados,
            disabled: loading,
            style: t5,
            children: "Limpar dados"
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[11] = limparDados;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t4 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[13] = t4;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== mensagem || $[17] !== status) {
        t8 = status !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                marginTop: 8,
                color: status === "error" ? "red" : "green"
            },
            children: mensagem
        }, void 0, false, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 130,
            columnNumber: 31
        }, this);
        $[16] = mensagem;
        $[17] = status;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UploadExcel.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(UploadExcel, "MBQb4E6Jj8u5aMCeR/j+jdeeX8w=");
_c = UploadExcel;
var _c;
__turbopack_context__.k.register(_c, "UploadExcel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/hooks/useEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvents",
    ()=>useEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/firebase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useEvents() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "7ac14045ec916a61617115cdd0ac0dc31bccdf7c548b461e48b7e1940ba8c5f5") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ac14045ec916a61617115cdd0ac0dc31bccdf7c548b461e48b7e1940ba8c5f5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [eventos, setEventos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [colunas, setColunas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [filtro, setFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useEvents[carregarFirebase]": async ()=>{
                setLoading(true);
                const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "eventos");
                const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(ref);
                const dados = snap.docs.map(_useEventsCarregarFirebaseSnapDocsMap);
                setEventos(dados);
                setColunas(Object.keys(dados[0] || {}));
                setFiltro(null);
                setLoading(false);
            }
        })["useEvents[carregarFirebase]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const carregarFirebase = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "useEvents[salvarFirebase]": async (dados_0)=>{
                setLoading(true);
                const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
                const ref_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "eventos");
                dados_0.forEach({
                    "useEvents[salvarFirebase > dados_0.forEach()]": (item)=>{
                        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(ref_0);
                        batch.set(docRef, item);
                    }
                }["useEvents[salvarFirebase > dados_0.forEach()]"]);
                await batch.commit();
                await carregarFirebase();
            }
        })["useEvents[salvarFirebase]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const salvarFirebase = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "useEvents[limparFirebase]": async ()=>{
                setLoading(true);
                const ref_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "eventos");
                const snap_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(ref_1);
                for (const docSnap of snap_0.docs){
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(docSnap.ref);
                }
                setEventos([]);
                setColunas([]);
                setFiltro(null);
                setLoading(false);
            }
        })["useEvents[limparFirebase]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const limparFirebase = t4;
    let t5;
    bb0: {
        if (!filtro) {
            t5 = eventos;
            break bb0;
        }
        let t6;
        if ($[6] !== eventos || $[7] !== filtro) {
            let t7;
            if ($[9] !== filtro) {
                t7 = ({
                    "useEvents[eventos.filter()]": (ev)=>String(ev[filtro.coluna]) === filtro.valor
                })["useEvents[eventos.filter()]"];
                $[9] = filtro;
                $[10] = t7;
            } else {
                t7 = $[10];
            }
            t6 = eventos.filter(t7);
            $[6] = eventos;
            $[7] = filtro;
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        t5 = t6;
    }
    const eventosFiltrados = t5;
    let t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "useEvents[useEffect()]": ()=>{
                carregarFirebase();
            }
        })["useEvents[useEffect()]"];
        t7 = [];
        $[11] = t6;
        $[12] = t7;
    } else {
        t6 = $[11];
        t7 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[13] !== colunas || $[14] !== eventosFiltrados || $[15] !== loading) {
        t8 = {
            eventos: eventosFiltrados,
            colunas,
            loading,
            setFiltro,
            carregarFirebase,
            salvarFirebase,
            limparFirebase
        };
        $[13] = colunas;
        $[14] = eventosFiltrados;
        $[15] = loading;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_s(useEvents, "BEsTOn94qkdWEECxD5xXxHNT1Sg=");
function _useEventsCarregarFirebaseSnapDocsMap(doc) {
    return doc.data();
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useEvents.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Filtros() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d76453143f43424aaba85ef8da386ae00f1fea16785e72bf7e7cc6cbad8317c5") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d76453143f43424aaba85ef8da386ae00f1fea16785e72bf7e7cc6cbad8317c5";
    }
    const { colunas, setFiltro } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"])();
    let t0;
    if ($[1] !== setFiltro) {
        t0 = ({
            "Filtros[<select>.onChange]": (e)=>{
                const [coluna, valor] = e.target.value.split("|");
                if (!coluna) {
                    return;
                }
                setFiltro({
                    coluna,
                    valor
                });
            }
        })["Filtros[<select>.onChange]"];
        $[1] = setFiltro;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Filtrar por..."
        }, void 0, false, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== colunas) {
        t2 = colunas.map(_FiltrosColunasMap);
        $[4] = colunas;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t0 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            onChange: t0,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Filtros.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t0;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_s(Filtros, "L8tYndX26wgyElxXQRZwTBtVXjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"]
    ];
});
_c = Filtros;
function _FiltrosColunasMap(col) {
    return [
        "IA",
        "UX",
        "Tecnologia",
        "Palestra",
        "Workshop"
    ].map({
        "Filtros[colunas.map() > (anonymous)()]": (valor_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: `${col}|${valor_0}`,
                children: [
                    col,
                    ": ",
                    valor_0
                ]
            }, `${col}-${valor_0}`, true, {
                fileName: "[project]/src/components/Filtros.tsx",
                lineNumber: 64,
                columnNumber: 58
            }, this)
    }["Filtros[colunas.map() > (anonymous)()]"]);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/chart.ts [app-client] (ecmascript)"); // 🔥 registra o Chart.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useEvents.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Graficos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "7d20a0b0b5ee4df1628dd9fd547887c58b42e130d0e5c136819f84e8c36aa2bc") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d20a0b0b5ee4df1628dd9fd547887c58b42e130d0e5c136819f84e8c36aa2bc";
    }
    const { eventos, colunas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"])();
    if (!eventos.length || !colunas.length) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Sem dados para exibir gráficos"
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 22,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    const eixoX = colunas[0];
    let agrupado;
    let t0;
    if ($[2] !== eixoX || $[3] !== eventos) {
        agrupado = {};
        eventos.forEach({
            "Graficos[eventos.forEach()]": (item)=>{
                const valor = item[eixoX];
                if (!valor) {
                    return;
                }
                agrupado[valor] = (agrupado[valor] || 0) + 1;
            }
        }["Graficos[eventos.forEach()]"]);
        t0 = Object.keys(agrupado);
        $[2] = eixoX;
        $[3] = eventos;
        $[4] = agrupado;
        $[5] = t0;
    } else {
        agrupado = $[4];
        t0 = $[5];
    }
    const t1 = `Distribuição por ${eixoX}`;
    let t2;
    if ($[6] !== agrupado) {
        t2 = Object.values(agrupado);
        $[6] = agrupado;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== t1 || $[9] !== t2) {
        t3 = [
            {
                label: t1,
                data: t2,
                backgroundColor: "#4f46e5"
            }
        ];
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== t0 || $[12] !== t3) {
        t4 = {
            labels: t0,
            datasets: t3
        };
        $[11] = t0;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    const data = t4;
    let t5;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            width: "100%",
            maxWidth: 600
        };
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== data) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/src/components/Graficos.tsx",
                lineNumber: 99,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Graficos.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[15] = data;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    return t6;
}
_s(Graficos, "8mT4BNDtf9Fm0aeUv++t8ISpHPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"]
    ];
});
_c = Graficos;
var _c;
__turbopack_context__.k.register(_c, "Graficos");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useEvents.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TabelaEventos() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "96dc2a995da1c3208e7aed3406a952601cf0f3f4dbb99a5f0f584e8468d978b5") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "96dc2a995da1c3208e7aed3406a952601cf0f3f4dbb99a5f0f584e8468d978b5";
    }
    const { eventos, colunas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"])();
    if (!eventos.length) {
        return null;
    }
    let t0;
    if ($[1] !== colunas) {
        t0 = colunas.map(_TabelaEventosColunasMap);
        $[1] = colunas;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: t0
            }, void 0, false, {
                fileName: "[project]/src/components/TabelaEventos.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== colunas || $[6] !== eventos) {
        let t3;
        if ($[8] !== colunas) {
            t3 = ({
                "TabelaEventos[eventos.map()]": (ev, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: colunas.map({
                            "TabelaEventos[eventos.map() > colunas.map()]": (col_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    children: ev[col_0]
                                }, col_0, false, {
                                    fileName: "[project]/src/components/TabelaEventos.tsx",
                                    lineNumber: 42,
                                    columnNumber: 70
                                }, this)
                        }["TabelaEventos[eventos.map() > colunas.map()]"])
                    }, i, false, {
                        fileName: "[project]/src/components/TabelaEventos.tsx",
                        lineNumber: 41,
                        columnNumber: 52
                    }, this)
            })["TabelaEventos[eventos.map()]"];
            $[8] = colunas;
            $[9] = t3;
        } else {
            t3 = $[9];
        }
        t2 = eventos.map(t3);
        $[5] = colunas;
        $[6] = eventos;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== t1 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TabelaEventos.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
}
_s(TabelaEventos, "8mT4BNDtf9Fm0aeUv++t8ISpHPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvents"]
    ];
});
_c = TabelaEventos;
function _TabelaEventosColunasMap(col) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        children: col
    }, col, false, {
        fileName: "[project]/src/components/TabelaEventos.tsx",
        lineNumber: 77,
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

//# sourceMappingURL=src_c13a619d._.js.map