// ===================================
// 1. DICCIONARIO DE TRADUCCIONES
// ===================================
const translations = {
    es: {
        // Navbar
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_news: "Noticias",
        nav_contact: "Contacto",
        nav_login: "Iniciar Sesión",

        // Hero (Index)
        hero_title_1: "Inteligencia geológica para una minería responsable",
        hero_desc_1: "Optimice sus procesos de exploración con herramientas que permitan la gestión eficiente de mapas geológicos, fomentando la sostenibilidad.",
        hero_cta: "Contáctanos",
        hero_title_2: "Conoce GeoMiner en Acción",
        hero_desc_2: "Descubre cómo nuestra plataforma transforma datos geológicos en decisiones estratégicas clave.",
        hero_title_3: "Tecnología geológica para una minería sostenible",
        hero_desc_3: "Centralice, interprete y gestione datos para reducir costos y minimizar impactos ambientales.",

        // Footer
        footer_rights: "Copyright © UPC-PE 2025 | Diseñado por equipo GEO-PE",

        // Nosotros (About)
        about_title: "¿Quiénes somos?",
        about_desc: "Somos una plataforma de exploración geológica inteligente que utiliza tecnologías de vanguardia para apoyar a empresas mineras en la toma de decisiones informadas. Nuestros mapas interactivos, los cuales integran datos geológicos, geofísicos, geoquímicos, permiten la identificación de áreas de interés de manera eficiente y responsable con el medio ambiente.",
        mission_title: "Misión",
        mission_desc: "Potenciar las actividades de exploración y explotación en la industria minera mediante el desarrollo de soluciones tecnológicas innovadoras que optimicen la gestión de la información geoespacial y ambiental, permitiendo decisiones estratégicas con mayor agilidad y precisión.",
        vision_title: "Visión",
        vision_desc: "Convertirnos en una empresa líder tecnológica que contribuye a la exploración minera responsable y eficiente, facilitando decisiones informadas y sostenibles para los proyectos mineros a nivel global, así como optimizar la industria minera mediante soluciones innovadoras.",

        // Servicios
        serv_title: "Nuestros Servicios",
        serv_header_desc: "Ofrecemos herramientas de última generación diseñadas para optimizar la exploración minera, garantizar la sostenibilidad y mejorar la comunicación operativa.",
        serv_map_mine: "Mapa Minero",
        serv_map_mine_desc: "Cruce datos geológicos y geofísicos para identificar con precisión puntos de interés y optimizar sus campañas de perforación.",
        serv_map_env: "Mapa Ambiental",
        serv_map_env_desc: "Monitoree el impacto de sus operaciones. Gestione indicadores clave como huella de carbono, consumo de agua y calidad del aire.",
        serv_msg: "Mensajería",
        serv_msg_desc: "Plataforma de comunicación segura y en tiempo real para equipos en campo y oficina. Comparta reportes de manera eficiente.",

        // Noticias
        news_title: "Noticias",
        news_main_title: "Perú experimentó 37% de crecimiento en producción de cobre: desempeño en Q3 2025",
        news_btn_geo: "Geología",
        news_side_1: "Implementación nueva de módulos emergente de faralles: Logrando un exploración de minerales más eficiente",
        news_btn_tech: "Tecnología",
        news_date_1: "Hace 2 días",
        news_side_2: "Avanzan nuevas certificaciones aprobadas ISO 14001 para colaboración integral de servicios",
        news_btn_sust: "Sostenibilidad",
        news_date_2: "Hace 10 días",

        // Contacto
        contact_title: "Contáctanos",
        contact_form_title: "Escríbenos",
        lbl_name: "Nombre",
        lbl_email: "Correo Electrónico",
        lbl_phone: "Teléfono",
        lbl_msg: "Mensaje",
        btn_send: "Enviar",

        // Auth (Login/Registro)
        auth_welcome_back: "Que bueno verte de nuevo",
        auth_email: "Correo Electrónico",
        auth_pass: "Contraseña",
        auth_remember: "Recuérdame",
        auth_enter: "Ingresar",
        auth_no_account: "¿No tienes una cuenta?",
        auth_create: "Crea tu cuenta",
        auth_back: "Volver",
        auth_register_title: "Simplificando procesos mineros, mejorando tecnologias",
        auth_names: "Nombres",
        auth_lastnames: "Apellidos",
        auth_role: "Rol",
        auth_phone: "Teléfono",
        auth_segment: "Segmento",
        auth_company: "Empresa",
        auth_inst_email: "Correo Institucional",
        auth_register_btn: "Registrarse",
        auth_have_account: "¿Ya tienes una cuenta?",
        
        // Opciones de Select (Segmento)
        opt_segment_def: "Seleccione un segmento",
        opt_segment_mine: "Empresa Minera",
        opt_segment_consult: "Consultora",
        opt_segment_indep: "Independiente",

        // Placeholders
        ph_email: "Ingresa tu correo electrónico",
        ph_pass: "Ingresa tu contraseña",
        ph_names: "Ingrese sus nombres",
        ph_lastnames: "Ingrese sus apellidos",
        ph_role: "Ingrese su rol",
        ph_phone: "Ingrese su teléfono",
        ph_company: "Ingrese el nombre de su empresa",
        ph_inst_email: "Ingrese su correo institucional"
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_news: "News",
        nav_contact: "Contact",
        nav_login: "Login",

        // Hero (Index)
        hero_title_1: "Geological intelligence for responsible mining",
        hero_desc_1: "Optimize your exploration processes with tools that allow efficient management of geological maps, fostering sustainability.",
        hero_cta: "Contact Us",
        hero_title_2: "See GeoMiner in Action",
        hero_desc_2: "Discover how our platform transforms geological data into key strategic decisions.",
        hero_title_3: "Geological technology for sustainable mining",
        hero_desc_3: "Centralize, interpret, and manage data to reduce costs and minimize environmental impacts.",

        // Footer
        footer_rights: "Copyright © UPC-PE 2025 | Designed by GEO-PE team",

        // Nosotros (About)
        about_title: "Who are we?",
        about_desc: "We are an intelligent geological exploration platform that uses cutting-edge technologies to support mining companies in making informed decisions. Our interactive maps, which integrate geological, geophysical, and geochemical data, allow the identification of areas of interest efficiently and responsibly with the environment.",
        mission_title: "Mission",
        mission_desc: "To enhance exploration and exploitation activities in the mining industry by developing innovative technological solutions that optimize the management of geospatial and environmental information, enabling strategic decisions with greater agility and precision.",
        vision_title: "Vision",
        vision_desc: "To become a leading technology company contributing to responsible and efficient mining exploration, facilitating informed and sustainable decisions for mining projects globally, as well as optimizing the mining industry through innovative solutions.",

        // Servicios
        serv_title: "Our Services",
        serv_header_desc: "We offer state-of-the-art tools designed to optimize mining exploration, ensure sustainability, and improve operational communication.",
        serv_map_mine: "Mining Map",
        serv_map_mine_desc: "Cross-reference geological and geophysical data to accurately identify points of interest and optimize drilling campaigns.",
        serv_map_env: "Environmental Map",
        serv_map_env_desc: "Monitor the impact of your operations. Manage key indicators such as carbon footprint, water consumption, and air quality.",
        serv_msg: "Messaging",
        serv_msg_desc: "Secure, real-time communication platform for field and office teams. Share reports efficiently.",

        // Noticias
        news_title: "News",
        news_main_title: "Peru experienced 37% growth in copper production: Q3 2025 performance",
        news_btn_geo: "Geology",
        news_side_1: "New implementation of emergent wall modules: Achieving more efficient mineral exploration",
        news_btn_tech: "Technology",
        news_date_1: "2 days ago",
        news_side_2: "New approved ISO 14001 certifications advance for comprehensive service collaboration",
        news_btn_sust: "Sustainability",
        news_date_2: "10 days ago",

        // Contacto
        contact_title: "Contact Us",
        contact_form_title: "Write to us",
        lbl_name: "Name",
        lbl_email: "Email",
        lbl_phone: "Phone",
        lbl_msg: "Message",
        btn_send: "Send",

        // Auth (Login/Registro)
        auth_welcome_back: "Great to see you again",
        auth_email: "Email Address",
        auth_pass: "Password",
        auth_remember: "Remember me",
        auth_enter: "Login",
        auth_no_account: "Don't have an account?",
        auth_create: "Create account",
        auth_back: "Go Back",
        auth_register_title: "Simplifying mining processes, improving technologies",
        auth_names: "First Name",
        auth_lastnames: "Last Name",
        auth_role: "Role",
        auth_phone: "Phone",
        auth_segment: "Segment",
        auth_company: "Company",
        auth_inst_email: "Institutional Email",
        auth_register_btn: "Sign Up",
        auth_have_account: "Already have an account?",

        // Opciones de Select (Segmento)
        opt_segment_def: "Select a segment",
        opt_segment_mine: "Mining Company",
        opt_segment_consult: "Consultancy",
        opt_segment_indep: "Independent",

        // Placeholders
        ph_email: "Enter your email",
        ph_pass: "Enter your password",
        ph_names: "Enter your first name",
        ph_lastnames: "Enter your last name",
        ph_role: "Enter your role",
        ph_phone: "Enter your phone number",
        ph_company: "Enter company name",
        ph_inst_email: "Enter your institutional email"
    }
};

// ===================================
// 2. FUNCIÓN DE ACTUALIZACIÓN DE IDIOMA
// ===================================
function updateLanguage(lang) {
    // 1. Guardar preferencia en localStorage
    localStorage.setItem('preferredLang', lang);

    // 2. Buscar todos los elementos con el atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Verificar si existe traducción para esa clave
        if (translations[lang] && translations[lang][key]) {
            
            // Caso especial: Inputs y Textareas (cambiar placeholder)
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } 
            // Caso especial: Opciones de Select (cambiar texto)
            else if (el.tagName === 'OPTION') {
                el.text = translations[lang][key];
            }
            // Caso normal: Elementos de texto (h1, p, span, a, button)
            else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // NOTA: Ya no actualizamos el texto del botón porque ahora es un icono
}

// ===================================
// 3. EVENT LISTENERS PRINCIPALES
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // --- CARGAR NAVBAR E INICIALIZAR IDIOMA ---
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
            }

            // A. Funcionalidad Hamburger Menu
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');
            
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
                
                const navLinks = document.querySelectorAll('.nav-menu a');
                navLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    });
                });
                
                document.addEventListener('click', function(event) {
                    const isClickInsideNav = navMenu.contains(event.target);
                    const isClickOnHamburger = hamburger.contains(event.target);
                    
                    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                });
            }
            
            // B. Active Link Highlighting
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const allLinks = document.querySelectorAll('.nav-menu a');
            
            allLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // C. LÓGICA DE IDIOMA (GLOBO ICON)
            // Verificar idioma guardado o usar español por defecto
            let currentLang = localStorage.getItem('preferredLang') || 'es';
            
            // Aplicar traducción inicial
            updateLanguage(currentLang);

            // Configurar el botón de cambio
            const langBtn = document.getElementById('langToggle');
            if (langBtn) {
                langBtn.addEventListener('click', () => {
                    // Alternar entre 'es' y 'en'
                    currentLang = currentLang === 'es' ? 'en' : 'es';
                    updateLanguage(currentLang);
                });
            }

        })
        .catch(error => {
            console.error('Error cargando el navbar:', error);
        });

    // --- APLICAR IDIOMA AL RESTO DE LA PÁGINA (FUERA DEL NAVBAR) ---
    let initialLang = localStorage.getItem('preferredLang') || 'es';
    updateLanguage(initialLang);

    // --- DETECTAR SCROLL PARA SECCIÓN NOTICIAS ---
    const noticiasSection = document.querySelector('#noticias');
    if (noticiasSection && (window.location.pathname.includes('noticias.html') || window.location.pathname.includes('index.html'))) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const navLinks = document.querySelectorAll('.nav-menu a');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === 'noticias.html') {
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

// ===================================
// HERO CAROUSEL
// ===================================
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

if (dots.length > 0 && slides.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

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
        
        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        const phoneRegex = /^[+]?[\d\s-()]+$/;
        if (!phoneRegex.test(telefono)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            return;
        }
        
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// ===================================
// FORM VALIDATION - REGISTRO
// ===================================
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
        
        if (!nombres || !apellidos || !rut || !telefono || !segmento || !empresa || !correo || !contrasena) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        if (contrasena.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }
        
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
        
        if (!correo || !contrasena) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        alert('¡Bienvenido de vuelta!');
        window.location.href = 'index.html';
    });
    
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('contrasena');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
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

document.querySelectorAll('.about-card, .mission-card, .vision-card, .news-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});