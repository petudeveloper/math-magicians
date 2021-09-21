/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Calculator extends React.Component {
  render() {
    const digitsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    const utilsArray = ['AC', '+/-', '%'];
    const operatorsArray = ['/', 'x', '-', '+', '='];

    const utils = utilsArray.map((utilLabel, index) => <div id={`util-${index}`} key={`${utilLabel}`} className="util">{utilLabel}</div>);
    const digits = digitsArray.map((digitLabel, index) => <div key={`${digitLabel}`} id={`digit-${index}`} className="digit">{digitLabel}</div>);
    const operators = operatorsArray.map((operatorLabel, index) => <div id={`operator-${index}`} key={`${operatorLabel}`} className="operator">{operatorLabel}</div>);
    return (
      <div className="grid">
        <div className="result">0</div>
        {utils}
        {digits}
        {operators}
      </div>
    );
  }
}
