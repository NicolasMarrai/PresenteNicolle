// JS/modal.js

// 1. LISTA DE FRASES PARA CADA SENTIMENTO
const frasesPorSentimento = {
    triste: [
        "Oi, meu amor...Eu sei que você está se sentindo pra baixo agora. Mas eu quero que você se lembre de uma coisa: ",
        "Você é a pessoa mais forte e incrível que eu conheço. Esse sentimento vai passar, eu prometo. E até lá, eu estou aqui com você. Sempre. Te amo mais que tudo. ❤️"
    ],
    cansada: [
        "Ei, eu sei que você está cansada. O dia foi pesado, e está sendo bem difícil. Mas eu quero que você saiba que você não está sozinha. Eu estou aqui para você descansar e se apoiar quando precisar. Tire um tempo pra você, respire, e faça algo que você goste. Porque você merece descanso, merece paz. E merece alguém que a ama do jeito que eu amo você. 💕"
    ],
    saudade: [
        "Essa foi uma das frases mais difíceis de montar, porque você odeia esse sentimento (lembro que você falou isso uma vez). Mas eu quero que você saiba que, mesmo quando estamos longe, meu amor por você só cresce. A saudade é um sinal do quanto você é importante para mim. E cada momento que passamos juntos é um tesouro que eu guardo no meu coração. Mal posso esperar para te ver de novo e matar essa saudade toda. Te amo demais!💖"
    ],
    feliz: [
        "Ver esse sorriso no seu rosto é, de longe, a melhor parte do meu dia. Saber que você está feliz, faz o meu dia ficar mais leve e mais brilhante. Eu amo o seu sorriso, amo a sua luz, amo a sua energia. E amo ainda mais ser o cara que pode comemorar isso com você. Continue brilhando, meu bem. 🥰"
    ]
};

// 2. FUNÇÃO PRINCIPAL PARA ABRIR O MODAL
function abrirModal(sentimento) {
    const modal = document.getElementById('modal-overlay');
    const fraseTexto = document.getElementById('modal-frase');

    // Seleciona as frases do sentimento escolhido
    const listaFrases = frasesPorSentimento[sentimento];
    
    if (listaFrases) {
        // Escolhe uma frase aleatória dessa lista
        const indiceAleatorio = Math.floor(Math.random() * listaFrases.length);
        const fraseSelecionada = listaFrases[indiceAleatorio];

        // Define a frase no HTML
        fraseTexto.textContent = fraseSelecionada;
        
        // Exibe o modal
        modal.classList.add('ativo');
    }
}

// 3. FUNÇÃO PARA FECHAR O MODAL
function fecharModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('ativo');
}

// 4. Fechar o modal clicando no fundo (overlay)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-overlay');
    
    if (modal) {
        modal.addEventListener('click', (evento) => {
            // Se o clique foi exatamente no fundo (e não na caixa de conteúdo)
            if (evento.target === modal) {
                fecharModal();
            }
        });
    }
});