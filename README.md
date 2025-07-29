# Emoji Copy

Este é o site oficial da extensão **Emoji Copy** para Google Chrome, desenvolvido com [Astro](https://astro.build/).

## 📝 Sobre o Projeto

O site apresenta e promove a extensão Emoji Copy, uma ferramenta simples e eficiente para copiar emojis diretamente para a área de transferência. O site destaca as principais funcionalidades da extensão e fornece links para download na Chrome Web Store.

## 🚀 Funcionalidades da Extensão

- **🔍 Busca Inteligente**: Pesquise emojis por nome ou palavras-chave em português
- **📂 Categorias Organizadas**: Emojis organizados em categorias temáticas (Rostos, Objetos, Natureza, etc.)
- **⏰ Recentes**: Histórico dos emojis mais utilizados recentemente
- **📋 Cópia Instantânea**: Clique uma vez para copiar o emoji para a área de transferência

## 📦 Instalação e Desenvolvimento

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:

```bash
git clone https://github.com/ClodoaldoDantas/emoji-copy.git
cd emoji-copy
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:4321`

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes Astro reutilizáveis
│   ├── data/           # Dados estáticos da aplicação
│   ├── layouts/        # Layouts base
│   ├── pages/          # Páginas do site
│   └── partials/       # Seções/partes da página
├── astro.config.mjs    # Configuração do Astro
├── package.json
└── tsconfig.json
```

## 🔗 Links Importantes

- **Extensão na Chrome Web Store**: [Emoji Copy](https://chromewebstore.google.com/detail/fnichdelhncpnocohahjklimdlmjjeij?utm_source=item-share-cb)
- **Repositório da Extensão**: [GitHub](https://github.com/ClodoaldoDantas/emoji-copy-extension)
- **Site do Autor**: [Clodoaldo Dantas](https://clodoaldodantas.github.io/)
