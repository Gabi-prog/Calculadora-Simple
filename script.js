// Obtener referencias a los elementos del DOM
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");
const resultadoSpan = document.getElementById("resultado");


// Funciones para realizar operaciones
function sumar() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    resultadoSpan.textContent = valor1 + valor2;
}

function restar() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    resultadoSpan.textContent = valor1 - valor2;
}

function multiplicar() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    resultadoSpan.textContent = valor1 * valor2;
}

function dividir() {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    if (valor2 !== 0) {
        resultadoSpan.textContent = valor1 / valor2;
    } else {
        resultadoSpan.textContent = "Error: división por cero!";
    }
}

function limpiarCampos() {
    valor1Input.value = "";
    valor2Input.value = "";
    resultadoSpan.textContent = "0";
}
// Agregar eventos a los botones
document.getElementById("suma").addEventListener("click", sumar);
document.getElementById("resta").addEventListener("click", restar);
document.getElementById("multiplicacion").addEventListener("click", multiplicar);
document.getElementById("division").addEventListener("click", dividir);
document.getElementById("limpiar").addEventListener("click", limpiarCampos);
