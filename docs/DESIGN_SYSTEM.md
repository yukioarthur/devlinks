# Design system extraído dos SVGs

## Origem e precisão
Referências: darkmode.svg e lighmode.svg (grafia original preservada). Ambos contêm desktop e mobile. Valores abaixo foram lidos da estrutura XML. O SVG escuro foi renderizado no Chromium para conferir os rótulos e as redes. A implementação mantém a estrutura e personaliza o perfil e o crédito.

| Elemento | Escuro | Claro |
|---|---|---|
| Tela desktop | 1440×1024 | 1440×1024 |
| Tela mobile | 360×800 | 360×800 |
| Fundo base | #121214 | #FFFFFF |
| Avatar | 112×111px (ellipse) | 112×112px |
| Contorno avatar | 2px branco a 50% | 2px preto a 50% |
| Links desktop/mobile | 540 / 312px | 540 / 312px |
| Altura / raio dos links | 56 / 8px | 56 / 8px |
| Intervalo vertical | 16px | 16px |
| Superfície dos links | branco a 10% | preto a 5% |
| Contorno dos links | 1px branco a 50% | 1px preto a 50% |
| Trilho do seletor | 64×24px, raio 12px | igual |
| Botão do seletor | 32×32px, branco, esquerda | branco, direita |

Os SVGs incluem imagens PNG embutidas: fundos desktop 1920×1080 e mobile 1080×1920, além do retrato original. Extrair somente fundos para a aplicação. O avatar original não deve substituir a foto fornecida pelo usuário.

## Geometria relativa à tela
Desktop começa em (80,80); mobile em (1550,80) no escuro e (1560,80) no claro. Esses deslocamentos e a moldura cinza são da exportação, não da aplicação.
Avatar começa aproximadamente 80px abaixo do topo da tela. Primeiro link começa a 312px do topo; demais a 384, 456 e 528px. Desktop tem centro horizontal 720px; mobile 180px. Os textos estão convertidos em paths: família, peso e tamanho da fonte precisam ser confirmados visualmente ou no style guide. Não afirmar que a fonte foi extraída.

## Decisões de implementação (não são medidas extraídas)
- Normalizar avatar para círculo 112×112px.
- Container com max-width 588px incluindo padding lateral de 24px; conteúdo útil máximo 540px. Em 360px, área útil de 312px.
- Usar min-height nos links, permitindo texto maior e zoom.
- Breakpoint inicial de 768px somente para troca do fundo; ajustar por comparação visual, sem duplicar markup.
- Tokens sugeridos: --page-bg, --text, --surface, --border, --focus, --content-width, --link-radius. Fundos preservam gradientes/texturas da referência.
- Hover, foco, animações e alvo de toque do seletor exigem decisão acessível documentada; não estão integralmente descritos pelos SVGs estáticos.

## Foto
Fonte local autorizada: 136349773.jpg, copiada como src/assets/avatar.jpg e exibida em Profile nos dois temas. O recorte circular usa object-fit: cover e preserva as proporções da foto. A família Inter, Arial, sans-serif foi escolhida para a implementação; a fonte exata do SVG não foi confirmada.
