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
    if (this.currentValue === '0') {
      this.currentValue = value;
    } else {
      this.currentValue += value;
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
    this.currentValue = this.memoryValue;
    this.updateDisplay();
  }

  handleMemoryClearClick() {
    this.memoryValue = null;
  }

  handleMemoryAddClick() {
    const a = parseFloat(this.memoryValue);
    const b = parseFloat(this.currentValue);

    this.memoryValue = a + b;
  }

  handleMemorySubtractClick() {
    const a = parseFloat(this.memoryValue);
    const b = parseFloat(this.currentValue);

    this.memoryValue = a - b;
  }

  clearScreen() {
    this.currentValue = '';
    this.previousValue = null;
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