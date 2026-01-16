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
  // GRÁFICOS GENÉRICOS - AGORA USANDO eventos (FILTRADOS)
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
      .sort(([, a], [, b]) => (b as number) - (a as number))
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
  // GRÁFICO DE TIMELINE - AGORA USANDO eventos (FILTRADOS)
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
        <i className="ri-pie-chart-2-line" style={{ fontSize: "64px", display: "block", marginBottom: "20px", opacity: 0.5 }}></i>
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
        <i className="ri-loader-4-line" style={{ fontSize: "48px", display: "block", marginBottom: "20px", animation: "spin 1s linear infinite" }}></i>
        <p style={{ fontSize: "18px" }}>Processando dados...</p>
      </div>
    );
  }

  // ============================================
  // RENDERIZAÇÃO COM GRID LAYOUT
  // ============================================
  return (
    <div>
      {/* Mensagem se não há dados filtrados */}
      {eventos?.length === 0 ? (
        <div style={{ 
          textAlign: "center", 
          padding: "60px 20px",
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          borderRadius: "12px",
          border: "2px solid #f59e0b"
        }}>
          <i className="ri-filter-off-line" style={{ fontSize: "64px", color: "#d97706", marginBottom: "20px", display: "block" }}></i>
          <p style={{ fontSize: "20px", fontWeight: 600, color: "#92400e", margin: "0 0 10px 0" }}>
            Nenhum evento encontrado com os filtros aplicados
          </p>
          <p style={{ fontSize: "14px", color: "#78350f", margin: 0 }}>
            Tente ajustar os filtros ou limpar a busca
          </p>
        </div>
      ) : (
        <>
          {/* Gráficos em Grid Layout - 2 ou 3 por linha */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "25px",
            }}
          >
            
            {/* Gráfico da coluna selecionada (se houver filtro) */}
            {graficosGenericos.colunaSelecionada && (
              <GraficoCard 
                titulo={`Distribuição: ${colunaSelecionada}`}
                tipo="pizza"
                icone="ri-pie-chart-line"
              >
                <Pie data={graficosGenericos.colunaSelecionada} />
              </GraficoCard>
            )}

            {/* Gráfico 1: Análise Cruzada */}
            <GraficoCard 
              titulo={`Top 10 - ${graficosGenericos.analise1.titulo}`}
              tipo="barras"
              icone="ri-bar-chart-horizontal-line"
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
              icone="ri-donut-chart-line"
            >
              <Doughnut data={graficosGenericos.analise2} />
            </GraficoCard>

            {/* Gráfico 3: Análise Cruzada */}
            <GraficoCard 
              titulo={`Distribuição: ${graficosGenericos.analise3.titulo}`}
              tipo="barras"
              icone="ri-bar-chart-box-line"
            >
              <Bar data={graficosGenericos.analise3} />
            </GraficoCard>

            {/* Gráfico 4: Timeline (se existir) - ocupa linha inteira */}
            {graficoTimeline && (
              <div style={{ gridColumn: "1 / -1" }}>
                <GraficoCard 
                  titulo={`Timeline - ${graficoTimeline.titulo}`}
                  tipo="linha"
                  icone="ri-line-chart-line"
                >
                  <Line data={graficoTimeline} />
                </GraficoCard>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================
// 📦 COMPONENTE AUXILIAR: Card de Gráfico
// ============================================
function GraficoCard({
  titulo,
  tipo,
  icone,
  children,
}: {
  titulo: string;
  tipo: "barras" | "pizza" | "linha" | "rosca";
  icone: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      <h3 style={{ 
        marginBottom: "20px", 
        color: "#374151", 
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <i className={icone} style={{ fontSize: "20px", color: "#4f46e5" }}></i>
        {titulo}
      </h3>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
}