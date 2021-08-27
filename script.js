// Ejercicio 1

// Id para el boton submit
let submitButton = document.getElementById("botton");

// Función para validar información ingresada utilizando preventDefault para mantener los campos
function validation() {
    event.preventDefault()
    let inputName = document.getElementById("nombre").value;
    let inputAbout = document.getElementById("asunto").value;
    let inputMessage = document.getElementById("mensaje").value;
    
    // Caracteres permitidos
    let allowedCharacters = /[a-zA-Z]/;

    // Metodo test
    let testOne = allowedCharacters.test(inputName);
    let testTwo = allowedCharacters.test(inputAbout);
    let testThree = allowedCharacters.test(inputMessage);
    
    if ((testOne, testTwo, testThree === true)) {
        let result = document.getElementsByClassName("resultado");
        result[0].innerHTML = "Mensaje enviado con éxito";
        let nameError = document.getElementsByClassName("errorNombre");
        nameError[0].innerHTML = "";
        let aboutError = document.getElementsByClassName("errorAsunto");
        aboutError[0].innerHTML = "";
        let messageError = document.getElementsByClassName("errorMensaje");
        messageError[0].innerHTML = "";
    }
    
    if (testOne === false) {
        let nameError = document.getElementsByClassName("errorNombre");
        nameError[0].innerHTML = "El nombre es requerido";
    }
    if (testTwo === false) {
        let aboutError = document.getElementsByClassName("errorAsunto");
        aboutError[0].innerHTML = "El asunto es requerido";
    }
    if (testThree === false) {
        let messageError = document.getElementsByClassName("errorMensaje");
        messageError[0].innerHTML = "El mensaje es requerido";
    }

}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Ejercicio 2

// Función que toma la id asociada a cada elemento que tenga un background color y lo aplica al div con id "caja"
function changeColor(id) {
    let colorBtn = document.getElementById(id);

    let boxColor = window.getComputedStyle(colorBtn).getPropertyValue("background-color");
    document.getElementById("caja").setAttribute("style", `background-color:${boxColor}; border:1px solid black;width: 100%;height: 100%`);
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


// Ejercicio 3

//  Función que permite sumatoria

function add() {
    let valueOne = +parseInt(document.getElementById("valor1").value);
    let valueTwo = +parseInt(document.getElementById("valor2").value);

    let plus = document.getElementsByClassName("resultado");
    plus[0].innerHTML = valueOne + valueTwo;
}


// Función que permite resta 

function subtract() {
    let valueOne = +parseInt(document.getElementById("valor1").value);
    let valueTwo = +parseInt(document.getElementById("valor2").value);

    if (valueOne > valueTwo) {
        let minus = document.getElementsByClassName("resultado");
        minus[0].innerHTML = valueOne - valueTwo;
    } else {
        let  minus = document.getElementsByClassName("resultado");
        minus[0].innerHTML = 0;
    }

}