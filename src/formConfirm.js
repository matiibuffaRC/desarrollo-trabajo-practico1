document.addEventListener("DOMContentLoaded", () => {

    let segundos = 5;

    const countdown = document.getElementById("countdown");
    const cancelBtn = document.getElementById("cancel-redirect");

    // Si no existe el contador, no ejecuta nada
    if (!countdown) return;

    countdown.textContent = segundos;

    const intervalo = setInterval(() => {
        segundos--;
        countdown.textContent = segundos;

        if (segundos === 0) {
            clearInterval(intervalo);
            window.location.href = "index.html";
        }
    }, 1000);

    // Solo si existe el botón
    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            clearInterval(intervalo);
            countdown.textContent = "cancelada";
        });
    }

});