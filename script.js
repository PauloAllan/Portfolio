// script.js
document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;

    function mostrarpalvra() {
        words[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % words.length;
        words[currentIndex].classList.add('active');
    }

    // Mostrar a primeira palavra inicialmente
    words[currentIndex].classList.add('active');

    // Alternar as palavras a cada 2 segundos
    setInterval(mostrarpalvra, 1000);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hover');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('hover');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.floating-icons .icon');

    icons.forEach(function (icon) {
        // Define a velocidade e a direção inicial da animação
        let speedX = Math.random() * 0 + 1; // Velocidade horizontal
        let speedY = Math.random() * 0 + 1; // Velocidade vertical
        let directionX = Math.random() < 0.5 ? -1 : 1; // Direção horizontal
        let directionY = Math.random() < 0.5 ? -1 : 1; // Direção vertical

        // Define a posição inicial aleatória dos ícones na tela
        icon.style.left = Math.random() * window.innerWidth + 'px';
        icon.style.top = Math.random() * window.innerHeight + 'px';

        // Função para animar os ícones
        function animateIcon() {
            const rect = icon.getBoundingClientRect();

            // Inverte a direção se o ícone atingir a borda da janela
            if (rect.right >= window.innerWidth || rect.left <= 0) {
                directionX *= -1;
            }
            if (rect.bottom >= window.innerHeight || rect.top <= 0) {
                directionY *= -1;
            }

            // Move o ícone na direção e velocidade corretas
            icon.style.left = rect.left + speedX * directionX + 'px';
            icon.style.top = rect.top + speedY * directionY + 'px';

            // Solicita a próxima animação
            requestAnimationFrame(animateIcon);
        }

        // Inicia a animação
        animateIcon();
    });
});

