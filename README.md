# 📊 Eventos 2026

> Dashboard interativo para análise de dados sobre eventos que ocorrerão'

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido para analisar dados de eventos e obter insights organizacionais sobre os principais eventos que irão ocorrer.

## 🛠️ Ferramentas Utilizadas

- **Frontend:** Next.js 14, React, TypeScript
- **Processamento Excel:** SheetJS (xlsx)
- **Hospedagem do site:** Vercel
- **Banco de Dados:** Firebase Firestore
- **Tratamento** - Excel/Google Sheets
- **Gráficos:** Chart.js + React-Chartjs-2

## 🚀 Como Acessar

### Dashboard Online
Acesse o dashboard completo, acesse sua conta do Vercel e clique no link:

👉 **eventos-2026-git-main-emillys-projects.vercel.app**

### Executar Localmente
### Pré-requisitos
- Node.js 18+
- Conta no Firebase

### Instalação

1. Clone o repositório:
bash

`git clone https://github.com/EmySilv/Project-Eventos2026.git`

`cd Project-Eventos2026`


2. Instale as dependências:
bash

`npm install`


3. Execute o projeto:
bash

`npm run dev`


4. Acesse: 
`http://localhost:3000`

## 📁 Arquivos do Projeto

```
src/
├── app/
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx               # Layout raiz
│   ├── css/                     # Estilos
│   │   ├──  upload-excel.css  
│   │   ├── tabela-eventos.css
│   │   ├── page.css
│   │   ├── landingpage.css
│   │   └── filtros.css
│   ├── dashboards/
│   │   └── page.tsx
│   ├── context/
│   │   └── eventsContext.tsx
│   ├── hooks/
│   │   └── useEvents.ts
│   └── lib/
│       ├── firebase.ts
│       └── chart.ts
├── components/
│   ├── UploadExcel.tsx
│   ├── TabelaEventos.tsx
│   ├── Graficos.tsx
│   ├── Filtros.tsx
│   └── Estatisticas.tsx
└── data/
    └── Exemplo_BaseEmilly.xlsx
```

## 📊 Dados Utilizados

A planilha exemplo contém dados sobre Nome do evento, data que ocorreu, se a Vivo patrocina e outros dados. Todos os dados estão disponíveis na pasta data/Exemplo_BaseEmilly.xslx, que está alocada no projeto.

## 👤 Autor
Desenvolvido por Emilly Vitória