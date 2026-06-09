/*
  script.js — inicialização principal
  Slideshow, contador, player de música, emojis
*/

document.addEventListener("DOMContentLoaded", () => {
  /* ---- CONFIGURAÇÕES ---- */
  const minhasFotos = [
    "imagem/foto1.jpeg",
    "imagem/foto2.jpg",
    "imagem/foto3.jpg",
    "imagem/foto4.jpg",
    "imagem/foto5.jpg",
    "imagem/foto6.jpeg",
    "imagem/foto7.jpeg",
    "imagem/foto8.jpeg",
    "imagem/foto9.jpeg",
    "imagem/foto10.jpeg",
  ];

  const dataInicio = new Date(2025, 10, 19, 20, 30, 0); // 19/11/2025

  const nomeMusica = "And I Love Her";
  const nomeArtista = "The Beatles";
  const capaMusica = "imagem/capa-musica.jpg";

  /* ---- ELEMENTOS ---- */
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");
  const enterButton = document.getElementById("enter-button");
  const slideshowImg = document.getElementById("slideshow");
  const counterElement = document.getElementById("counter");
  const musica = document.getElementById("musica-de-fundo");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const playPauseIcon = playPauseBtn.querySelector("i");
  const timelineContainer = document.getElementById("timeline-container");
  const timelineProgress = document.getElementById("timeline-progress");

  /* ---- PLAYER INFO ---- */
  document.getElementById("player-song-title").textContent = nomeMusica;
  document.getElementById("player-song-artist").textContent = nomeArtista;
  document.getElementById("player-art").src = capaMusica;

  let fotoAtualIndex = 0;

  /* ---- BOTÃO ENTRAR ---- */
  enterButton.addEventListener("click", () => {
    splashScreen.style.opacity = "0";
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 1000);

    mainContent.style.display = "flex";

    if (musica) {
      musica.play().catch(() => {});
      playPauseIcon.classList.replace("fa-play", "fa-pause");
    }

    iniciarSlideshow();
    setInterval(atualizarContador, 1000);
    setInterval(criarEmoji, 500);

    // Dispara os fogos
    if (typeof iniciarFogos === "function") iniciarFogos();
  });

  /* ---- PLAYER: PLAY/PAUSE ---- */
  playPauseBtn.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
      musica.pause();
      playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
  });

  /* ---- PLAYER: PROGRESSO ---- */
  musica.addEventListener("timeupdate", () => {
    const pct = (musica.currentTime / musica.duration) * 100;
    if (!isNaN(pct)) timelineProgress.style.width = `${pct}%`;
  });

  timelineContainer.addEventListener("click", (e) => {
    musica.currentTime =
      (e.offsetX / timelineContainer.clientWidth) * musica.duration;
  });

  /* ---- SLIDESHOW ---- */
  function iniciarSlideshow() {
    slideshowImg.src = minhasFotos[fotoAtualIndex];
    slideshowImg.style.opacity = "1";

    setInterval(() => {
      slideshowImg.style.opacity = "0";
      setTimeout(() => {
        fotoAtualIndex = (fotoAtualIndex + 1) % minhasFotos.length;
        slideshowImg.src = minhasFotos[fotoAtualIndex];
        slideshowImg.style.opacity = "1";
      }, 1000);
    }, 4000);
  }

  /* ---- CONTADOR ---- */
  function atualizarContador() {
    const diff = new Date() - dataInicio;
    const dias = Math.floor(diff / 86400000);
    const horas = Math.floor((diff % 86400000) / 3600000);
    const minutos = Math.floor((diff % 3600000) / 60000);
    const segs = Math.floor((diff % 60000) / 1000);

    if (counterElement) {
      counterElement.textContent = `${dias} dias, ${horas}h ${minutos}m ${segs}s`;
    }
  }

  /* ---- EMOJIS ---- */
  const emojis = ["❤️", "💛", "✨", "💕", "🥰", "🌸", "🌷", "💫"];

  function criarEmoji() {
    const el = document.createElement("div");
    el.classList.add("emoji");
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 6 + 6 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 12000);
  }
});
