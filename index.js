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

let operand1 = 0;
let operator = null;

function operate(operand1, operand2, operator){
    let result = 0;
    switch (operator){
        case "+":
            result = add(operand1, operand1);
    }
    document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
}

const displayScreen = document.querySelector("displayed")[0];


//if button7 is clicked, append strin 7 to display node
function display7() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "7";
    operand1 = parseInt(display.innerHTML);
}
function display8() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "8";
    operand1 = parseInt(display.innerHTML);
}
function display9() {
    let display = document.getElementsByClassName("displayed")[0];
    display.innerHTML += "9";
    operand1 = parseInt(display.innerHTML);
}

function cleared() {
    document.getElementsByClassName("displayed")[0].innerHTML = "";
    operand1 = null;
}

function addSign(){
    operator = "+";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}



