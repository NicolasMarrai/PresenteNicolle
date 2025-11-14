/* ============================================
   INICIALIZAÇÃO - AGUARDA CARREGAMENTO DA PÁGINA
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ============================================
       CONFIGURAÇÕES EDITÁVEIS
       ============================================ */

    // Lista de fotos do slideshow (adicione seus caminhos aqui)
    const minhasFotos = [
        'imagem/foto1.jpg',
        'imagem/foto2.jpg',
        'imagem/foto3.jpg',
        'imagem/foto4.jpg',
        'imagem/foto5.jpg',
        'imagem/foto6.jpg',
        'imagem/foto5.jpg',
        'imagem/foto5.jpg',
        'imagem/foto5.jpg',
        'imagem/foto5.jpg' 
    ];

    // Data inicial do relacionamento (para o contador)
    // Descomente e edite conforme necessário: new Date(YYYY, MM-1, DD, HH, MM, SS)
    // const dataInicio = new Date(2022, 10, 15, 18, 0, 0);

    // Informações da música (edite aqui)
    const nomeMusica = "And I Love Her";
    const nomeArtista = "The Beatles";
    const capaMusica = "imagem/capa-musica.jpg";

    /* ============================================
       SELEÇÃO DE ELEMENTOS DO DOM
       ============================================ */

    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.getElementById('enter-button');
    const slideshowImg = document.getElementById('slideshow');
    const counterElement = document.getElementById('counter');

    // Elementos do player de música
    const musica = document.getElementById('musica-de-fundo');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playPauseIcon = playPauseBtn.querySelector('i');
    const timelineContainer = document.getElementById('timeline-container');
    const timelineProgress = document.getElementById('timeline-progress');

    /* ============================================
       CONFIGURAR INFORMAÇÕES DO PLAYER
       ============================================ */

    document.getElementById('player-song-title').textContent = nomeMusica;
    document.getElementById('player-song-artist').textContent = nomeArtista;
    document.getElementById('player-art').src = capaMusica;

    let fotoAtualIndex = 0;

    /* ============================================
       EVENT LISTENER: BOTÃO "CLIQUE"
       ============================================ */

    enterButton.addEventListener('click', () => {
        // Fade out da tela inicial
        splashScreen.style.opacity = '0';
        setTimeout(() => { splashScreen.style.display = 'none'; }, 1000);

        // Mostra conteúdo principal
        mainContent.style.display = 'flex';

        // Inicia música e atualiza ícone
        if (musica) {
            musica.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        }

        // Inicia funções periódicas
        iniciarSlideshow();
        setInterval(atualizarContador, 1000);
        setInterval(criarEmoji, 400);
    });

    /* ============================================
       EVENT LISTENERS: PLAYER DE MÚSICA
       ============================================ */

    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            musica.pause();
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    });

    // Atualizar barra de progresso
    musica.addEventListener('timeupdate', () => {
        const { currentTime, duration } = musica;
        const progressPercent = (currentTime / duration) * 100;

        if (!isNaN(progressPercent)) {
            timelineProgress.style.width = `${progressPercent}%`;
        }
    });

    // Pular para posição clicada na barra
    timelineContainer.addEventListener('click', (e) => {
        const width = timelineContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = musica.duration;

        musica.currentTime = (clickX / width) * duration;
    });

    /* ============================================
       FUNÇÕES PRINCIPAIS
       ============================================ */

    function iniciarSlideshow() {
        slideshowImg.src = minhasFotos[fotoAtualIndex];
        slideshowImg.style.opacity = '1';

        setInterval(() => {
            slideshowImg.style.opacity = '0';
            setTimeout(() => {
                fotoAtualIndex = (fotoAtualIndex + 1) % minhasFotos.length;
                slideshowImg.src = minhasFotos[fotoAtualIndex];
                slideshowImg.style.opacity = '1';
            }, 1000);
        }, 3000);
    }

    function atualizarContador() {
        const agora = new Date();
        const diff = agora - dataInicio;

        let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((diff % (1000 * 60)) / 1000);

        counterElement.innerHTML = `Eu te amo há:<br>
            <span>${dias} dias, ${horas}h ${minutos}m ${segundos}s</span>`;
    }

    function criarEmoji() {
        const emojis = ['❤️', '💖', '✨', '💕', '🥰', '😍'];
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(emoji);
        setTimeout(() => { emoji.remove(); }, 10000);
    }
});