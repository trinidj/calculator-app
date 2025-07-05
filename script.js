import { Calculator } from './Calculator.js';

const calc = new Calculator();

// Creating a "lookup" table for DOM element selectors
const elements = {
  numbers: document.getElementById('number-btn'),
  clear: document.getElementById('clear-btn'),
  decimal: document.getElementById('decimal-btn'),
  negate: document.getElementById('negate-btn'),
  percent: document.getElementById('percent-btn'),
  equals: document.getElementById('equals-btn'),

  operators: {
    add: document.getElementById('add-btn'),
    subtract: document.getElementById('subtract-btn'),
    multiply: document.getElementById('multiply-btn'),
    divide: document.getElementById('divide-btn'),
  },
};

const operatorMap = {
  add: '+',
  subtract: '-',
  multiply: 'x',
  divide: '÷',
};

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
});

addButton.addEventListener('click', () => {
  calc.operator = '+';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
});

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