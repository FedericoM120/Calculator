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
function display1() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "1";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "1";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "1";
        operand2 = parseInt(display.innerHTML);
    }
}

function display2() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "2";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "2";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "2";
        operand2 = parseInt(display.innerHTML);
    }
}

function display3() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "3";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "3";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "3";
        operand2 = parseInt(display.innerHTML);
    }
}

function display4() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "4";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "4";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "4";
        operand2 = parseInt(display.innerHTML);
    }
}

function display5() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "5";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "5";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "5";
        operand2 = parseInt(display.innerHTML);
    }
}

function display6() {
    let display = document.getElementsByClassName("displayed")[0];
    if (operator == null) {
        display.innerHTML += "6";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "6";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "6";
        operand2 = parseInt(display.innerHTML);
    }
}

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
    if (operator == null) {
        display.innerHTML += "8";
        operand1 = parseInt(display.innerHTML);
    } else if (operatorCount < 2){
        display.innerHTML += "8";
        operand2 = parseInt(display.innerHTML);
    } else {
        display.innerHTML = "8";
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
    operatorCount = 0;
}

function addSign(){
    if (operator == null) {
        operator = "+";
        document.getElementsByClassName("displayed")[0].innerHTML = "";
        operatorCount++;
    }else if (operator != null){
        if (operator == "*"){
            operatorCount++;
            result = multiply(operand1, operand2);
            operand1 = result;
            result = add(operand1, operand2);
            document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
        } else {
            operatorCount++;
            result = add(operand1, operand2);
            operand1 = result;
            operand2 = 0;
            document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
        }
    }
}

function minusSign(){
    if (operator == null) {
        operator = "-";
        document.getElementsByClassName("displayed")[0].innerHTML = "";
        operatorCount++;
    } else if (operator != null){
        if (operator == "*"){
            operatorCount++;
            result = multiply(operand1, operand2);
            operand1 = result;
            result = add(operand1, operand2);
            document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
        } else if (operator == "+") {
            operatorCount++;
            result = add(operand1, operand2);
            operand1 = result;
            operator = "-";
            document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
        } else {
            operatorCount++;
            result = subtract(operand1, operand2);
            operand1 = result;
            operand2 = 0;
            document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
        }
    }
}

function divideSign(){
    operator = "%";
    document.getElementsByClassName("displayed")[0].innerHTML = "";
}

function multiplySign(){
    if (operator == null) {
        operator = "*";
        document.getElementsByClassName("displayed")[0].innerHTML = "";
        operatorCount++;
    }else if (operator != null){
        operatorCount++;
        result = multiply(operand1, operand2);
        operand1 = result;
        operand2 = 0;
        document.getElementsByClassName("displayed")[0].innerHTML = result.toString();
    }
}



