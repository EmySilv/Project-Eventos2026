"use client";

import "@/app/lib/chart";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { useEventsContext } from "@/app/context/eventsContext";
import { useMemo } from "react";

export default function Graficos() {
  const { eventos, eventosTodos, filtros, colunas } = useEventsContext();

  const colunaSelecionada = filtros?.coluna || "";
  const totalEventos = eventosTodos?.length || 0;
  const eventosFiltrados = eventos?.length || 0;

  // ============================================
  // FUNÇÃO HELPER: Agrupa dados por coluna
  // ============================================
  const agruparPorColuna = (coluna: string, dadosBase: any[] = []) => {
    const agrupado: Record<string, number> = {};

    dadosBase.forEach(item => {
      const valor = String(item[coluna] || "Não informado");
      agrupado[valor] = (agrupado[valor] || 0) + 1;
    });

    return agrupado;
  };

  // ============================================
  // GRÁFICOS GENÉRICOS - FUNCIONAM PARA QUALQUER FILTRO
  // ============================================
  const graficosGenericos = useMemo(() => {
    if (!eventos?.length || !colunas?.length) return null;

    // Pega outras colunas para análise cruzada (ignora a coluna do filtro)
    const outrasColunas = colunas.filter((col: any) => col !== colunaSelecionada);

    // Gráfico 1: Distribuição da própria coluna selecionada (se houver filtro)
    let dadosColunaSelecionada = null;
    if (colunaSelecionada) {
      const dados = agruparPorColuna(colunaSelecionada, eventos);
      dadosColunaSelecionada = {
        labels: Object.keys(dados),
        datasets: [{
          label: `Distribuição por ${colunaSelecionada}`,
          data: Object.values(dados),
          backgroundColor: ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"],
        }],
      };
    }

    // Gráfico 2: Análise cruzada - primeira coluna diferente
    const coluna1 = outrasColunas[0] || colunas[0];
    const dados1 = agruparPorColuna(coluna1, eventos);
    const top10Dados1 = Object.entries(dados1)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

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
        labels: top10Dados1.map(([key]) => key),
        datasets: [{
          label: `Top 10 - ${coluna1}`,
          data: top10Dados1.map(([, value]) => value),
          backgroundColor: "#10b981",
        }],
      },
      analise2: {
        titulo: coluna2,
        labels: Object.keys(dados2),
        datasets: [{
          label: `Distribuição por ${coluna2}`,
          data: Object.values(dados2),
          backgroundColor: ["#8b5cf6", "#ec4899", "#06b6d4", "#84cc16", "#f59e0b", "#ef4444"],
        }],
      },
      analise3: {
        titulo: coluna3,
        labels: Object.keys(dados3).slice(0, 8),
        datasets: [{
          label: coluna3,
          data: Object.values(dados3).slice(0, 8),
          backgroundColor: "#f59e0b",
        }],
      },
    };
  }, [eventos, colunas, colunaSelecionada]);

  // ============================================
  // GRÁFICO DE TIMELINE (se houver coluna de data)
  // ============================================
  const graficoTimeline = useMemo(() => {
    if (!eventos?.length || !colunas?.length) return null;

    // Procura qualquer coluna com "data" no nome
    const colunaData = colunas.find((c: string) => c.toLowerCase().includes("data"));
    if (!colunaData) return null;

    const dadosTimeline: Record<string, number> = {};

    eventos.forEach((item: { [x: string]: any; }) => {
      let dataValor = item[colunaData];
      if (dataValor) {
        try {
          const data = new Date(dataValor);
          if (!isNaN(data.getTime())) {
            dataValor = `${data.getMonth() + 1}/${data.getFullYear()}`;
            dadosTimeline[dataValor] = (dadosTimeline[dataValor] || 0) + 1;
          }
        } catch {
          // Ignora datas inválidas
        }
      }
    });

    const timelineOrdenada = Object.keys(dadosTimeline).sort();

    if (timelineOrdenada.length === 0) return null;

    return {
      titulo: colunaData,
      labels: timelineOrdenada,
      datasets: [{
        label: `Eventos ao longo do tempo (${colunaData})`,
        data: timelineOrdenada.map(k => dadosTimeline[k]),
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.4,
        fill: true,
      }],
    };
  }, [eventos, colunas]);

  // ============================================
  // VERIFICAÇÃO DE DADOS
  // ============================================
  if (!eventosTodos?.length || !colunas?.length) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <p style={{ fontSize: "18px" }}>Sem dados para exibir gráficos</p>
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          Faça upload de uma planilha para começar
        </p>
      </div>
    );
  }

  if (!graficosGenericos) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <p style={{ fontSize: "18px" }}>⏳ Processando dados...</p>
      </div>
    );
  }

  // ============================================
  // RENDERIZAÇÃO
  // ============================================
  return (
    <div>
      {/* Indicador de contexto */}
      <div
        style={{
          padding: "15px",
          background: colunaSelecionada ? "#eff6ff" : "#f0fdf4",
          borderRadius: "8px",
          marginBottom: "25px",
          borderLeft: `4px solid ${colunaSelecionada ? "#4f46e5" : "#10b981"}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>
            {colunaSelecionada ? "🎯" : "📊"}
          </span>
          <div>
            <strong>
              {colunaSelecionada
                ? `Análise focada em: ${colunaSelecionada}`
                : "Visão Geral de Todos os Eventos"}
            </strong>
            <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
              {colunaSelecionada
                ? `Mostrando ${eventosFiltrados} de ${totalEventos} eventos`
                : `Total de ${totalEventos} eventos cadastrados`}
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos dinâmicos */}
      <div style={{ display: "grid", gap: "25px" }}>
        
        {/* Gráfico da coluna selecionada (se houver filtro) */}
        {graficosGenericos.colunaSelecionada && (
          <GraficoCard 
            titulo={`Distribuição: ${colunaSelecionada}`}
            tipo="pizza"
          >
            <Pie data={graficosGenericos.colunaSelecionada} />
          </GraficoCard>
        )}

        {/* Gráfico 1: Análise Cruzada */}
        <GraficoCard 
          titulo={`Top 10 - ${graficosGenericos.analise1.titulo}`}
          tipo="barras"
        >
          <Bar
            data={graficosGenericos.analise1}
            options={{ indexAxis: "y" as const }}
          />
        </GraficoCard>

        {/* Gráfico 2: Análise Cruzada */}
        <GraficoCard 
          titulo={`Análise por ${graficosGenericos.analise2.titulo}`}
          tipo="rosca"
        >
          <Doughnut data={graficosGenericos.analise2} />
        </GraficoCard>

        {/* Gráfico 3: Análise Cruzada */}
        <GraficoCard 
          titulo={`Distribuição: ${graficosGenericos.analise3.titulo}`}
          tipo="barras"
        >
          <Bar data={graficosGenericos.analise3} />
        </GraficoCard>

        {/* Gráfico 4: Timeline (se existir) */}
        {graficoTimeline && (
          <GraficoCard 
            titulo={`Timeline - ${graficoTimeline.titulo}`}
            tipo="linha"
          >
            <Line data={graficoTimeline} />
          </GraficoCard>
        )}
      </div>
    </div>
  );
}

// ============================================
// 📦 COMPONENTE AUXILIAR: Card de Gráfico
// ============================================
function GraficoCard({
  titulo,
  tipo,
  children,
}: {
  titulo: string;
  tipo: "barras" | "pizza" | "linha" | "rosca";
  children: React.ReactNode;
}) {
  const tamanhoMaximo = tipo === "pizza" || tipo === "rosca" ? 500 : 700;

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#374151" }}>{titulo}</h3>
      <div style={{ maxWidth: tamanhoMaximo, margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}