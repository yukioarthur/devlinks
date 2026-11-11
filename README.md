# DevLinks

Projeto 03 em React, JavaScript, Vite e CSS. Página de links responsiva baseada nos SVGs fornecidos, com a foto de Arthur Yukio e preferência de tema salva no navegador.

[Enunciado no Notion](https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93)

## Executar

Use Node.js 22.12+ ou 24 LTS. Abra PowerShell dentro de `devlinks`:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra a URL mostrada pelo Vite. Para validar a produção e repetir os testes:

```powershell
npm.cmd run build
npx.cmd playwright install chromium
npm.cmd run test:e2e
```

## Implementação

- Profile, LinkButton, ThemeToggle e SocialLinks usam props; as listas usam map().
- App usa useState para alternar tema e localStorage para manter a escolha. Escuro é o padrão.
- Os temas compartilham os componentes e diferem em tokens e fundos CSS.
- `src/data/links.js` mantém os rótulos do SVG com **destinos demonstrativos**: React, Vite, livro público e páginas públicas das redes. Substitua pelos destinos pessoais se necessário.

## Documentação

- [AGENTS.md](AGENTS.md) · [Arquitetura](docs/ARQUITETURA.md) · [Design system](docs/DESIGN_SYSTEM.md)
- [Plano e execução](docs/PLANO.md) · [Evidências](docs/evidencias/VALIDACAO.md)

Os guias de configuração e GitHub são entregues separadamente. O GitHub não é necessário para rodar ou testar.
