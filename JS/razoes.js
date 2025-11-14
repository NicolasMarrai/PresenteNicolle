/*
  Caixa de razões
  Arquivo: JS/razoes.js

  Objetivo: mostrar uma razão aleatória ao clicar num botão, com efeito de
  transição (fade). Comentários limpos e código formatado para legibilidade.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Lista de razões — adicione/edite conforme desejar
    const listaDeRazoes = [
    'Pelo teu sorriso, que ilumina tudo.',
    'Pela tua paciência comigo, mesmo nos piores dias.',
    'Porque me faz rir como ninguém.',
    'Pela tua inteligência e pelo quanto aprendo contigo.',
    'Pelo teu abraço.',
    'Pela forma como cuida de mim.',
    'Porque me apoia em todas minhas loucuras.',
    'Pelo teu cheiro.',
    'Pela forma como os seus olhos brilham.',
    'Porque me torna uma pessoa melhor.',
    'Por sempre acredita em mim, mesmo quando eu duvido.',
    'Pelo modo como fala de mim com orgulho.',
    'Pelas conversas longas sobre tudo e nada.',
    'Porque sabe exatamente o que dizer na hora certa.',
    'Pela tua sinceridade.',
    'Pelo teu carinho infinito.',
    'Pela forma como me olha quando acha que não percebo.',
    'Porque nunca desiste de nós.',
    'Pela tua força.',
    'Porque me ensina todos os dias sobre amor.',
    'Porque é a primeira pessoa que eu quero contar tudo.',
    'Pelo teu toque.',
    'Pelo teu senso de humor único.',
    'Por todas as aventuras ao teu lado.',
    'Porque respeita o meu espaço e o meu tempo.',
    'Pela tua generosidade.',
    'Porque se preocupa verdadeiramente comigo.',
    'Pelo teu charme inegável.',
    'Pela tua bondade com os outros.',
    'Porque faz até os dias simples serem especiais.',
    'Por nunca me julgar.',
    'Porque posso ser eu mesmo contigo.',
    'Pela tua sensibilidade.',
    'Por me ouvir com atenção.',
    'Porque celebra as minhas conquistas como se fossem suas.',
    'Pela forma como segura a minha mão.',
    'Porque está sempre ao meu lado, na alegria e na dor.',
    'Pelo teu jeito único de amar.',
    'Porque me faz sentir importante.',
    'Pelo teu calor em dias frios.',
    'Porque valoriza cada momento juntos.',
    'Pelos beijos inesperados.',
    'Por todas as memórias lindas que criamos.',
    'Porque lembra de detalhes que eu já esqueci.',
    'Pelas gargalhadas altas.',
    'Porque aceita as minhas imperfeições.',
    'Por me inspirar diariamente.',
    'Pelas mensagens que fazem o meu dia melhor.',
    'Porque contigo eu sinto paz.',
    'Por me entende sem que eu precise explicar.',
    'Porque é a minha maior certeza.',
    'Pela tua lealdade.',
    'Por acreditar no amor.',
    'Porque comemoramos até as pequenas vitórias.',
    'Por me guiar quando me sinto perdido.',
    'Pelos teus sonhos que quero ver realizados.',
    'Porque me dá sentido.',
    'Pela tua dedicação.',
    'Porque faz parte do meu futuro.',
    'Pelo teu jeito doce.',
    'Porque eu admiro tudo em você.',
    'Pela forma como torna tudo mais leve.',
    'Por me acolher nos seus braços.',
    'Pelo teu jeitinho tímido.',
    'Pela tua coragem.',
    'Pelo teu companheirismo.',
    'Por tornarmos tudo divertido juntos.',
    'Porque é o meu porto seguro.',
    'Pelo teu brilho único.',
    'Por partilhar os teus medos comigo.',
    'Porque me motiva a ser melhor.',
    'Pelo teu jeitinho bobo que eu amo.',
    'Por me ensinar a ver beleza nas pequenas coisas.',
    'Porque a tua voz me acalma.',
    'Pela tua criatividade.',
    'Porque o tempo contigo passa mais rápido.',
    'Por me amar.',
    'Porque me faz sentir especial.',
    'Pela tua fidelidade.',
    'Porque me faz querer ser o melhor para nós.',
    'Por todos os sorrisos divididos.',
    'Pelas músicas que me lembram você.',
    'Porque valoriza quem eu sou.',
    'Por me deixar saudade mesmo estando perto.',
    'Porque contigo tudo faz sentido.',
    'Por me abraçar forte quando preciso.',
    'Porque cuidamos um do outro.',
    'Pela tua energia boa.',
    'Por me aceitar completamente.',
    'Porque me mostrar um mundo mais bonito.',
    'Pela maneira como fala comigo.',
    'Por sermos melhores juntos.',
    'Porque os teus olhos contam histórias.',
    'Pelo apoio quando tenho medo.',
    'Porque me faz acreditar no amor.',
    'Por ser a minha pessoa favorita.',
    'Pelo teu amor leve e sincero.',
    'Porque transforma dias ruins em dias bons.',
    'Por me fazer sentir amado todos os dias.',
    'Porque é o meu melhor destino.',
    'Simplesmente porque é você.',
        // Adicione mais razões acima, sem esquecer as vírgulas
    ];

    // Configurações
    const FADE_DURATION_MS = 500; // duração da transição (ms)

    // Elementos do DOM (IDs usados no HTML)
    const botaoNovaRazao = document.getElementById('botao-nova-razao');
    const elementoRazao = document.getElementById('razao-texto');

    // Retorna uma razão aleatória da lista (ou texto padrão se vazia)
    const obterRazaoAleatoria = () => {
        if (!listaDeRazoes || listaDeRazoes.length === 0) {
            return 'Ainda não há razões adicionadas.';
        }
        const idx = Math.floor(Math.random() * listaDeRazoes.length);
        return listaDeRazoes[idx];
    };

    // Exibe uma razão com efeito de fade; não altera a lógica da página
    const exibirRazao = () => {
        if (!elementoRazao) return; // segurança: elemento pode não existir

        const razao = obterRazaoAleatoria();

        // Inicia o fade-out
        elementoRazao.style.opacity = '0';

        // Após a duração do fade, atualiza o texto e faz fade-in
        setTimeout(() => {
            elementoRazao.textContent = razao;
            elementoRazao.style.opacity = '1';
        }, FADE_DURATION_MS);
    };

    // Vincula o evento de clique, se o botão existir
    if (botaoNovaRazao) {
        botaoNovaRazao.addEventListener('click', exibirRazao);
    }

    // Exibe uma razão ao carregar a página
    exibirRazao();

});