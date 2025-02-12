document.addEventListener("DOMContentLoaded", function () {
    alert("¡Bienvenido a mi página Acerca de Mí! 🎉");
});

// Evento 1: Cambia el fondo al pasar el mouse (mouseover)
document.querySelectorAll(".card-item").forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#ffeb3b";
    });

    // Evento 2: Restaura el fondo al salir el mouse (mouseout)
    item.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white";
    });

    // Evento 3: Muestra una alerta al hacer clic (click)
    item.addEventListener("click", function () {
        alert("Hiciste clic en: " + this.querySelector("h3").textContent);
    });

    // Evento 4: Cambia el color al hacer doble clic (dblclick)
    item.addEventListener("dblclick", function () {
        this.style.backgroundColor = "#a5d6a7";
    });
});

// Evento 5: Detecta cuando el usuario presiona una tecla (keydown)
document.addEventListener("keydown", function (event) {
    alert("Presionaste la tecla: " + event.key);
});


