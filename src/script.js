const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const header = document.getElementById('header');
const spans = menuBtn.querySelectorAll('span');
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section"); 


// Estado inicial hamburguesa
spans[0].style.transform = 'translateY(-6px)';
spans[2].style.transform = 'translateY(6px)';

// =======================
// 🌙 DARK MODE
// =======================
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    toggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
});

// =======================
// 🍔 MENU
// =======================
let isOpen = false;

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

    // 🔥 volver blur
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