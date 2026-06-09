/*
  modal.js — modal de sentimentos
*/

const frasesPorSentimento = {
  triste: [
    "Oi, meu amor... Eu sei que você está se sentindo pra baixo agora. Mas eu quero que você se lembre de uma coisa: você é a pessoa mais forte e incrível que eu conheço. Esse sentimento vai passar, eu prometo. E até lá, eu estou aqui com você. Sempre. Te amo mais que tudo. ❤️",
  ],
  cansada: [
    "Ei, eu sei que você está cansada. O dia foi pesado, e está sendo bem difícil. Mas você não está sozinha — eu estou aqui para você se apoiar quando precisar. Tire um tempo pra você, respire fundo, e faça algo que você goste. Porque você merece descanso, merece paz. E merece alguém que a ama do jeito que eu amo você. 💕",
  ],
  saudade: [
    "Eu sei que você odeia esse sentimento — lembro de você falando isso. Mas eu quero que você saiba que, mesmo quando estamos longe, meu amor por você só cresce. A saudade é um sinal do quanto você é importante para mim. Cada momento juntos é um tesouro que eu guardo no coração. Mal posso esperar para te ver de novo. Te amo demais! 💖",
  ],
  feliz: [
    "Ver esse sorriso no seu rosto é, de longe, a melhor parte do meu dia. Saber que você está feliz faz o meu dia ficar mais leve e mais brilhante. Eu amo o seu sorriso, amo a sua luz, amo a sua energia. E amo ainda mais ser o cara que comemora isso com você. Continue brilhando, meu bem. 🥰",
  ],
};

function abrirModal(sentimento) {
  const modal = document.getElementById("modal-overlay");
  const fraseEl = document.getElementById("modal-frase");
  const lista = frasesPorSentimento[sentimento];

  if (lista) {
    fraseEl.textContent = lista[Math.floor(Math.random() * lista.length)];
    modal.classList.add("ativo");
  }
}

function fecharModal() {
  document.getElementById("modal-overlay").classList.remove("ativo");
}

function abrirCarta() {
  const overlay = document.getElementById("carta-overlay");
  if (overlay) overlay.classList.add("ativo");
}

function fecharCarta() {
  const overlay = document.getElementById("carta-overlay");
  if (overlay) overlay.classList.remove("ativo");
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-overlay");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharModal();
    });
  }

  const carta = document.getElementById("carta-overlay");
  if (carta) {
    carta.addEventListener("click", (e) => {
      if (e.target === carta) fecharCarta();
    });
  }
});
