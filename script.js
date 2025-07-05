import { Calculator } from './Calculator.js';

const calc = new Calculator();
const numberButtons = document.getElementsByClassName('number-btn');
const clearButton = document.getElementById('clear-btn');
const decimalButton = document.getElementById('decimal-btn');

const addButton = document.getElementById('add-btn');
const subtractButton = document.getElementById('subtract-btn');
const multiplyButton = document.getElementById('multiply-btn');
const divideButton = document.getElementById('divide-btn');
const equalsButton = document.getElementById('equals-btn');

const negateButton = document.getElementById('negate-btn');
const percentButton = document.getElementById('percent-btn');

Array.from(numberButtons).forEach(button => {
  button.addEventListener('click', (e) => {
    calc.handleNumberClick(e.target.value);
  });
});

clearButton.addEventListener('click', () => {
  calc.clearScreen();
});  

decimalButton.addEventListener('click', () => {
  calc.handleDecimalClick();
})

addButton.addEventListener('click', () => {
  calc.operator = '+';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
})

subtractButton.addEventListener('click', () => {
  calc.operator = '-';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
});

multiplyButton.addEventListener('click', () => {
  calc.operator = 'x';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
});

divideButton.addEventListener('click', () => {
  calc.operator = '÷';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
});

equalsButton.addEventListener('click', () => {
  calc.calculate(calc.previousValue, calc.operator, calc.currentValue);
});

negateButton.addEventListener('click', () => {
  calc.handleNegateClick();
});

percentButton.addEventListener('click', () => {
  calc.handlePercentageClick();
});