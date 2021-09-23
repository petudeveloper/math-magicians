import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './calculatorButton';

const Calculator = () => {
  const [state, updateState] = useState(0);

  const clickAction = (e) => {
    updateState((state) => calculate(state, e.target.innerHTML));
  };

  const digitsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
  const utilsArray = ['AC', '+/-', '%'];
  const operatorsArray = ['÷', 'x', '-', '+', '='];
  const { total, next } = state;

  const utils = utilsArray.map((utilLabel, index) => (
    <CalculatorButton key={utilLabel} label={utilLabel} className="util" index={index} buttonClick={clickAction} />
  ));

  const digits = digitsArray.map((digitLabel, index) => (
    <CalculatorButton key={digitLabel} label={digitLabel} className="digit" index={index} buttonClick={clickAction} />
  ));

  const operators = operatorsArray.map((operatorLabel, index) => (
    <CalculatorButton key={operatorLabel} label={operatorLabel} className="operator" index={index} buttonClick={clickAction} />
  ));
  return (
    <div className="grid">
      <div className="result">{next || total || 0}</div>
      {utils}
      {digits}
      {operators}
    </div>
  );
};

export default Calculator;
