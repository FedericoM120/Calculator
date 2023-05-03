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
let operatorCount = 0;

function operate(){
    let result = 0;
    if (operator === "+") {
        result = add(operand1, operand2);
    }
    if (operator === "-") {
        result = subtract(operand1, operand2);
    }
    if (operator === "%") {
        result = divide(operand1, operand2);
    }
    if (operator === "*") {
        result = multiply(operand1, operand2);
    }
    document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
}

//const displayScreen = document.querySelector("displayed")[0];

function display7() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "7";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "7";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "7";
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
    if (operator == null) {
        operand1 = parseInt(display.innerHTML);
    } else {
        operand2 = parseInt(display.innerHTML);
    }
}

function cleared() {
    document.getElementsByClassName("displayed")[0].innerHTML = "";
    operand1 = null;
    operand2 = null;
    operator = null;
}

function addSign(){
    if (operator == null) {
        operator = "+";
        document.getElementsByClassName("displayed")[0].innerHTML = "";
        operatorCount++;
    }else if (operator != null){
        operatorCount++;
        result = add(operand1, operand2);
        operand1 = result;
        operand2 = 0;
        document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
    }
}

function minusSign(){
    operator = "-";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}

function divideSign(){
    operator = "%";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}

function multiplySign(){
    operator = "*";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}



