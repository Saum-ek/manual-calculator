const display = document.querySelector("#display");
let num1 = "";
let num2 = "";
let operator = null;

function addNumber(number) {
    if (operator === null) {
        num1 += number;
        display.textContent += number;
    } else {
        num2 += number;
        display.textContent += number;
    }
}

function addOperator(op) {
    if (num1 && num2 && operator) {
        calculate();
    }
    operator = op;
    display.textContent += op;
}

function clearDisplay() {
    num1 = "";
    num2 = "";
    operator = null;
    display.textContent = "";
}
function calculate() {
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        result = num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : 'Error';
    }
    num1 = result;
    num2 = "";
    operator = null;
    display.textContent = result;
}