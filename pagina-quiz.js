

document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="about"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "sobre-nos.html"; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="home"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "index.html"; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Corrigido para selecionar o botão com a classe "continue-popup"
    const continueBtn = document.querySelector('#continue-popup'); // Adicionado o ponto para indicar a classe

    // Verifica se o botão foi encontrado
    if (continueBtn) {
        continueBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Redireciona para outra página HTML com o quiz
            window.location.href = "quiz.html";
        });
    } else {
        console.error('Botão "continue-popup" não encontrado.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('quiz-btn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');

    // Função para abrir o popup
    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    // Função para fechar o popup
    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Fechar o popup clicando fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o popup e os botões
    const popup = document.getElementById("popup");
    const closePopupButton = document.querySelector(".close-popup");
    const continuePopupButton = document.getElementById("continue-popup");

    // Função para fechar o popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Adiciona eventos de clique aos botões
    closePopupButton.addEventListener("click", closePopup);
    continuePopupButton.addEventListener("click", function () {
        // Adicione a lógica para o botão "Sim" aqui, se necessário
        closePopup(); // Fecha o popup após clicar em "Sim"
    });

    // Função para abrir o popup (exemplo, pode ser chamada quando necessário)
    function openPopup() {
        popup.style.display = "block";
    }

    // Exemplo de como abrir o popup (pode ser chamado em outro lugar, como ao clicar em um botão)
    // openPopup();
});
