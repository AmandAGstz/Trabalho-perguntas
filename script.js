const caixaprincipal = document.querySelector('.caixa-principal');
const caixaperguntas = document.querySelector('.caixa-perguntas');
const caixaalternativas = document.querySelector('.caixa-alternativas');
const caixaresultados = document.querySelector('.texto-resultado');
const botaoProxima = document.getElementById('proxima-pergunta');

const perguntas = [
    {
        enunciado: "Qual das seguintes práticas contribui para a preservação dos recursos hídricos?",
        alternativas: ["Uso consciente da água, evitando desperdícios.", "Descarte de produtos químicos diretamente nos rios."],
        correta: 0 
    },
    {
        enunciado: "O que é considerado uma prática sustentável para reduzir a emissão de gases de efeito estufa?",
        alternativas: ["Adoção de energias renováveis, como solar e eólica.", "Queima de combustíveis fósseis para geração de energia."],
        correta: 0
    },
    {    
        enunciado: "Qual é uma das principais vantagens da computação em nuvem para empresas?",
        alternativas: ["A necessidade de manter servidores físicos em cada escritório.","Acesso remoto aos dados e aplicações, permitindo maior flexibilidade e escalabilidade."],
        correta: 1
    },
    {    
        enunciado: "Qual é o objetivo da Inteligência Artificial no setor de saúde?",
        alternativas: ["Auxiliar no diagnóstico e tratamento de doenças através da análise de grandes volumes de dados médicos.", "Substituir completamente os médicos e profissionais de saúde no atendimento aos pacientes."],
        correta: 0
    },
    {    
        enunciado: "Qual é um exemplo de ação que promove a inclusão social?",
        alternativas: ["Segregação de pessoas em função da sua origem étnica ou classe social."," Implementação de programas de educação para todos, independentemente da condição socioeconômica."],
        correta: 1 
    },
    {    
        enunciado: "O que caracteriza uma sociedade democrática?",
        alternativas: ["A concentração de poder em um único líder, sem participação popular nas decisões.","A participação ativa dos cidadãos nas decisões políticas através do voto e de outras formas de engajamento cívico."],
        correta: 1 
    } 
];

let atual = 0;
let perguntaAtual;

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;

    // Limpa alternativas anteriores
    caixaalternativas.innerHTML = '';

    // Adiciona alternativas como botões
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaalternativas.appendChild(botao);
    });
}

function verificaResposta(indiceEscolhido) {
    caixaresultados.innerHTML = ''; // Limpa o conteúdo anterior

    const respostaDiv = document.createElement('div');

    if (indiceEscolhido === perguntaAtual.correta) {
        respostaDiv.textContent = "Correto!";
        respostaDiv.classList.add('resposta-correta');
    } else {
        respostaDiv.textContent = "Incorreto!";
        respostaDiv.classList.add('resposta-incorreta');
    }

    caixaresultados.appendChild(respostaDiv);

    // Mostra o botão "Próxima Pergunta"
    botaoProxima.style.display = 'block';
}

// Adiciona o evento de clique para o menu
const menuLinks = document.querySelectorAll('.menu-perguntas a');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        atual = parseInt(link.getAttribute('data-pergunta')); // Pega o número da pergunta a partir do atributo data
        mostraPerguntas(); // Mostra a pergunta selecionada
        caixaresultados.innerHTML = ''; // Limpa o resultado anterior
        botaoProxima.style.display = 'none'; // Esconde o botão ao mudar de pergunta
    });
});

// Lógica para passar para a próxima pergunta
botaoProxima.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
        mostraPerguntas();
        caixaresultados.innerHTML = ''; // Limpa o resultado anterior
        botaoProxima.style.display = 'none'; // Esconde o botão ao mudar de pergunta
    } else {
        caixaresultados.innerHTML = "Você completou todas as perguntas!";
        botaoProxima.style.display = 'none'; // Esconde o botão ao final
    }
});

// Mostra a primeira pergunta ao carregar a página
mostraPerguntas();
