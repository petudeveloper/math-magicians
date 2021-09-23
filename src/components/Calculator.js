import React from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './calculatorButton';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  clickAction = (e) => {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const digitsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    const utilsArray = ['AC', '+/-', '%'];
    const operatorsArray = ['÷', 'x', '-', '+', '='];
    const { total, next } = this.state;

    const utils = utilsArray.map((utilLabel, index) => (
      <CalculatorButton key={utilLabel} label={utilLabel} className="util" index={index} buttonClick={this.clickAction} />
    ));

    const digits = digitsArray.map((digitLabel, index) => (
      <CalculatorButton key={digitLabel} label={digitLabel} className="digit" index={index} buttonClick={this.clickAction} />
    ));

    const operators = operatorsArray.map((operatorLabel, index) => (
      <CalculatorButton key={operatorLabel} label={operatorLabel} className="operator" index={index} buttonClick={this.clickAction} />
    ));
    return (
      <div className="grid">
        <div className="result">{next || total || 0}</div>
        {utils}
        {digits}
        {operators}
      </div>
    );
  }
}
