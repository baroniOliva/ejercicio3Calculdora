let primerValor;
let segundoValor;
let operacion;

const calcular = () => {
    let resultado = document.getElementById("igual");
    let borrar = document.getElementById("borrar");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let division = document.getElementById("divi");
    let multiplicacion = document.getElementById("multi");
    let pantalla = document.getElementById("pantalla");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");


    uno.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "1";

    }
    dos.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "2";

    }
    tres.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "3";

    }
    cuatro.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "4";

    }
    cinco.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "5";

    }
    seis.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "6";

    }
    siete.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "7";

    }
    ocho.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "8";

    }
    nueve.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "9";

    }
    cero.onclick = function (e) {
        pantalla.textContent = pantalla.textContent + "0";

    }

    suma.onclick = function (e) {
        primerValor = pantalla.textContent;
        operacion = "+"
        borrarPantalla();

    }

    resta.onclick = function (e) {
        primerValor = pantalla.textContent;
        operacion = "-"
        borrarPantalla();

    }

    division.onclick = function (e) {
        primerValor = pantalla.textContent;
        operacion = "/"
        borrarPantalla();

    }

    multiplicacion.onclick = function (e) {
        primerValor = pantalla.textContent;
        operacion = "*"
        borrarPantalla();

    }


    resultado.onclick = function (e) {
        segundoValor = pantalla.textContent;
        resolver();

    }

    borrar.onclick = function (e) {
        console.log("borrando los datos")
        acFunction();

    }

}

const borrarPantalla = () => {
    console.log("cargando operacion");
    pantalla.textContent = "";
}

const acFunction = () => {
    primerValor = 0;
    segundoValor = 0;
    operacion = "";
    borrarPantalla();

}

function resolver() {
    let operando = 0;
    switch (operacion) {
        case "+":
            operando = parseInt(primerValor) + parseInt(segundoValor);
            break;
        case "-":
            operando = parseInt(primerValor) - parseInt(segundoValor);
            break;
        case "*":
            operando = parseInt(primerValor) * parseInt(segundoValor);
            break;
        case "/":
            operando = parseInt(primerValor) / parseInt(segundoValor);
            break;
    }
    borrarPantalla();
    pantalla.textContent = operando;
}