import { Calculator } from './Calculator.js';

const calc = new Calculator();

/**
 * Lookup table for elements and hashmap for operators for organization, and makes it more maintainable
 */

// Creating a "lookup" table for DOM element selectors
const elements = {
  numbers: document.getElementsByClassName('number-btn'),
  clear: document.getElementById('clear-btn'),
  decimal: document.getElementById('decimal-btn'),
  negate: document.getElementById('negate-btn'),
  percent: document.getElementById('percent-btn'),
  equals: document.getElementById('equals-btn'),
  radical: document.getElementById('radical-btn'),
  
  operators: {
    add: document.getElementById('add-btn'),
    subtract: document.getElementById('subtract-btn'),
    multiply: document.getElementById('multiply-btn'),
    divide: document.getElementById('divide-btn'),
  },

  memory: {
    store: document.getElementById('memory-store'),
    clear: document.getElementById('memory-clear'),
    recall: document.getElementById('memory-recall'),
    add: document.getElementById('memory-add'),
    subtract: document.getElementById('memory-subtract'),
  }
};

// A map for operators
const operatorMap = {
  add: '+',
  subtract: '-',
  multiply: 'x',
  divide: '÷',
};

/**
 * Number Click Event Listener
 */
Array.from(elements.numbers).forEach(button => {
  button.addEventListener('click', (e) => {
    calc.handleNumberClick(e.target.value);
  });
});

/**
 * Operator Event Listener
 */
Object.entries(elements.operators).forEach(([key, button]) => {
  button.addEventListener('click', () => {
    calc.handleOperatorClick(operatorMap[key]);
  });
});

/**
 * Functional Button Event Listeners
 */
elements.clear.addEventListener('click', () => calc.clearScreen());
elements.decimal.addEventListener('click', () => calc.handleDecimalClick());
elements.negate.addEventListener('click', () => calc.handleNegateClick());
elements.percent.addEventListener('click', () => calc.handlePercentageClick());
elements.radical.addEventListener('click', () => calc.handleRadicalClick());

elements.equals.addEventListener('click', () => calc.calculate(calc.previousValue, calc.operator, calc.currentValue));

/**
 * Memory Event Listeners
 */
elements.memory.store.addEventListener('click', () => calc.handleMemoryStoreClick());
elements.memory.recall.addEventListener('click', () => calc.handleMemoryRecallClick());
elements.memory.clear.addEventListener('click', () => calc.handleMemoryClearClick());
elements.memory.add.addEventListener('click', () => calc.handleMemoryAddClick());
elements.memory.subtract.addEventListener('click', () => calc.handleMemorySubtractClick());