import React from 'react';
import './UserInputArea.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';

const UserInputArea = () => {
  return (
    <div className="display">
      <CalculatorDisplay style="result" text="0" />
      <div className="input">
        <div className="numbers">
          <div className="row">
            <ClearButton style="btn white" text="clear" />
          </div>
          <div className="row">
            <NumberButton style="btn white" text="7" />
            <NumberButton style="btn white" text="8" />
            <NumberButton style="btn white" text="9" />
          </div>
          <div className="row">
            <NumberButton style="btn white" text="4" />
            <NumberButton style="btn white" text="5" />
            <NumberButton style="btn white" text="6" />
          </div>
          <div className="row">
            <NumberButton style="btn white" text="1" />
            <NumberButton style="btn white" text="2" />
            <NumberButton style="btn white" text="3" />
          </div>
          <div className="row">
            <NumberButton style="large btn white" text="0" />
          </div>
        </div>
        <div className="action">
          <div className="row">
            <ActionButton style="btn red" text="&#247;" />
          </div>
          <div className="row">
            <ActionButton style="btn red" text="&#215;" />
          </div>
          <div className="row">
            <ActionButton style="btn red" text="&#8722;" />
          </div>
          <div className="row">
            <ActionButton style="btn red" text="&#65291;" />
          </div>
          <div className="row">
            <ActionButton style="btn red" text="&#61;" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInputArea;
