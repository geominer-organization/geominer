//  Navbar
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Si el href coincide con la página actual
        if (href === currentPage) {
            link.classList.add('active');
        } else if (href === 'index.html' && currentPage === '') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        // Listener para anclas (como #noticias, #footer)
        if (href.startsWith('#')) {
            link.addEventListener('click', function() {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        }
    });
    
    // Detectar scroll para activar "Noticias" cuando se ve la sección
    const noticiasSection = document.querySelector('#noticias');
    if (noticiasSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === '#noticias') {
                            navLinks.forEach(l => l.classList.remove('active'));
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(noticiasSection);
    }
});

// Hero Carousel.
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    // Ocultar todos los slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Quitar active de todos los dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Mostrar el slide actual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Activar el dot actual
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

if (dots.length > 0 && slides.length > 0) {
    // Click en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// ===================================
// FORM VALIDATION - CONTACT FORM
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Basic validation
        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[+]?[\d\s-()]+$/;
        if (!phoneRegex.test(telefono)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            return;
        }
        
        // If validation passes
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// Form Validation.
const registroForm = document.getElementById('registroForm');

if (registroForm) {
    registroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombres = document.getElementById('nombres').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const rut = document.getElementById('rut').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const segmento = document.getElementById('segmento').value;
        const empresa = document.getElementById('empresa').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        
        // Basic validation
        if (!nombres || !apellidos || !rut || !telefono || !segmento || !empresa || !correo || !contrasena) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        // Password validation (minimum 8 characters)
        if (contrasena.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        
        // If validation passes
        alert('¡Registro exitoso! Bienvenido a GeoMiner.');
        window.location.href = 'login.html';
    });
}

// ===================================
// FORM VALIDATION - LOGIN
// ===================================
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const correo = document.getElementById('correo').value.trim();
        const contrasena = document.getElementById('contrasena').value;
        
        // Basic validation
        if (!correo || !contrasena) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        // If validation passes
        alert('¡Bienvenido de vuelta!');
        // Here you would normally send the data to a server
        // For now, we'll just redirect to the main page
        window.location.href = 'index.html';
    });
    
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('contrasena');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle icon
            this.querySelector('svg').style.opacity = type === 'password' ? '1' : '0.5';
        });
    }
}

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// SEARCH BUTTON FUNCTIONALITY
// ===================================
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const searchQuery = prompt('¿Qué estás buscando?');
        
        if (searchQuery) {
            alert(`Buscando: ${searchQuery}\nEsta funcionalidad se implementará próximamente.`);
        }
    });
}

// ===================================
// ANIMATIONS ON SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .mission-card, .vision-card, .news-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
