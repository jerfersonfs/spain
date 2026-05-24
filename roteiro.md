# Roteiro de apresentação - Espanha como destino

Tempo total aproximado: 5 minutos.

## 0:00 a 0:45 - Abertura na landing page

**Tela:** abra `landing/index.html` e permaneça na imagem principal.

**Fala:**

"Bom dia. O meu site apresenta a Espanha não como uma página de notícias, mas
como uma vitrine de viagem. A primeira mensagem é: conhecer a Espanha com todos
os sentidos. Isso porque o país pode ser descoberto pela arquitetura, pelas
praias, pela culinária, pela arte e pela vida nas cidades.

No visual, escolhi cores ligadas à bandeira espanhola, vermelho e amarelo, e
coloquei a própria bandeira no cabeçalho para identificar o tema já no primeiro
olhar."

## 0:45 a 1:35 - Dados que dão confiança

**Tela:** indique os quatro números abaixo da imagem.

**Fala:**

"Além de provocar vontade de viajar, eu quis trazer informação confiável. A
Espanha tem mais de 49 milhões de habitantes e uma área de 505.983 quilômetros
quadrados. A capital é Madri e o país entrou na União Europeia em 1986.

Esses dados foram retirados da página oficial da União Europeia sobre a Espanha.
Assim, o site mistura encantamento com informações que ajudam a conhecer de
verdade o destino."

## 1:35 a 2:25 - Home e proposta do site

**Ação:** clique em **Começar a viagem** para abrir a Home.

**Fala:**

"A landing page funciona como a entrada da experiência. Depois dela, a Home
organiza a visita em caminhos: lugares, cultura, viagem e informações gerais.
Eu pensei nisso como uma pessoa escolhendo o que mais desperta interesse:
primeiro ela pode querer ver cidades, depois conhecer hábitos e finalmente
pensar em viajar.

Na parte inferior, apresento novamente dados importantes, como o euro e o
espanhol, porque eles também fazem parte da experiência de conhecer o país."

## 2:25 a 3:15 - Lugares: vender os cenários

**Ação:** abra **Lugares**.

**Fala:**

"Na página Lugares, eu destaquei cidades com experiências diferentes. Madri é
a capital e oferece museus, praças e vida urbana. Barcelona une arquitetura
marcante e mar. Sevilha representa muito da atmosfera andaluza e do flamenco.
Granada lembra a riqueza histórica, e Valência une praias, gastronomia e
arquitetura moderna.

A ideia é mostrar que visitar a Espanha não significa ter apenas um tipo de
viagem: a pessoa pode escolher cultura, história, praia ou combinar tudo."

## 3:15 a 3:55 - Cultura: vender a experiência

**Ação:** abra **Cultura**.

**Fala:**

"A Espanha também é atraente pelo que se sente durante a viagem. A página
Cultura destaca arte e arquitetura, sabores, música e língua. Uma refeição
com tapas ou paella, um passeio por monumentos e a presença do flamenco tornam
a visita memorável.

Então eu não estou vendendo apenas pontos turísticos. Estou apresentando uma
experiência: caminhar, observar, provar e conviver com uma cultura muito viva."

## 3:55 a 4:25 - Viajar e conclusão do conteúdo

**Ação:** abra **Viajar** e mostre os passos.

**Fala:**

"Para encerrar o percurso, a página Viajar transforma o interesse em plano.
Ela sugere escolher a época, conectar destinos, reservar experiências e sempre
conferir documentos em fontes oficiais. Assim, o site termina conduzindo a
pessoa da vontade de conhecer até a possibilidade de organizar uma viagem.

Em resumo, a Espanha é um destino que oferece história, cidades vibrantes,
praias, cultura e sabores em uma mesma viagem."

## 4:25 a 5:00 - Explicação do desenvolvimento e referências

**Tela:** volte rapidamente à landing ou à Home para mostrar o visual.

**Fala:**

"O projeto foi construído com HTML e CSS. Mantive uma organização parecida com
os exercícios que venho aprendendo: cada página HTML tem seu próprio arquivo
CSS, e os nomes das classes indicam o que aparece na tela, como `cabecalho`,
`destinos` e `chamada`.

Eu acrescentei algumas técnicas novas. Usei `linear-gradient` sobre as imagens
para escurecer uma parte da foto e deixar o texto legível. Os cards parecem
ficar por cima da imagem porque recebem margem superior negativa: eles sobem
um pouco e se sobrepõem à seção anterior. Também usei `display: grid` para
organizar cards lado a lado e `media query` para o site se adaptar em uma tela
menor. Na landing, agrupei as cores principais em variáveis CSS, para trocar
a paleta em um lugar só sem procurar a mesma cor em todo o arquivo.

Para a parte visual, observei a linguagem de convite do portal oficial
Spain.info e usei como referência a página sobre Espanha do Euro Dicas. Para
os números apresentados, utilizei a página oficial da União Europeia. Dessa
forma, o site procura convidar a conhecer a Espanha, mas com informações
confiáveis. Obrigado."

## Como explicar as técnicas se o professor perguntar

**Bandeira no cabeçalho**

No HTML, foi utilizada a tag `img`, assim como qualquer imagem:

```html
<img src="../imagens/bandeira-espanha.svg" alt="Bandeira da Espanha" class="bandeira">
```

O arquivo está dentro do projeto, por isso a bandeira funciona mesmo sem
internet.

**Texto legível sobre a imagem**

O CSS coloca duas camadas no fundo: primeiro o gradiente escuro, depois a foto.
O gradiente funciona como uma sombra transparente:

```css
.hero-interno{
    background-image:
        linear-gradient(90deg, rgba(48, 29, 22, 0.82), rgba(48, 29, 22, 0.18)),
        url("imagem-da-pagina");
}
```

**Cards passando por cima da imagem**

Os cards da Home sobem `42px` porque a margem de cima é negativa. A propriedade
`position: relative` ajuda a mantê-los aparecendo acima da área anterior:

```css
.atalhos{
    margin: -42px auto 66px;
    position: relative;
}
```

**Cards organizados em colunas**

O `grid` divide o espaço em colunas iguais:

```css
.atalhos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

`repeat(3, 1fr)` significa três colunas dividindo igualmente o espaço.

**Cores guardadas no início da landing**

As variáveis guardam as cores mais repetidas. Quando aparece
`var(--vermelho)`, o navegador utiliza a cor definida no começo do CSS:

```css
:root{
    --vermelho: #9f241e;
    --amarelo: #f4c84b;
}
```

**Site adaptado ao celular**

A `media query` muda as colunas para uma coluna quando a tela fica menor:

```css
@media (max-width: 920px){
    .atalhos{
        grid-template-columns: 1fr;
    }
}
```

## Fontes para citar

- Dados oficiais: <https://european-union.europa.eu/principles-countries-history/eu-countries/spain_pt>
- Referência visual e de turismo: <https://www.spain.info/pt_BR/>
- Referência visual indicada para o projeto: <https://www.eurodicas.com.br/espanha/>
- Organização de código estudada: <https://github.com/jerfersonfs/aulaHtml>
