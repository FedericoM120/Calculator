const container = document.querySelector('.main');

function add(a, b){
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let operand1;
let operand2;
let operator = null;

function operate(){
    let result = 0;
    if (operator === "+") {
        result = add(operand1, operand2);
    }
    document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
}

//const displayScreen = document.querySelector("displayed")[0];

function display7() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "7";
    if (operator == null) {
        operand1 = parseInt(display.innerHTML);
    } else {
        operand2 = parseInt(display.innerHTML);
    }
}
function display8() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "8";
    if (operator == null) {
        operand1 = parseInt(display.innerHTML);
    } else {
        operand2 = parseInt(display.innerHTML);
    }
}
function display9() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "9";
    operand1 = parseInt(display.innerHTML);
}

function cleared() {
    document.getElementsByClassName("displayed")[0].innerHTML = "";
    operand1 = null;
    operand2 = null;
    operator = null;
}

function addSign(){
    operator = "+";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}

function minusSign(){
    operator = "-";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}



