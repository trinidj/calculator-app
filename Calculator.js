export class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = null;
    this.operator = null;
    this.memoryValue = null;
  }

  updateDisplay() {
    document.getElementById('display').value = this.currentValue;
  }

  handleNumberClick(value) {
    const num = parseFloat(value);

    if (this.currentValue === '0') {
      this.currentValue = num.toString();
    } else {
      this.currentValue += num.toString();
    }
    this.updateDisplay();
  }

  handleOperatorClick(operator) {
    if (this.operator && this.previousValue && this.currentValue) {
      this.calculate(this.previousValue, this.currentValue, this.operator);
    }

    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = '';
  }

  handleDecimalClick() {
    if (!this.currentValue.includes('.')) {
      this.currentValue = this.currentValue === '' ? '0.' : this.currentValue + '.';
      this.updateDisplay();
    }
  }

  /**
   * Type Safety -> Explicit conversion with validation
   */
  handleNegateClick() {
    if (this.currentValue && this.currentValue !== '0') {
      const num = parseFloat(this.currentValue);

      if (!isNaN(num)) {
        this.currentValue = (-num).toString();
        this.updateDisplay(); 
      }
    }
  }

  handlePercentageClick() {
    if (this.currentValue) {
      const num = parseFloat(this.currentValue);

      if (!isNaN(num)) {
        this.currentValue = (num / 100).toString();
        this.updateDisplay();
      } 
    }
  }

  handleRadicalClick() {
    if (this.currentValue) {
      const num = parseFloat(this.currentValue);

      if (!isNaN(num) && num >= 0) {
        this.currentValue = Math.sqrt(num).toString();
        this.updateDisplay();
      }
    }
  }

  
  handleMemoryStoreClick() {
    this.memoryValue = this.currentValue;
  }

  handleMemoryRecallClick() {
    if (this.memoryValue !== null) {
      this.currentValue = this.memoryValue;
      this.updateDisplay();
    }
  }

  handleMemoryClearClick() {
    this.memoryValue = null;
  }

  handleMemoryAddClick() {
    if (!this.currentValue) {
      return;
    }

    const currentNum = parseFloat(this.currentValue);
    if (isNaN(currentNum)) {
      return;
    }

    const memoryNum = parseFloat(this.memoryValue) || 0;
    this.memoryValue = (memoryNum + currentNum).toString();
  }

  handleMemorySubtractClick() {
    if (!this.currentValue) {
      return;
    }

    const currentNum = parseFloat(this.currentValue);
    const memoryNum = parseFloat(this.memoryValue) || 0;

    if (isNaN(currentNum)) {
      return;
    }
    this.memoryValue = (memoryNum - currentNum).toString();
  }

  clearScreen() {
    this.currentValue = '';
    this.previousValue = null;
    this.operator = null;
    this.updateDisplay();
  }

  calculate(num1, num2, op) {
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
    this.operator = null;
    this.previousValue = null;
    this.updateDisplay();
  }
}