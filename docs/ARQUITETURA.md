# Arquitetura — DevLinks

Uma SPA React/Vite em JavaScript e CSS comum. Sem backend e sem rotas. Esta árvore é o contrato do projeto.

```text
devlinks/
├── AGENTS.md
├── README.md
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── playwright.config.js         # servidor local dos testes
├── tests/
│   └── devlinks.spec.js         # verificações no navegador
├── docs/
│   ├── ARQUITETURA.md
│   ├── DESIGN_SYSTEM.md
│   ├── PLANO.md
│   ├── referencias/             # SVGs originais, sem alterações
│   └── evidencias/              # capturas e registros reais
└── src/
    ├── main.jsx                 # entrada React
    ├── App.jsx                  # composição e estado do tema
    ├── styles.css               # tokens, layout e estados
    ├── assets/
    │   ├── avatar.jpg
    │   └── backgrounds/         # fundos extraídos dos SVGs
    ├── components/
    │   ├── Profile.jsx
    │   ├── LinkButton.jsx
    │   ├── ThemeToggle.jsx
    │   └── SocialLinks.jsx
    └── data/
        └── links.js
```

App controla tema e passa props; Profile recebe avatar e identificação; LinkButton recebe rótulo e destino; SocialLinks recebe lista; ThemeToggle recebe tema e callback. styles.css concentra tokens comuns e seletores por tema. Dados de conteúdo ficam em links.js; não colocar regras visuais nos dados.

Não criar camadas services/repositories/store/hooks para esta escala. Extrair somente quando uma responsabilidade real justificar. Mudanças de caminhos, componentes ou tecnologia devem atualizar este documento e as importações no mesmo commit. Arquivos de configuração e testes pertinentes podem ser adicionados com justificativa. Nunca versionar node_modules, dist, credenciais ou arquivos do usuário alheios ao projeto.
