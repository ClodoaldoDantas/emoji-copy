# 🎭 Emoji Copy

Uma extensão simples e elegante para Chrome que permite copiar emojis para a área de transferência de forma rápida e intuitiva.

![Emoji Copy Extension](./icons/icon128.png)

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Desenvolvimento](#-desenvolvimento)
- [Licença](#-licença)

## ✨ Funcionalidades

- **🔍 Busca Inteligente**: Pesquise emojis por nome ou palavras-chave em português
- **📂 Categorias Organizadas**: Emojis organizados em categorias temáticas (Rostos, Objetos, Natureza, etc.)
- **⏰ Recentes**: Histórico dos emojis mais utilizados recentemente
- **📋 Cópia Instantânea**: Clique uma vez para copiar o emoji para a área de transferência
- **💾 Persistência**: Seus emojis recentes são salvos automaticamente
- **🎨 Interface Moderna**: Design limpo e responsivo

## 🚀 Instalação

### Instalação via Chrome Web Store

https://chromewebstore.google.com/detail/fnichdelhncpnocohahjklimdlmjjeij?utm_source=item-share-cb

### Instalação Manual (Modo Desenvolvedor)

1. **Clone ou baixe o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/emoji-copy.git
   cd emoji-copy
   ```

2. **Abra o Chrome e acesse as extensões**:

   - Digite `chrome://extensions/` na barra de endereços
   - Ou vá em Menu (⋮) → Mais ferramentas → Extensões

3. **Habilite o Modo Desenvolvedor**:

   - Ative o toggle "Modo do desenvolvedor" no canto superior direito

4. **Carregue a extensão**:

   - Clique em "Carregar sem compactação"
   - Selecione a pasta do projeto `emoji-copy`

5. **Pronto!** A extensão aparecerá na barra de ferramentas do Chrome

## 🎯 Como Usar

1. **Abrir a extensão**: Clique no ícone da extensão na barra de ferramentas
2. **Navegar por categorias**: Use os botões de categoria para filtrar emojis
3. **Buscar emojis**: Digite no campo de busca para encontrar emojis específicos
4. **Copiar emoji**: Clique em qualquer emoji para copiá-lo automaticamente
5. **Colar**: Use `Ctrl+V` (ou `Cmd+V` no Mac) para colar o emoji onde desejar

### Categorias Disponíveis

- 😊 **Rostos & Pessoas**: Expressões faciais e gestos
- 🐶 **Animais & Natureza**: Animais, plantas e natureza
- 🍎 **Comidas & Bebidas**: Alimentos e bebidas
- ⚽ **Atividades**: Esportes e hobbies
- 🚗 **Viagens & Lugares**: Transportes e locais
- 💡 **Objetos**: Objetos do dia a dia
- 🎭 **Símbolos**: Símbolos diversos
- 🏳️ **Bandeiras**: Bandeiras de países

## 🛠️ Tecnologias Utilizadas

- **Manifest V3**: Padrão mais recente para extensões Chrome
- **JavaScript ES6+**: Módulos, async/await, classes
- **CSS3**: Flexbox, Grid, Custom Properties
- **HTML5**: Estrutura semântica
- **Chrome Extensions API**: Storage API, Clipboard API

### Arquitetura

- **Padrão Observable**: Sistema de eventos para atualizações reativas
- **Modularização**: Código organizado em módulos ES6
- **State Management**: Store centralizado para gerenciamento de estado
- **Debounce**: Otimização de performance na busca
- **Local Storage**: Persistência de dados localmente

## 🔧 Desenvolvimento

### Configuração do Ambiente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/emoji-copy.git
   cd emoji-copy
   ```

2. **Instale a extensão em modo desenvolvedor** (veja seção de instalação)

3. **Faça suas modificações**

4. **Recarregue a extensão**:
   - Vá em `chrome://extensions/`
   - Clique no botão de recarregar da extensão

### Scripts Principais

- **`popup.js`**: Ponto de entrada principal, coordena a aplicação
- **`store.js`**: Gerenciamento de estado global
- **`copy-emoji-to-clipboard.js`**: Lógica de cópia para clipboard
- **`storage.js`**: Abstração para Chrome Storage API

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
