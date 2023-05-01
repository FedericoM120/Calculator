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
let operator;

function operate(operand1, operand2, operator){
    return add;
}

const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");


const displayScreen = document.querySelector("displayed")[0];
console.log(displayScreen);

//if button7 is clicked, append strin 7 to display node
function display7() {
    document.getElementsByClassName("displayed")[0].innerHTML = "7";
}
function display8() {
    document.getElementsByClassName("displayed")[0].innerHTML = "8";
}
function display9() {
    document.getElementsByClassName("displayed")[0].innerHTML = "9";
}



