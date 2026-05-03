// IDs das seções do arquivo principal da landing page
const ids = ["first", "second", "third"];
const secoes = ids.map(id => document.getElementById(id));

// Variável que controla onde o usuário está
let atual = 0;

let travado = false;

// função principal
function scrollIds(indice) {
  if (travado) return;

  atual = Math.max(0, Math.min(indice, secoes.length - 1));

  travado = true;

  window.scrollTo({
    top: secoes[atual].offsetTop,
    behavior: "smooth"
  });

  setTimeout(() => (travado = false), 700);
}

// SCROLL
window.addEventListener("wheel", (e) => {
  if (travado) return;

  if (e.deltaY > 0) scrollIds(atual + 1);
  else scrollIds(atual - 1);
}, { passive: true });

// TECLADO
window.addEventListener("keydown", (e) => {
  if (["ArrowDown", " "].includes(e.key)) scrollIds(atual + 1);
  if (e.key === "ArrowUp") scrollIds(atual - 1);
});