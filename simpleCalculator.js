import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
  @track result = '';
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
  };
  subHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) - parseInt(this.secondNumber)
    }`;
  };
  mulHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) * parseInt(this.secondNumber)
    }`;
  };
  divHandler = () => {
    this.result = `The result is ${
      parseInt(this.firstNumber) / parseInt(this.secondNumber)
    }`;
  };
}
