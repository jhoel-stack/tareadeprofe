// Seleccionamos el botón por su ID
const boton = document.getElementById("botonCafe");

// Seleccionamos el párrafo por su clase
const parrafo = document.querySelector(".respuesta");

// Cuando se hace clic en el botón, se cambia el contenido del párrafo
boton.addEventListener("click", function() {
    parrafo.textContent = "El mejor cafe que encontraras al mejor precio y con la mejor calidad!!";
});
