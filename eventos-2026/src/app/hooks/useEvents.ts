"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  getDocs,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export function useEvents() {
  const [eventos, setEventos] = useState<any[]>([]);
  const [colunas, setColunas] = useState<string[]>([]);
  const [colunaSelecionada, setColunaSelecionada] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const ref = collection(db, "eventos");

  const carregarFirebase = async () => {
    setLoading(true);

    const snap = await getDocs(ref);
    const dados = snap.docs.map(doc => doc.data());

    setEventos(dados);
    setColunas(Object.keys(dados[0] || {}));
    setColunaSelecionada(null);

    setLoading(false);
  };

  const salvarFirebase = async (dados: any[]) => {
    setLoading(true);

    const batch = writeBatch(db);

    dados.forEach(item => {
      const docRef = doc(ref);
      batch.set(docRef, item);
    });

    await batch.commit();
    await carregarFirebase();

    setLoading(false);
  };

  // 🔹 Agora NÃO filtra linhas, só define qual coluna será usada
  const eventosFiltrados = useMemo(() => {
    return eventos;
  }, [eventos]);

  useEffect(() => {
    carregarFirebase();
  }, []);

  return {
    eventos: eventosFiltrados,
    colunas,
    colunaSelecionada,
    setColunaSelecionada,
    loading,
    salvarFirebase,
  };
}
