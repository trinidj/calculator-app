class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = null;
    this.display = document.getElementById('display');
    this.operator = null;
  }

  handleNumberClick = value => {
    this.currentValue = value;  
    this.updateDisplay();
  }

  updateDisplay = () => {
    this.display.value += this.currentValue;
  }

  clearScreen = () => {
    this.display.value = '';
  }

  calculate = (num1, op, num2) => {
    if (this.currentValue.length < 0) {
      alert('please choose a number first');
    } else {
      
    }
  }
}

const calculator = new Calculator();

const display = document.getElementById('display');
const numberButtons = document.getElementsByClassName('number-btn');
const clearButton = document.getElementById('clear-btn');
const decimalButton = document.getElementById('decimal-btn');

Array.from(numberButtons).forEach(button => {
  button.addEventListener('click', (e) => {
    calculator.handleNumberClick(e.target.value);
  });
});

clearButton.addEventListener('click', () => {
  display.value = '';
});  

decimalButton.addEventListener('click', () => {
  if (display.value.includes('.')) {
    return;
  } else {
    display.value += '.';
  }
});