"use client";

import "@/app/lib/chart";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { useEventsContext } from "@/app/context/eventsContext";
import { useMemo } from "react";

export default function Graficos() {
  const { eventos, eventosTodos, filtros, colunas } = useEventsContext();

  // 🔥 TODOS OS useMemo DEVEM VIR ANTES DE QUALQUER CONDICIONAL
  const colunaSelecionada = filtros?.coluna || "";
  const totalEventos = eventosTodos?.length || 0;
  const eventosFiltrados = eventos?.length || 0;

  // ============================================
  // 🎯 FUNÇÃO HELPER: Agrupa dados por coluna
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
  // 📊 GRÁFICOS PARA VISÃO GERAL (SEM FILTRO)
  // ============================================
  const graficosGerais = useMemo(() => {
    if (!eventosTodos?.length || !colunas?.length) return null;

    // Gráfico 1: Distribuição por Tipo
    const colunaTipo = colunas.includes("Tipo") ? "Tipo" : colunas[0];
    const dadosTipo = agruparPorColuna(colunaTipo, eventosTodos);

    // Gráfico 2: Distribuição por Cidade
    const colunaCidade = colunas.includes("Cidade") ? "Cidade" : colunas[1];
    const dadosCidade = agruparPorColuna(colunaCidade, eventosTodos);
    const top10Cidades = Object.entries(dadosCidade)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);

    // Gráfico 3: Eventos Pagos vs Gratuitos
    const colunaPago = colunas.includes("Pago") ? "Pago" : null;
    const dadosPago = colunaPago ? agruparPorColuna(colunaPago, eventosTodos) : null;

    return {
      tipo: {
        labels: Object.keys(dadosTipo),
        datasets: [{
          label: `Distribuição por ${colunaTipo}`,
          data: Object.values(dadosTipo),
          backgroundColor: ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
        }],
      },
      cidades: {
        labels: top10Cidades.map(([key]) => key),
        datasets: [{
          label: "Top 10 Cidades",
          data: top10Cidades.map(([, value]) => value),
          backgroundColor: "#f59e0b",
        }],
      },
      pago: dadosPago ? {
        labels: Object.keys(dadosPago),
        datasets: [{
          label: "Eventos Pagos vs Gratuitos",
          data: Object.values(dadosPago),
          backgroundColor: ["#10b981", "#ef4444"],
        }],
      } : null,
    };
  }, [eventosTodos, colunas]);

  // ============================================
  // 🏙️ GRÁFICOS ESPECÍFICOS PARA CIDADE
  // ============================================
  const graficosCidade = useMemo(() => {
    if (!colunaSelecionada.toLowerCase().includes("cidade") || !eventos?.length || !colunas?.length) {
      return null;
    }

    // Distribuição por Tema dentro dessa cidade
    const colunaTema = colunas.includes("Tema") ? "Tema" : colunas[2];
    const dadosTema = agruparPorColuna(colunaTema, eventos);

    // Distribuição por Formato
    const colunaFormato = colunas.includes("Formato") ? "Formato" : colunas[3];
    const dadosFormato = agruparPorColuna(colunaFormato, eventos);

    // Eventos ao longo do tempo nessa cidade
    const colunaData = colunas.find((c: string) => c.toLowerCase().includes("data inicial")) || colunas[4];
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

    return {
      tema: {
        labels: Object.keys(dadosTema),
        datasets: [{
          label: "Temas mais populares",
          data: Object.values(dadosTema),
          backgroundColor: ["#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"],
        }],
      },
      formato: {
        labels: Object.keys(dadosFormato),
        datasets: [{
          label: "Formato dos eventos",
          data: Object.values(dadosFormato),
          backgroundColor: ["#4f46e5", "#10b981", "#f59e0b"],
        }],
      },
      timeline: timelineOrdenada.length > 0 ? {
        labels: timelineOrdenada,
        datasets: [{
          label: "Eventos ao longo do tempo",
          data: timelineOrdenada.map(k => dadosTimeline[k]),
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79, 70, 229, 0.1)",
          tension: 0.4,
          fill: true,
        }],
      } : null,
    };
  }, [colunaSelecionada, eventos, colunas]);

  // ============================================
  // 🎨 GRÁFICOS ESPECÍFICOS PARA TEMA
  // ============================================
  const graficosTema = useMemo(() => {
    if (!colunaSelecionada.toLowerCase().includes("tema") || !eventos?.length || !colunas?.length) {
      return null;
    }

    // Distribuição por Cidade
    const colunaCidade = colunas.includes("Cidade") ? "Cidade" : colunas[1];
    const dadosCidade = agruparPorColuna(colunaCidade, eventos);
    const top5Cidades = Object.entries(dadosCidade)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    // Distribuição por Tipo
    const colunaTipo = colunas.includes("Tipo") ? "Tipo" : colunas[0];
    const dadosTipo = agruparPorColuna(colunaTipo, eventos);

    // Patrocínio
    const colunaVivo = colunas.includes("Vivo Patrocina") ? "Vivo Patrocina" : null;
    const dadosVivo = colunaVivo ? agruparPorColuna(colunaVivo, eventos) : null;

    return {
      cidades: {
        labels: top5Cidades.map(([key]) => key),
        datasets: [{
          label: "Top 5 Cidades para este Tema",
          data: top5Cidades.map(([, value]) => value),
          backgroundColor: "#10b981",
        }],
      },
      tipo: {
        labels: Object.keys(dadosTipo),
        datasets: [{
          label: "Tipos de Evento",
          data: Object.values(dadosTipo),
          backgroundColor: ["#4f46e5", "#f59e0b", "#ef4444", "#8b5cf6"],
        }],
      },
      vivo: dadosVivo ? {
        labels: Object.keys(dadosVivo),
        datasets: [{
          label: "Vivo Patrocina",
          data: Object.values(dadosVivo),
          backgroundColor: ["#10b981", "#ef4444"],
        }],
      } : null,
    };
  }, [colunaSelecionada, eventos, colunas]);

  // ============================================
  // 📅 GRÁFICOS ESPECÍFICOS PARA DATA
  // ============================================
  const graficosData = useMemo(() => {
    if (!colunaSelecionada.toLowerCase().includes("data") || !eventos?.length || !colunas?.length) {
      return null;
    }

    // Distribuição por Tema
    const colunaTema = colunas.includes("Tema") ? "Tema" : colunas[2];
    const dadosTema = agruparPorColuna(colunaTema, eventos);

    // Distribuição por Cidade
    const colunaCidade = colunas.includes("Cidade") ? "Cidade" : colunas[1];
    const dadosCidade = agruparPorColuna(colunaCidade, eventos);

    return {
      tema: {
        labels: Object.keys(dadosTema),
        datasets: [{
          label: "Temas neste período",
          data: Object.values(dadosTema),
          backgroundColor: Object.keys(dadosTema).map((_, i) => 
            `hsl(${(i * 360) / Object.keys(dadosTema).length}, 70%, 60%)`
          ),
        }],
      },
      cidade: {
        labels: Object.keys(dadosCidade).slice(0, 8),
        datasets: [{
          label: "Principais cidades",
          data: Object.values(dadosCidade).slice(0, 8),
          backgroundColor: "#06b6d4",
        }],
      },
    };
  }, [colunaSelecionada, eventos, colunas]);

  // ============================================
  // 🔍 VERIFICAÇÃO DE DADOS - DEPOIS DOS HOOKS
  // ============================================
  if (!eventosTodos?.length || !colunas?.length) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <p style={{ fontSize: "18px" }}>📊 Sem dados para exibir gráficos</p>
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          Faça upload de uma planilha para começar
        </p>
      </div>
    );
  }

  // ============================================
  // 🎯 RENDERIZAÇÃO CONDICIONAL
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
                ? `Visualização filtrada: ${colunaSelecionada}`
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
        {/* ============================================ */}
        {/* VISÃO GERAL (SEM FILTRO) */}
        {/* ============================================ */}
        {!colunaSelecionada && graficosGerais && (
          <>
            <GraficoCard titulo="🎯 Distribuição por Tipo de Evento" tipo="pizza">
              <Pie data={graficosGerais.tipo} />
            </GraficoCard>

            <GraficoCard titulo="🏙️ Top 10 Cidades com Mais Eventos" tipo="barras">
              <Bar
                data={graficosGerais.cidades}
                options={{ indexAxis: "y" as const }}
              />
            </GraficoCard>

            {graficosGerais.pago && (
              <GraficoCard titulo="💰 Eventos Pagos vs Gratuitos" tipo="rosca">
                <Doughnut data={graficosGerais.pago} />
              </GraficoCard>
            )}
          </>
        )}

        {/* ============================================ */}
        {/* FILTRO POR CIDADE */}
        {/* ============================================ */}
        {graficosCidade && (
          <>
            <GraficoCard titulo="🎨 Temas Mais Populares nesta Cidade" tipo="rosca">
              <Doughnut data={graficosCidade.tema} />
            </GraficoCard>

            <GraficoCard titulo="📍 Formato dos Eventos" tipo="pizza">
              <Pie data={graficosCidade.formato} />
            </GraficoCard>

            {graficosCidade.timeline && (
              <GraficoCard titulo="📈 Timeline de Eventos" tipo="linha">
                <Line data={graficosCidade.timeline} />
              </GraficoCard>
            )}
          </>
        )}

        {/* ============================================ */}
        {/* FILTRO POR TEMA */}
        {/* ============================================ */}
        {graficosTema && (
          <>
            <GraficoCard titulo="🏙️ Top 5 Cidades para este Tema" tipo="barras">
              <Bar data={graficosTema.cidades} />
            </GraficoCard>

            <GraficoCard titulo="📊 Tipos de Evento" tipo="pizza">
              <Pie data={graficosTema.tipo} />
            </GraficoCard>

            {graficosTema.vivo && (
              <GraficoCard titulo="🎯 Patrocínio Vivo" tipo="rosca">
                <Doughnut data={graficosTema.vivo} />
              </GraficoCard>
            )}
          </>
        )}

        {/* ============================================ */}
        {/* FILTRO POR DATA */}
        {/* ============================================ */}
        {graficosData && (
          <>
            <GraficoCard titulo="🎨 Temas Neste Período" tipo="pizza">
              <Pie data={graficosData.tema} />
            </GraficoCard>

            <GraficoCard titulo="🏙️ Principais Cidades" tipo="barras">
              <Bar data={graficosData.cidade} />
            </GraficoCard>
          </>
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