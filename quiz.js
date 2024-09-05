const quizData = [
    {
        question: "O que é compostagem e como ela ajuda o meio ambiente?",
        a: "Um método de reciclagem de resíduos eletrônicos",
        b: "Um processo de decomposição de resíduos orgânicos que se transforma em adubo natural",
        c: "Uma técnica de cultivo de plantas geneticamente modificadas",
        d: "Um tipo de plástico biodegradável",
        correct: "B"
    },
    {
        question: "Qual das seguintes ações é a mais eficiente para reduzir o desperdício de água em casa?",
        a: "Lavar o carro todos os dias",
        b: "Usar a máquina de lavar roupas com carga completa e apenas 1 vez na semana",
        c: "Manter a torneira aberta enquanto escova os dentes",
        d: "Deixar o chuveiro ligado enquanto se ensaboa",
        correct: "B"
    },
    {
        question: "Qual é a melhor forma de reduzir a poluição plástica nos oceanos?",
        a: "Jogar plásticos biodegradáveis no mar",
        b: "Reduzir o uso de plásticos descartáveis e reciclar mais",
        c: "Comprar mais produtos de plástico reciclável",
        d: "Jogar plásticos em aterros sanitários",
        correct: "B"
    },
    {
        question: "Qual é a importância de plantar árvores para o meio ambiente?",
        a: "Elas bloqueiam o vento, tornando as áreas mais calmas",
        b: "Árvores ajudam a absorver dióxido de carbono e produzem oxigênio",
        c: "Elas servem apenas como fonte de madeira e papel",
        d: "Elas ajudam na decoração urbana",
        correct: "B"
    },
    {
        question: "Qual das seguintes práticas é considerada uma agricultura sustentável?",
        a: "Uso de pesticidas químicos em larga escala",
        b: "Agricultura de monocultura",
        c: "Agricultura orgânica e rotatividade de culturas",
        d: "Agricultura de desmatamento",
        correct: "C"
    },
    {
        question: "Como o uso de transporte público pode ajudar o meio ambiente?",
        a: "Reduzindo a quantidade de carros nas ruas e diminuindo a poluição do ar",
        b: "Aumentando o tráfego e o tempo de viagem",
        c: "Aumentando a demanda por combustíveis fósseis",
        d: "Reduzindo a quantidade de bicicletas nas ruas",
        correct: "A"
    },
    {
        question: "O que significa “reduzir, reutilizar e reciclar”?",
        a: "Usar mais recursos naturais",
        b: "Reduzir o uso de recursos, reutilizar materiais e reciclar resíduos",
        c: "Comprar mais produtos plásticos",
        d: "Jogar todos os resíduos no lixo comum",
        correct: "B"
    },
    {
        question: "Por que as queimadas florestais são prejudiciais ao meio ambiente?",
        a: "Porque limpam o solo para a construção",
        b: "Porque destroem habitats, liberam CO2 e afetam a qualidade do ar",
        c: "Porque deixam o solo mais fértil",
        d: "Porque ajudam na geração de energia elétrica",
        correct: "B"
    },
    {
        question: "Qual é a melhor maneira de apoiar a biodiversidade local em áreas urbanas?",
        a: "Plantar apenas plantas exóticas",
        b: "Cultivar plantas nativas e criar habitats para polinizadores",
        c: "Usar pesticidas para controlar todos os insetos",
        d: "Remover todas as árvores da área urbana",
        correct: "B"
    },
    {
        question: "Como as energias renováveis podem ajudar a combater a mudança climática?",
        a: "Usando combustíveis fósseis para gerar energia",
        b: "Substituindo combustíveis fósseis por fontes limpas como solar e eólica",
        c: "Construindo mais usinas nucleares",
        d: "Aumentando o consumo de eletricidade em horários de pico",
        correct: "B"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('A');
const b_text = document.getElementById('B');
const c_text = document.getElementById('C');
const d_text = document.getElementById('D');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const scoreDisplay = document.getElementById('scoreDisplay');
const restartBtn = document.getElementById('restart');
const exitBtn = document.getElementById('exit-quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id.replace('answer', '');
        }
    });
    return answer;
}

function updateScore() {
    scoreDisplay.textContent = score; // Exibe a pontuação
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score += 1; // Aumenta a pontuação por resposta correta
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hide');
            resultEl.classList.remove('hide');
            scoreEl.innerText = `Sua pontuação: ${score}`;
            totalEl.innerText = `Total de perguntas: ${quizData.length}`;
        }
        updateScore(); // Atualiza a pontuação após cada resposta
    }
});

restartBtn.addEventListener('click', () => {
    score = 0;
    currentQuiz = 0;
    quiz.classList.remove('hide');
    resultEl.classList.add('hide');
    loadQuiz();
    updateScore(); // Reseta a pontuação ao reiniciar o quiz
});

exitBtn.addEventListener('click', () => {
    // Redireciona para a página inicial do quiz
    window.location.href = 'pagina-quiz.html';
});
