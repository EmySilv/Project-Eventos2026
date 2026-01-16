"use client";

import { useRouter } from "next/navigation";
import "@/app/css/landingpage.css";
import "remixicon/fonts/remixicon.css";

export default function LandingPage() {
  const router = useRouter();

  const handleNavigateToDashboard = () => {
    router.push("/dashboards");
  };

  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="hero-title">Eventos 2026</h1>
        <p className="hero-subtitle">
          Dashboard completo para gestão e análise de eventos corporativos
        </p>
        <button className="cta-button" onClick={handleNavigateToDashboard}>
          <i className="ri-rocket-line" /> Acessar Dashboard
        </button>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="ri-bar-chart-2-line" />
          </div>
          <h3 className="feature-title">Análise Visual</h3>
          <p className="feature-description">
            Gráficos interativos e dashboards personalizados para visualizar
            seus dados de forma clara e objetiva
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="ri-upload-cloud-line" />
          </div>
          <h3 className="feature-title">Upload Fácil</h3>
          <p className="feature-description">
            Importe seus dados rapidamente através de planilhas Excel (.xlsx ou
            .xls) com processamento automático
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="ri-search-line" />
          </div>
          <h3 className="feature-title">Filtros Avançados</h3>
          <p className="feature-description">
            Sistema de busca e filtragem inteligente para encontrar exatamente o
            que você precisa em segundos
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="ri-table-line" />
          </div>
          <h3 className="feature-title">Tabelas Dinâmicas</h3>
          <p className="feature-description">
            Visualize e organize todos os seus eventos em tabelas responsivas
            com ordenação e exportação
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
          <i className="ri-sparkling-line" /> Começar Agora
        </button>
      </div>

      <div className="footer">
        <p>© Desenvolvido por Emilly Silva • 2026 Eventos</p>
      </div>
    </div>
  );
}
