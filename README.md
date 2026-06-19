# Portfólio Profissional - Yohann Gusso

Site estático responsivo desenvolvido como vitrine profissional de competências técnicas e projetos pessoais. 

## Sobre o Projeto

Este portfólio foi criado com o objetivo de estabelecer uma presença digital profissional, apresentando minha trajetória, competências técnicas e projetos de forma clara, funcional e confiável. O projeto adota um layout inspirado em sistemas/dashboard, oferecendo uma experiência moderna e organizada que permite aos recrutadores e líderes técnicos compreender rapidamente quem sou, o que sei fazer e onde estão meus projetos.

### Objetivos

- Marca pessoal digital: Estabelecer presença profissional na web
- Vitrine de competências técnicas
- Portfólio de projetos com links diretos para repositórios
- Navegação acessível e intuitiva
- Design consistente e profissional

## Funcionalidades

### Navegação e Layout

- SPA-like Navigation: Navegação fluida entre seções sem recarregar página
- Sidebar Responsiva: Menu lateral fixo em desktop, drawer em mobile
- Breadcrumb Dinâmico: Indicador de localização no estilo terminal
- Deep Links: Suporte a URLs com hash (ex: `#projetos`)

### Temas e Visual

- Dark/Light Mode: Alternância de temas com persistência via localStorage
- Prevenção de FOUC: Script inline para evitar flash de tema incorreto
- Design Tokens: Variáveis CSS para consistência visual
- Animações suaves para melhor UX

### Conteúdo

- Dashboard: Apresentação pessoal com bio, estatísticas e terminal estilizado
- Stack: Organização visual de tecnologias por categorias
- Projetos: Galeria de cards com descrições e links para repositórios
- Contato: Formulário funcional integrado com cliente de e-mail

### Responsividade

- Mobile-First: Abordagem progressiva de design
- Breakpoints fluidos: Adaptação suave entre diferentes tamanhos de tela
- Interface otimizada para toque em dispositivos móveis

## Tecnologias

### Frontend Core

| Tecnologia | Versão | Utilização |
|------------|--------|------------|
| HTML5 | - | Estrutura semântica e acessibilidade |
| CSS3 | - | Estilização, layout e responsividade |
| JavaScript (ES6+) | - | Interatividade e lógica de navegação |

### CSS

- CSS Custom Properties (Variables): Gerenciamento de temas e design tokens
- Flexbox: Layouts unidimensionais e alinhamentos
- CSS Grid: Grids bidimensionais para projetos e stack
- Media Queries: Adaptabilidade responsiva
- Transições e animações para feedback visual

### JavaScript

- DOM Manipulation: Manipulação eficiente do DOM
- Event Listeners: Interação do usuário
- localStorage: Persistência de preferências de tema

### Recursos Externos

- Google Fonts: Manrope (texto) e JetBrains Mono (código)
- Devicons: Ícones de tecnologias via CDN
- Inline SVGs: Ícones otimizados para performance

## Estrutura do Projeto

```
projeto1/
│
├── index.html              # Página principal (single-page app)
├── README.md               # Documentação do projeto
├── .gitignore              # Arquivos ignorados pelo Git
│
├── css/
│   └── style.css           # CSS 
│
├── js/
│   └──  main.js             # JavaScript 
│   
│
└── assets/
    └── images/
        └── Foto_linkedin.webp   # Imagem otimizada (WebP)
        
```

### Organização do Código

**HTML5 Semântico**

- Uso correto de tags semânticas (header, nav, main, section, article, footer)
- Atributos ARIA para acessibilidade
- Meta tags para SEO e redes sociais

**CSS**

- Design tokens no :root e [data-theme="dark"]
- Comentários por seções
- Nomenclatura BEM modificada
- Reset CSS personalizado

**JavaScript**

- IIFE para encapsulamento
- Funções nomeadas e reutilizáveis
- Comentários por funcionalidades

## Instalação e Execução

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/yohanngusso/yohanngusso-portfolio.git
cd yohanngusso-portfolio
```

2. Abra o arquivo:
- Dê duplo clique em index.html, ou
- Use uma extensão como Live Server no VS Code, ou


### Deploy em Produção

O projeto está configurado para ser hospedado no GitHub Pages:

1. Prepare o repositório:
- Certifique-se de que o arquivo principal se chama index.html
- Faça commit das mudanças
- Push para o GitHub

2. Configure GitHub Pages:
- Vá em Settings > Pages
- Source: Deploy from a branch
- Branch: main/master
- Folder: /(root)

3. Acesse seu site:
- URL: https://seu-usuario.github.io/nome-do-repositorio

## Responsividade

O projeto adota uma abordagem Mobile-First com breakpoints fluidos:

| Breakpoint | Largura | Ajustes Principais |
|------------|---------|-------------------|
| Mobile | <= 360px | Sidebar colapsada, grids 1 coluna |
| Mobile | 361px - 480px | Sidebar colapsada, grids 2 colunas |
| Tablet | 481px - 768px | Sidebar colapsada, grids adaptativos |
| Tablet | 769px - 900px | Sidebar colapsada, layout ajustado |
| Desktop | 901px - 1024px | Sidebar fixa, grids otimizados |
| Desktop | >= 1025px | Sidebar fixa, layout completo |

### Acessibilidade

- Navegação por teclado (Tab, Enter, ESC)
- Atalhos numéricos (1-4) para mudança rápida de seção
- Contraste de cores adequado
- Atributos alt em imagens
- Aria labels em elementos interativos

## Desenvolvimento

### Pré-requisitos

- Editor de código: Visual Studio Code
- Navegador: Google Chrome (para DevTools)
- Git instalado

### Extensões Recomendadas (VS Code)

- Live Server: Para preview em tempo real
- Prettier: Para formatação de código
- HTML CSS Support: IntelliSense para CSS
- JavaScript (ES6) code snippets: Snippets úteis

### Padrões de Código

- Indentação: 2 espaços
- Nomenclatura: camelCase para JS/variáveis, kebab-case para CSS
- Comentários: Português, claros e explicativos
- Semântica: Priorizar tags HTML5 semânticas

### Validação

- W3C HTML Validator: Validação HTML
- W3C CSS Validator: Validação CSS
- Lighthouse: Performance, acessibilidade e SEO
- Chrome DevTools: Testes de responsividade

## Design System

### Cores Light Mode

```css
--color-bg: #f4f4f5
--color-surface: #ffffff
--color-text: #09090b
--color-accent: #6366f1
--color-border: #e4e4e7
```

### Cores Dark Mode

```css
--color-bg: #09090b
--color-surface: #18181b
--color-text: #fafafa
--color-accent: #818cf8
--color-border: #27272a
```

### Tipografia

- Fonte Principal: Manrope (Google Fonts)
- Fonte Monospaced: JetBrains Mono (Google Fonts)
- Tamanhos: Sistema fluido com clamp() para responsividade

## Performance

### Otimizações Implementadas

- Imagens em WebP: Formato moderno com melhor compressão
- Lazy Loading: Carregamento assíncrono de recursos não críticos
- Preload de LCP: Antecipação de carregamento de imagem principal
- CSS Minificado: Versão otimizada para produção
- JavaScript Minificado: Versão otimizada para produção
- Inline Scripts: Scripts críticos inline para evitar render-blocking
- Fontes Assíncronas: Carregamento não bloqueante de fontes

### Métricas Alvo

- Lighthouse Performance: >= 90
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: >= 90
- Lighthouse SEO: 100

## Funcionalidades Futuras

Este projeto pode ser expandido com:

- Blog Integrado: Seção de artigos e aprendizados
- SASS/SCSS: Migração para CSS pré-processado
- JavaScript Avançado: Mais interatividade e animações
- PWA: Progressive Web App para instalação
- Formulário com Backend: Integração com API de envio real
- Analytics: Integração com Google Analytics ou similar

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Autor

Yohann Gusso

- Estudante de Engenharia de Software
- Desenvolvedor FullStack
- Freelancer
- Focado em Java (Spring Boot),Node.js, React e Python

## Contato

- Email: yohann.gusso@hotmail.com
- LinkedIn: https://www.linkedin.com/in/yohanngusso/
- GitHub: https://github.com/yohanngusso