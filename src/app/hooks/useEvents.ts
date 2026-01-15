"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, writeBatch, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

interface Filtro {
  coluna: string;
  valor: string;
  busca: string;
}

export function useEvents() {
  const [eventos, setEventos] = useState<any[]>([]);
  const [colunas, setColunas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [filtros, setFiltros] = useState<Filtro>({
    coluna: "",
    valor: "",
    busca: "",
  });

  const ref = collection(db, "eventos");

  const carregarFirebase = async () => {
    setLoading(true);

    try {
      const snap = await getDocs(ref);
      const dados = snap.docs.map(doc => doc.data());

      setEventos(dados);
      setColunas(Object.keys(dados[0] || {}));
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const salvarFirebase = async (dados: any[]) => {
    setLoading(true);

    try {
      const batch = writeBatch(db);

      dados.forEach(item => {
        const docRef = doc(ref);
        batch.set(docRef, item);
      });

      await batch.commit();
      await carregarFirebase();
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const excluirTodosDados = async () => {
    setLoading(true);

    try {
      const snap = await getDocs(ref);
      
      if (snap.empty) {
        console.log("Nenhum dado para excluir");
        return;
      }

      const batch = writeBatch(db);
      
      snap.docs.forEach((documento) => {
        batch.delete(documento.ref);
      });

      await batch.commit();
      
      // Limpa o estado local
      setEventos([]);
      setColunas([]);
      setFiltros({ coluna: "", valor: "", busca: "" });
      
      console.log(`${snap.size} documentos excluídos com sucesso`);
    } catch (error) {
      console.error("Erro ao excluir dados:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // 🔥 LÓGICA DE FILTROS
  // ============================================
  const eventosFiltrados = useMemo(() => {
    let resultado = [...eventos];

    // Filtro 1: Por coluna e valor específico
    if (filtros.coluna && filtros.valor) {
      resultado = resultado.filter(evento => {
        const valorEvento = String(evento[filtros.coluna] || "");
        return valorEvento === filtros.valor;
      });
    }
    // Se só tem coluna (sem valor) = mostra todos os itens dessa coluna
    else if (filtros.coluna && !filtros.valor) {
      resultado = eventos;
    }

    // Filtro 2: Busca global (procura em todas as colunas)
    if (filtros.busca) {
      const buscaLower = filtros.busca.toLowerCase();

      resultado = resultado.filter(evento => {
        return Object.values(evento).some(valor => {
          const valorString = String(valor || "").toLowerCase();
          return valorString.includes(buscaLower);
        });
      });
    }

    return resultado;
  }, [eventos, filtros]);

  // Carrega dados ao montar o componente
  useEffect(() => {
    // Só carrega no lado do cliente
    if (typeof window !== 'undefined') {
      carregarFirebase();
    }
  }, []);

  return {
    eventos: eventosFiltrados,
    eventosTodos: eventos,
    colunas,
    loading,
    salvarFirebase,
    excluirTodosDados, // 🔥 Nova função
    filtros,
    setFiltros,
    totalEventos: eventos.length,
    totalFiltrados: eventosFiltrados.length,
  };
}