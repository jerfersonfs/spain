# Refatoração visual: vitrine da Espanha

Esta proposta mantém a dinâmica de entrada em uma **landing page** e depois conduz
para uma **Home com navegação entre páginas**. O visual foi inspirado em portais
turísticos: imagens grandes, tons quentes, textos de convite e cards para explorar
destinos e experiências.

## Arquivos da implementação

```text
landing/
    index.html
    index.css
imagens/
    bandeira-espanha.svg
pages/
    home.html
    home.css
    sobre.html
    sobre.css
    lugares.html
    lugares.css
    influencias.html
    influencias.css
    viajar.html
    viajar.css
```

Esses arquivos formam a versão refatorada e correspondem à mesma organização do
projeto original. Agora cada HTML utiliza seu próprio CSS: por exemplo,
`lugares.html` chama apenas `lugares.css`.

## O que foi usado no código

- HTML semântico com `header`, `nav`, `main`, `section`, `article` e `footer`.
- CSS organizado por página, com seletores diretos e comentários curtos nas páginas internas.
- `display: flex`, `display: grid` e `linear-gradient` para manter o visual da vitrine.
- Media queries para que o site também se organize em telas menores.
- Imagens externas aplicadas no CSS como fundo, mantendo o HTML simples.
- Bandeira da Espanha em arquivo local, para aparecer mesmo sem internet.
- Links internos para navegar entre landing, Home e as quatro seções.

Não foi necessário adicionar JavaScript: toda a navegação funciona por links HTML
e o resultado visual acontece no CSS.

## Aproximação com as aulas

A organização foi aproximada dos exercícios de `jerfersonfs/aulaHtml`, em especial
os exemplos de `aula12`, `aula13` e `aula17`: HTML ligado a uma folha CSS, seletores
diretos, classes fáceis de reconhecer e comentários para separar a navegação e o
conteúdo. Alguns recursos extras foram mantidos porque formam o visual aprovado:
gradientes, cards sobrepostos, grade de cards e ajuste para telas menores.
Na landing, as cores principais também aparecem agrupadas no começo do CSS em
variáveis, para deixar claro quais cores formam a identidade do site.

## Conteúdo e fonte

Os dados estatísticos utilizados são da página oficial da União Europeia sobre a
Espanha:

- População: 49.077.984 habitantes (2025).
- Área: 505.983 km².
- Capital: Madrid, apresentada no texto também como Madri.
- Entrada na União Europeia: 1 de janeiro de 1986.
- Moeda: euro.

Fonte: <https://european-union.europa.eu/principles-countries-history/eu-countries/spain_pt>

## Referências visuais

- Portal oficial de turismo: <https://www.spain.info/pt_BR/>
- Euro Dicas - Espanha: <https://www.eurodicas.com.br/espanha/>
