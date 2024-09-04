const caixaprincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector('.caixa-perguntas');
const caixaalternativas = document.querySelector('.caixa-alternativas');
const caixaresultados = document.querySelector('.texto-resultado');
const botaoReiniciar = document.getElementById('reiniciar');
const titulo = document.querySelector('h1'); 

const perguntas = [
    {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            "Ganha um laptop de alto desempenho totalmente grátis, mas… todos os softwares que você usar serão controlados remotamente por terceiros, limitando suas atividades online.",
            "Recebe um smartphone de última geração, mas… terá que renunciar a qualquer forma de privacidade, com todos os seus dados pessoais sendo monitorados e vendidos a empresas por cinco anos."
        ],
        resumos: [
            "Parabéns, você recebeu um laptop! Porém, seus softwares são controlados por terceiros, limitando suas atividades online.",
            "Você ganhou um smartphone de última geração! Mas, todos os seus dados pessoais serão monitorados e vendidos por cinco anos."
        ],
    },
    {
        enunciado: "No âmbito social:",
        alternativas: [
            "Consegue um emprego bem remunerado em uma empresa renomada, mas… terá que se mudar para um local onde não conhece ninguém e onde a língua e a cultura são completamente diferentes das suas.",
            "Ganha uma rede de contatos extensa e influente, mas… será obrigado a participar de eventos sociais e reuniões que consomem a maior parte do seu tempo pessoal."
        ],
        resumos: [
            "Você conseguiu um emprego renomado! Contudo, terá que se mudar para um local completamente desconhecido.",
            "Você expandiu sua rede de contatos! Entretanto, eventos sociais vão consumir a maior parte do seu tempo pessoal."
        ],
    },
    {    
        enunciado: "No âmbito ambiental:",
        alternativas: [
            "Recebe uma casa sustentável e ecológica, mas… terá que reduzir o consumo de energia e água em 50% por ano, e não poderá usar nenhum veículo motorizado por cinco anos.",
            "Ganha a oportunidade de viver em uma reserva natural protegida, mas… será responsável por monitorar e proteger a fauna local, sem direito a qualquer tipo de tecnologia moderna."
        ],
        resumos: [
            "Você recebeu uma casa sustentável! Porém, terá que reduzir o consumo de energia e água drasticamente, e não usar veículos motorizados por cinco anos.",
            "Você ganhou a oportunidade de viver em uma reserva natural! Entretanto, deverá proteger a fauna local sem usar tecnologia moderna."
        ],
    },
    {    
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            "Tem acesso gratuito à internet de alta velocidade em qualquer lugar, mas… todos os sites que você visita e tudo o que você faz online será divulgado publicamente.",
            "Recebe um robô doméstico que faz todas as suas tarefas, mas… o robô grava todas as suas conversas e as envia para um servidor central para análise."
        ],
        resumos: [
            "Você tem internet de alta velocidade gratuita em qualquer lugar! Mas, tudo o que você faz online será divulgado publicamente.",
            "Você ganhou um robô doméstico que faz todas as tarefas! No entanto, ele grava todas as suas conversas e as envia para análise."
        ],
    },
    {    
        enunciado: "No âmbito social:",
        alternativas: [
            "Torna-se uma figura pública com milhões de seguidores nas redes sociais, mas… terá que compartilhar cada detalhe da sua vida pessoal e nunca poderá desativar suas contas.",
            "Ganha a amizade de uma pessoa influente que pode te ajudar em sua carreira, mas… essa pessoa espera que você esteja disponível 24 horas por dia para ajudá-la em qualquer situação."
        ],
        resumos: [
            "Você se tornou uma figura pública com milhões de seguidores! Porém, terá que compartilhar cada detalhe da sua vida pessoal e nunca poderá desativar suas contas.",
            "Você ganhou a amizade de uma pessoa influente que pode te ajudar na carreira! No entanto, essa pessoa espera que você esteja disponível 24 horas por dia."
        ],
    },
    {    
        enunciado: "No âmbito ambiental:",
        alternativas: [
            "Ganha um carro elétrico de última geração, mas… terá que plantar e cuidar de 100 árvores por ano, em um local distante, durante cinco anos.",
            "Recebe um terreno para cultivar sua própria horta orgânica, mas… não poderá utilizar nenhum tipo de pesticida ou adubo artificial, e terá que fazer todo o trabalho manualmente, sem ajuda de máquinas."
        ],
        resumos: [
            "Você ganhou um carro elétrico de última geração! Mas, terá que plantar e cuidar de 100 árvores por ano durante cinco anos.",
            "Você recebeu um terreno para cultivar sua própria horta orgânica! Contudo, terá que fazer todo o trabalho manualmente, sem ajuda de máquinas."
        ],
    } 
];

let atual = 0;
let escolhas = []; 

function mostraPerguntas() {
    const perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;

    caixaalternativas.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.classList.add('alternativa-botao'); 
        botao.addEventListener('click', () => {
            escolhas.push(perguntaAtual.resumos[index]);
            proximaPergunta();
        });
        caixaalternativas.appendChild(botao);
    });
}

function proximaPergunta() {
    atual++;
    if (atual < perguntas.length) {
        mostraPerguntas();
        caixaresultados.innerHTML = ''; 
        botaoReiniciar.style.display = 'none'; 
    } else {
        caixaperguntas.innerHTML = ''; 
        caixaalternativas.innerHTML = '';
        mostraResultados(); 
        botaoReiniciar.style.display = 'block'; 
    }
}

function mostraResultados() {
    titulo.textContent = "Suas escolhas foram:"; 
  
    escolhas.forEach((escolha) => {
        caixaresultados.innerHTML += `<li>${escolha}</li>`;
    });

    caixaresultados.innerHTML += "</ul>";
}

botaoReiniciar.addEventListener('click', () => {
    atual = 0;
    escolhas = []; 
    titulo.textContent = "VOCÊ DECIDE:"; 
    mostraPerguntas();
    caixaresultados.innerHTML = ''; 
    botaoReiniciar.style.display = 'none'; 
});

mostraPerguntas();

