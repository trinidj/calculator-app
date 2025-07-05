export class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = null;
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

  handleDecimalClick = () => {
    if (!this.currentValue.includes('.')) {
      this.currentValue = this.currentValue === '' ? '0.' : this.currentValue + '.';
      this.updateDisplay();
    }
  }

  handleNegateClick = () => {
    this.currentValue *= -1;
    this.updateDisplay();
  }

  handlePercentageClick = () => {
    this.currentValue /= 100;
    this.updateDisplay();
  }

  updateDisplay = () => {
    document.getElementById('display').value = this.currentValue;
  }

  clearScreen = () => {
    this.currentValue = '';
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
      case '-':
        result = a - b;
        break;
      case 'x':
        result = a * b;
        break;
      case '÷':
        if (b === 0) {
          result = 'Error';
        } else {
          result = a / b;
        }
        break;
      default:
        result = 'Error';
    }
    this.currentValue = result.toString();
    this.updateDisplay();
  }
}