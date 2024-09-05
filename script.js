// Script para alternar abas
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('data-target');

        // Remove a classe 'active' de todas as seções
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' à seção correspondente
        document.getElementById(targetId).classList.add('active');
    });
});

// Gerar dicas ambientais
const tips = [
    "Reduza, reutilize e recicle.",
    "Composte resíduos orgânicos.",
    "Prefira transporte público ou caminhe.",
    "Economize energia e água.",
    "Apoie empresas sustentáveis.",
    "Plante árvores e cuide do seu jardim.",
    "Use produtos naturais e evite produtos químicos.",
    "Participe de iniciativas de limpeza local.",
    "Eduque outras pessoas sobre práticas de reutilização."
];

document.getElementById('generate-tip').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('tip').innerText = tips[randomIndex];
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link"); // Obtém o elemento de link "Sobre Nós"
  
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão de navegação do link
      window.location.href = "sobre-nos.html"; // Redireciona para outra página HTML
    });
  });
  
//

// Função para iniciar o Quiz quando o link de Quiz for clicado
document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="quiz"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "pagina-quiz.html"; 
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


// Função para iniciar o Quiz quando o link de Quiz for clicado
document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="contact"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "sobre-nos.html"; 
    });
});