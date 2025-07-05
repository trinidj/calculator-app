class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = null;
    this.display = document.getElementById('display');
    this.operator = null;
  }

  handleNumberClick = value => {
    if (this.currentValue === '0') {
      this.currentValue = value;
    } else {
      this.currentValue += value;
    }
    this.updateDisplay();
  }

  updateDisplay = () => {
    this.display.value = this.currentValue;
  }

  clearScreen = () => {
    this.currentValue = '0';
    this.previousValue = null;
    this.updateDisplay();
  }

  calculate = (num1, op, num2) => {
    let result;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (op) {
      case '+':
        result = a + b;
        break;
      default:
        result = 'Error';
    }
    this.currentValue = result.toString();
    this.updateDisplay();
  }
}

const calc = new Calculator();
const display = document.getElementById('display');
const numberButtons = document.getElementsByClassName('number-btn');
const clearButton = document.getElementById('clear-btn');
const decimalButton = document.getElementById('decimal-btn');

const addButton = document.getElementById('add-btn');
const subtractButton = document.getElementById('subtract-btn');
const multiplyButton = document.getElementById('multiply-btn');
const divideButton = document.getElementById('divide-btn');
const percentButton = document.getElementById('percent-btn');
const equalsButton = document.getElementById('equals-btn');

Array.from(numberButtons).forEach(button => {
  button.addEventListener('click', (e) => {
    calc.handleNumberClick(e.target.value);
  });
});

clearButton.addEventListener('click', () => {
  calc.clearScreen();
});  

decimalButton.addEventListener('click', () => {
  if (display.value.includes('.')) {
    return;
  } else {
    display.value += '.';
  }
});

addButton.addEventListener('click', () => {
  calc.operator = '+';
  calc.previousValue = calc.currentValue;
  calc.currentValue = '';
})

equalsButton.addEventListener('click', () => {
  calc.calculate(calc.previousValue, calc.operator, calc.currentValue);
})