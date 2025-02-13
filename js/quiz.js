// Array de objetos que contém as perguntas, opções de resposta e a resposta correta (index).
const questions = [
    {
        question: "Qual o campeão com mais títulos da UEFA Champions League?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Sergio Ramos"],
        answer: 0 // O índice 0 corresponde a "Cristiano Ronaldo"
    },
    {
        question: "Qual time venceu a UEFA Champions League pela primeira vez em 2021?",
        options: ["Manchester City", "Paris Saint-Germain", "Chelsea", "Real Madrid"],
        answer: 2 // O índice 2 corresponde a "Chelsea"
    },
    {
        question: "Qual treinador tem mais títulos de UEFA Champions League?",
        options: ["Pep Guardiola", "Zinedine Zidane", "Carlo Ancelotti", "Sir Alex Ferguson"],
        answer: 2 // O índice 2 corresponde a "Carlo Ancelotti"
    },
    {
        question: "Qual jogador marcou o gol mais rápido em uma final de UEFA Champions League?",
        options: ["Cristiano Ronaldo", "Gareth Bale", "Paolo Maldini", "Mario Mandzukic"],
        answer: 2 // O índice 2 corresponde a "Paolo Maldini"
    },
    {
        question: "Qual equipe é conhecida como os 'Galácticos'?",
        options: ["Barcelona", "Real Madrid", "Bayern de Munique", "Manchester United"],
        answer: 1 // O índice 1 corresponde a "Real Madrid"
    }
];

// Variável que mantém o índice da pergunta atual.
let currentQuestionIndex = 0;
// Variável que mantém a pontuação do usuário.
let score = 0;

// Função que carrega a pergunta atual e suas opções.
function loadQuestion() {
    // Obtém a pergunta atual com base no índice currentQuestionIndex.
    const currentQuestion = questions[currentQuestionIndex];
    // Define o texto da pergunta no elemento HTML com id 'question'.
    document.getElementById('question').innerText = currentQuestion.question;
    // Define as opções de resposta nos elementos HTML correspondentes.
    currentQuestion.options.forEach((option, index) => {
        document.getElementById(`option${index}`).innerText = option;
    });
}

// Função que avança para a próxima pergunta.
function nextQuestion() {
    // Obtém a opção selecionada pelo usuário.
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        // Converte o valor da opção selecionada para número inteiro.
        const answer = parseInt(selectedOption.value);
        // Verifica se a resposta está correta e atualiza a pontuação.
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        // Avança para a próxima pergunta.
        currentQuestionIndex++;
        // Verifica se ainda há perguntas restantes.
        if (currentQuestionIndex < questions.length) {
            // Carrega a próxima pergunta.
            loadQuestion();
        } else {
            // Exibe a pontuação final.
            showScore();
        }
    } else {
        // Alerta o usuário para selecionar uma opção.
        alert("Por favor, selecione uma opção.");
    }
}

// Função que exibe a pontuação final.
function showScore() {
    // Esconde o contêiner de perguntas.
    document.getElementById('question-container').style.display = 'none';
    // Mostra o contêiner de pontuação.
    document.getElementById('score-container').style.display = 'block';
    // Define o texto da pontuação final.
    document.getElementById('score').innerText = score;
}

// Carrega a primeira pergunta ao iniciar o quiz.
loadQuestion();