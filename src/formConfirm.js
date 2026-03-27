document.addEventListener("DOMContentLoaded", () => {

    let segundos = 5;

    const countdown = document.getElementById("countdown");
    const cancelBtn = document.getElementById("cancel-redirect");
    const text = document.getElementById("redirect-text");

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

    if (cancelBtn) {
        cancelBtn.addEventListener("click", () => {
            clearInterval(intervalo);
            text.textContent = "Redirección cancelada.";
        });
    }

});