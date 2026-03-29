const toggle = document.getElementById('theme-toggle'); // Boton de cambio de tema
const html = document.documentElement;

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn'); // Menú de barras
const overlay = document.getElementById('overlay');
const header = document.getElementById('header');
const spans = menuBtn.querySelectorAll('span');
const links = document.querySelectorAll(".link"); 
const sections = document.querySelectorAll("section"); // Secciones
const btnTop = document.getElementById("btnTop"); // Boton de retorno al top
const scrollIndicator = document.getElementById('scroll-indicator'); // Boton para bajar
let isOpen = false; // Estado del menú mobile


// Estado inicial del menú mobile
spans[0].style.transform = 'translateY(-6px)';
spans[2].style.transform = 'translateY(6px)';


// Cambiamos el tema y lo guardamos
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');

    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    toggle.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        toggle.textContent = isDark ? '☀️' : '🌙';
    }, 250);

    setTimeout(() => {
        toggle.style.transform = 'rotate(0deg)';
    }, 500);
});

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    toggle.textContent = '☀️';
}

function openMenu() {
    menu.classList.remove('-translate-x-full');

    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');

    // 🔥 quitar blur
    header.classList.remove('backdrop-blur');

    document.body.classList.add('overflow-hidden');

    spans[0].style.transform = 'rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg)';
}

function closeMenu() {
    menu.classList.add('-translate-x-full');

    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    header.classList.add('backdrop-blur');

    document.body.classList.remove('overflow-hidden');

    spans[0].style.transform = 'translateY(-6px)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'translateY(6px)';
}

menuBtn.addEventListener('click', () => {
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
    isOpen = !isOpen;
});

overlay.addEventListener('click', () => {
    closeMenu();
    isOpen = false;
});

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
        isOpen = false;
    });
});

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active-link"));
    link.classList.add("active-link");
    });
});


window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
        }
    });
});

// Botón del scroll

window.addEventListener('scroll', () => {
    // 🔝 Botón top
    if (window.scrollY > 200) {
        btnTop.classList.remove("opacity-0", "pointer-events-none");
        btnTop.classList.add("opacity-100");
    } else {
        btnTop.classList.add("opacity-0", "pointer-events-none");
        btnTop.classList.remove("opacity-100");
    }
    const maxScroll = 150;
    const opacity = 1 - window.scrollY / maxScroll;

    scrollIndicator.style.opacity = opacity;

    if (window.scrollY > maxScroll) {
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.pointerEvents = 'auto';
    }
});


btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 

// Boton para scroll para abajo

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});

scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});


const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        window.location.href = "/pages/formConfirm.html";
    } else {
        alert("Error al enviar ❌");
    }
});