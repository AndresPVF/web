// Reset al cargar la página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onload = () => window.scrollTo(0, 0);

// Animaciones al entrar/salir de las secciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('fade-in-visible');
        } else {
            target.classList.remove('fade-in-visible'); // Reinicia la animación
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-left').forEach((el) => observer.observe(el));

// Desplazamiento suave de los botones
const scrollButtons = document.querySelectorAll('.scroll-btn');
scrollButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Calcula el offset ajustado para centrar la sección
        const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight; // Altura de la ventana
        const sectionHeight = targetSection.offsetHeight; // Altura de la sección
        const scrollOffset = (viewportHeight - sectionHeight) / 2; // Ajuste para centrar

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: offsetTop - scrollOffset,
            behavior: 'smooth',
        });
    });
});

const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTop.classList.remove('hidden');
    } else {
        toTop.classList.add('hidden');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Seleccionar elementos del DOM
const popup = document.getElementById('popup');
const popupClose = document.querySelector('.popup-close');
const portfolioButton = document.querySelector('.btn-secondary[href="https://tulink.com/portafolio"]');

// Mostrar la ventana emergente
portfolioButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que el enlace redirija de inmediato
    popup.classList.remove('hidden');
});

// Cerrar la ventana emergente
popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Cerrar la ventana al hacer clic fuera de ella
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.add('hidden');
    }
});
