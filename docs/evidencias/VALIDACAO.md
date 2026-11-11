# Validação — DevLinks

## Execução real

- `npm.cmd run build`: sucesso, com os quatro fundos e o avatar no pacote de produção.
- Playwright/Chromium: os cinco casos reportaram `ok`. O encerramento automático do servidor pelo runner ficou pendente no ambiente Windows; o build foi executado separadamente e terminou com código 0.
  1. Escuro: 320, 360, 390, 768 e 1440 px, quatro links, foto carregada, sem overflow horizontal e sem erro JS de página.
  2. Claro: as mesmas larguras, tokens claros, primeiro link a 312 px e largura de coluna esperada.
  3. Alternância pelo teclado e mouse; persistência de ambos os temas após recarregar.
  4. Valor inválido em localStorage volta ao escuro.
  5. Storage bloqueado não impede a alternância.
- Os testes verificaram `href` HTTPS, destino em outra aba e `rel`. Não verificaram disponibilidade dos sites externos nem perfis pessoais.

## Capturas do Playwright

| Tema | Mobile | Desktop |
|---|---|---|
| Escuro | [360×800](dark-360.png) | [1440×1024](dark-1440.png) |
| Claro | [360×800](light-360.png) | [1440×1024](light-1440.png) |

## Consulta técnica e pendências

Context7 não estava disponível. A implementação consultou diretamente [React — useState](https://react.dev/reference/react/useState) e [Vite — Getting Started](https://vite.dev/guide/). Esta anotação não substitui uma evidência específica de Context7, se exigida pela avaliação.

Os cartões individuais do board não estavam acessíveis. O projeto segue os requisitos do enunciado que foi possível ler. Zoom de navegador em 200% e autenticação/destinos externos não foram validados. Os destinos são demonstrativos e podem ser trocados em `src/data/links.js`.
