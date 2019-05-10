import React from 'react';
import './Button.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

const UserInputArea = () => {
  return (
    <div className="user">
      <CalculatorDisplay />
      <div className="col">
        <div className="col1">
          <ClearButton />
          <NumberButton />
        </div>
        <ActionButton />
      </div>
    </div>
  );
};

export default UserInputArea;
