import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor() {
    super();
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
    const operatorsArray = ['/', 'x', '-', '+', '='];
    const { total, next } = this.state;

    const utils = utilsArray.map((utilLabel, index) => (
      <button type="button" id={`util-${index}`} key={`${utilLabel}`} className="util" onClick={this.clickAction}>
        {utilLabel}
      </button>
    ));

    const digits = digitsArray.map((digitLabel, index) => (
      <button type="button" key={`${digitLabel}`} id={`digit-${index}`} className="digit" onClick={this.clickAction}>
        {digitLabel}
      </button>
    ));

    const operators = operatorsArray.map((operatorLabel) => (
      <button type="button" key={`${operatorLabel}`} className="operator" onClick={this.clickAction}>
        {operatorLabel}
      </button>
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
