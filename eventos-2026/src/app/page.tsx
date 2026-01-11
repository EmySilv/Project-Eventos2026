"use client";

import { useRouter } from "next/navigation";
import "@/app/css/landingpage.css";

export default function LandingPage() {
  const router = useRouter();

  const handleNavigateToDashboard = () => {
    router.push("/dashboards");
  };

  return (
    <div className="container">
      <div className="hero-section">
        <div className="logo-container">
          <img src="/img/vivoGradiente.png" alt="Logo Vivo" className="logo" />
        </div>
        <h1 className="hero-title">Eventos 2026</h1>
        <p className="hero-subtitle">
          Dashboard completo para gestão e análise de eventos corporativos
        </p>
        <button className="cta-button" onClick={handleNavigateToDashboard}>
          🚀 Acessar Dashboard
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Análise Visual</h3>
          <p className="feature-description">
            Gráficos interativos e dashboards personalizados para visualizar
            seus dados de forma clara e objetiva
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📤</div>
          <h3 className="feature-title">Upload Fácil</h3>
          <p className="feature-description">
            Importe seus dados rapidamente através de planilhas Excel (.xlsx ou
            .xls) com processamento automático
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3 className="feature-title">Filtros Avançados</h3>
          <p className="feature-description">
            Sistema de busca e filtragem inteligente para encontrar exatamente o
            que você precisa em segundos
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3 className="feature-title">Tabelas Dinâmicas</h3>
          <p className="feature-description">
            Visualize e organize todos os seus eventos em tabelas responsivas
            com ordenação e exportação
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3 className="feature-title">Estatísticas em Tempo Real</h3>
          <p className="feature-description">
            Acompanhe métricas importantes e KPIs dos seus eventos com
            atualização automática
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Gratuito</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Eventos Ilimitados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Tipos de Gráficos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Acesso Total</div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-section-title">Pronto para começar?</h2>
        <p className="cta-section-description">
          Comece a gerenciar seus eventos de forma profissional e eficiente
        </p>
        <button className="cta-button" onClick={handleNavigateToDashboard}>
          ✨ Começar Agora
        </button>
      </div>

      <div className="footer">
        <p>
          © 2026 Eventos 2026 • Desenvolvido com 💜 para gestão profissional
          de eventos
        </p>
      </div>
    </div>
  );
}