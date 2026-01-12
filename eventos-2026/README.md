# Eventos 2026 - Dashboard 

Sistema web para upload, armazenamento e visualização de dados sobre eventos em 2026.

## Funcionalidades

- Upload de planilhas Excel (.xlsx, .xls)
- Armazenamento em Firebase Firestore
- Dashboard interativo com:
  - Tabela de dados completa
  - Gráfico de barras
  - Gráfico de pizza
  - Filtros por coluna
  
## Tecnologias Utilizadas

- **Frontend:** Next.js 14, React, TypeScript
- **Banco de Dados:** Firebase Firestore
- **Gráficos:** Chart.js + React-Chartjs-2
- **Processamento Excel:** SheetJS (xlsx)
- **Estilização:** CSS Modules

## Como Executar

### Pré-requisitos
- Node.js 18+
- Conta no Firebase

### Instalação

1. Clone o repositório:
bash

git clone https://github.com/EmySilv/Project-Eventos2026.git
cd Project-Eventos2026


2. Instale as dependências:
bash

npm install


3. Execute o projeto:
bash

npm run dev


4. Acesse: `http://localhost:3000`

## Estrutura do Projeto

src/
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raiz
│   ├── globals.css        # Estilos globais
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
│   └── Filtros.tsx
└── data/
    └── Exemplo_BaseEmilly.xlsx       
\`\`\`

## Colunas Esperadas na Planilha

- Cód
- Nome
- Tema
- Tipo
- Data Inicial
- Data Final
- Local
- Cidade
- Empresa
- Formato
- Site Evento
- Tem Fornecedor Patrocinador
- Nome Fornecedor Patrocinador
- E-Mail Fornecedor Patrocinador
- Vivo Patrocina
- Pago
- Valor Inscrição

## Link do Dashboard

 **Dashboard Online:** [https://eventos-2026.vercel.app](https://eventos2026.vercel.app)


## Autor

Desenvolvido por Emilly Vitória para o desafio Eventos 2026.