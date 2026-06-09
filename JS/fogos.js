/*
  fogos.js — animação de fogos de artifício com canvas
  Dispara automaticamente ao entrar no site
*/

function iniciarFogos() {
  const canvas = document.getElementById("fogos-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.style.display = "block";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = [
    "#b8882a",
    "#e8cc80",
    "#f5d98b",
    "#ff9eb5",
    "#ffcce0",
    "#fff5dc",
    "#ffd700",
    "#ffe066",
    "#fffacd",
  ];

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.r = Math.random() * 3 + 1;
      this.angle = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 5 + 2;
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.018 + 0.012;
      this.gravity = 0.08;
    }

    update() {
      this.x += this.vx;
      this.vy += this.gravity;
      this.y += this.vy;
      this.alpha -= this.decay;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function explodir(x, y) {
    const count = 90 + Math.floor(Math.random() * 40);
    const cor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(x, y, cor));
    }
  }

  // Dispara fogos em posições aleatórias
  const posicoes = [
    [0.2, 0.3],
    [0.5, 0.2],
    [0.8, 0.3],
    [0.3, 0.5],
    [0.7, 0.4],
    [0.5, 0.35],
    [0.15, 0.45],
    [0.85, 0.25],
  ];

  let fogoIdx = 0;
  const intervaloFogos = setInterval(() => {
    if (fogoIdx < posicoes.length) {
      const [px, py] = posicoes[fogoIdx];
      explodir(canvas.width * px, canvas.height * py);
      fogoIdx++;
    } else {
      clearInterval(intervaloFogos);
    }
  }, 320);

  // Loop de animação
  let frameId;
  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].alpha <= 0) particles.splice(i, 1);
    }

    if (particles.length > 0 || fogoIdx < posicoes.length) {
      frameId = requestAnimationFrame(animar);
    } else {
      canvas.style.display = "none";
      cancelAnimationFrame(frameId);
    }
  }

  animar();

  // Redimensionar canvas se a janela mudar
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
