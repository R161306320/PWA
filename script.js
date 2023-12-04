document.addEventListener('DOMContentLoaded', function() {
    // Navegación Suave
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Animaciones al Desplazarse
    const sections = document.querySelectorAll('section');

    const addAnimation = (element, animation) => {
        element.classList.add('animated', animation);
    };

    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScrollAnimation = () => {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                addAnimation(section, 'fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    // Mostrar/Esconder Menú en Dispositivos Móviles
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Formulario de Contacto
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Agrega aquí lógica para enviar el formulario, por ejemplo, mediante AJAX
        console.log('Formulario enviado');
    });
});
