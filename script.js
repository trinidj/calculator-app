import { Calculator } from './Calculator.js';

const calc = new Calculator();

/**
 * 
 * Lookup table for elements and hashmap for operators for organization, and makes it more maintainable
 * 
 */

// Creating a "lookup" table for DOM element selectors
const elements = {
  numbers: document.getElementsByClassName('number-btn'),
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
  }
};

// A map for operators
const operatorMap = {
  add: '+',
  subtract: '-',
  multiply: 'x',
  divide: '÷',
};

Array.from(elements.numbers).forEach(button => {
  button.addEventListener('click', (e) => {
    calc.handleNumberClick(e.target.value);
  });
});

Object.entries(elements.operators).forEach(([key, button]) => {
  button.addEventListener('click', () => {
    calc.handleOperatorClick(operatorMap[key]);
  });
});

elements.clear.addEventListener('click', () => calc.clearScreen());
elements.decimal.addEventListener('click', () => calc.handleDecimalClick());
elements.negate.addEventListener('click', () => calc.handleNegateClick());
elements.percent.addEventListener('click', () => calc.handlePercentageClick());

elements.equals.addEventListener('click', () => calc.calculate(calc.previousValue, calc.operator, calc.currentValue));