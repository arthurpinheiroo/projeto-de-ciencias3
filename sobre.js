document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn-lm");
    const moreText = document.getElementById("more-text");

    btn.addEventListener("click", function () {
        if (moreText.style.display === "none") {
            moreText.style.display = "block"; // Exibe o texto adicional
            btn.textContent = "Ler Menos"; // Muda o texto do botão
        } else {
            moreText.style.display = "none"; // Oculta o texto adicional
            btn.textContent = "Ler Mais"; // Muda o texto do botão de volta
        }
    });
});

// Função para iniciar o Inicio quando o link de Inicio for clicado
document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="home"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "index.html"; 
    });
});

// Função para iniciar o Inicio quando o link de Inicio for clicado
document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="quiz"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "pagina-quiz.html"; 
    });
});
