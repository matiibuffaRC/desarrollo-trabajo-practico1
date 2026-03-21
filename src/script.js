const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const spans = menuBtn.querySelectorAll('span');

// Icono hamburguesa inicial
spans[0].style.transform = 'translateY(-6px)';
spans[2].style.transform = 'translateY(6px)';

// DARK MODE
toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    toggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
});

// MENU
let isOpen = false;

function openMenu() {
    menu.classList.remove('-translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');

    spans[0].style.transform = 'rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg)';
}

function closeMenu() {
    menu.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');

    spans[0].style.transform = 'translateY(-6px)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'translateY(6px)';
}

menuBtn.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
    isOpen = !isOpen;
});

overlay.addEventListener('click', () => {
    closeMenu();
    isOpen = false;
});

// Cerrar al hacer click en link (mobile)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
        isOpen = false;
    });
});