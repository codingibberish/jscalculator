let num1 = 1
let num2 = 2

document.getElementById("num1-l").textContent = num1
document.getElementById("num2-l").textContent = num2

function add() {
    sum = num1 + num2
    document.getElementById("sum-l").textContent += sum
}

function subtract() {
    sum = num1 - num2
    document.getElementById("sum-l").textContent += sum
}

function multiply() {
    sum = num1 * num2
    document.getElementById("sum-l").textContent += sum
}

function divide() {
    sum = num1 / num2
    document.getElementById("sum-l").textContent += sum
}