(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: "AIzaSyDDCC8uP7tBvWGxyChZZZ1S1hM0a_QE7_4",
    authDomain: "eventos2026-b2ccb.firebaseapp.com",
    projectId: "eventos2026-b2ccb"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "3b30be35708154173eb6d45171a09cc024d1f60b967f9d4e79488e122df057cf") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3b30be35708154173eb6d45171a09cc024d1f60b967f9d4e79488e122df057cf";
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
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useEvents[setFromExcel]": (data)=>{
                setEventos(data);
                setColunas(Object.keys(data[0]));
            }
        })["useEvents[setFromExcel]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const setFromExcel = t2;
    let t3;
    if ($[4] !== eventos) {
        t3 = ({
            "useEvents[salvarFirebase]": async ()=>{
                const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "eventos");
                for (const item of eventos){
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(ref, item);
                }
            }
        })["useEvents[salvarFirebase]"];
        $[4] = eventos;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const salvarFirebase = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "useEvents[carregarFirebase]": async ()=>{
                const ref_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "eventos");
                const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(ref_0);
                setEventos(snap.docs.map(_useEventsCarregarFirebaseSnapDocsMap));
            }
        })["useEvents[carregarFirebase]"];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const carregarFirebase = t4;
    let t5;
    if ($[7] !== colunas || $[8] !== eventos || $[9] !== salvarFirebase) {
        t5 = {
            eventos,
            colunas,
            setFromExcel,
            salvarFirebase,
            carregarFirebase
        };
        $[7] = colunas;
        $[8] = eventos;
        $[9] = salvarFirebase;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(useEvents, "JyfCc0jhBJFc7CPvFxC2Zpqawj4=");
function _useEventsCarregarFirebaseSnapDocsMap(doc) {
    return doc.data();
}
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
]);

//# sourceMappingURL=src_302f204b._.js.map