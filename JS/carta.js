/*
  carta.js — carta especial de Dia dos Namorados
*/

const cartaTexto = `Meu amor,

Hoje é Dia dos Namorados, mas, pra ser honesto, eu penso em você todos os dias como se fosse esse dia.

Eu me lembro daquela noite no Dom Bacon — a gente sentado lá, a comida gostosa, aquela batata com cheddar que você amou, e você rindo, se abrindo, se sentindo confortável comigo. Foi naquele momento que eu entendi que você era especial de um jeito diferente. Não era só a conversa, era a forma como você estava presente, como os seus olhos brilhavam quando você falava, como você me fez sentir que eu queria ser o cara que te faz sorrir sempre.

De lá pra cá, cada dia ao seu lado virou um presente. Aprendi que o teu abraço resolve coisas que palavras não conseguem. Aprendi que a tua risada é o melhor som do mundo. E aprendi, acima de tudo, que amar você é a coisa mais natural que já senti.

Você me ensina todos os dias o que é leveza, carinho e cuidado. E eu prometo continuar aqui, do seu lado, sendo o lugar mais seguro que você já conheceu.

Feliz Dia dos Namorados, minha Nicolle. Esse site, essas fotos, essas palavras — são só um pedacinho do que eu sinto. O resto tá guardado no meu coração e eu mostro pra você em cada detalhe, todos os dias.

Com todo o meu amor,
Nicolas ♡`;

document.addEventListener("DOMContentLoaded", () => {
  const secaoCarta = document.getElementById("secao-carta");
  const cartaOverlay = document.getElementById("carta-overlay");
  const cartaEl = document.getElementById("carta-texto");

  if (secaoCarta) {
    secaoCarta.addEventListener("click", () => {
      cartaEl.textContent = cartaTexto;
      cartaOverlay.classList.add("ativo");
    });
  }
});

function fecharCarta() {
  document.getElementById("carta-overlay").classList.remove("ativo");
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("carta-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) fecharCarta();
    });
  }
});
