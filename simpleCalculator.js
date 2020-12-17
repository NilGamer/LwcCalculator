import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
  @track result = '';
  @track previousResults = [];
  @track showPreviousResult = false;
  firstNumber = '';
  secondNumber = '';

  numberChangeHandler(event) {
    if (event.target.name === 'firstNumber') {
      console.log(event.target.value);
      this.firstNumber = event.target.value;
    } else {
      this.secondNumber = event.target.value;
    }
  }

  addHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) + parseInt(this.secondNumber)
    }`;
    this.previousResults.push(this.result);
  };
  subHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) - parseInt(this.secondNumber)
    }`;
    this.previousResults.push(this.result);
  };
  mulHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) * parseInt(this.secondNumber)
    }`;
    this.previousResults.push(this.result);
  };
  divHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) / parseInt(this.secondNumber)
    }`;
    this.previousResults.push(this.result);
  };

  showPreviousResultToggle(event) {
    this.showPreviousResult = event.target.checked;
  }
}
