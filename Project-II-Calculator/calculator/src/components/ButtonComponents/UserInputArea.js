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
            <ClearButton buttonStyle="large faint btn white" text="clear" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn white" text="7" />
            <NumberButton buttonStyle="btn white" text="8" />
            <NumberButton buttonStyle="btn white" text="9" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn white" text="4" />
            <NumberButton buttonStyle="btn white" text="5" />
            <NumberButton buttonStyle="btn white" text="6" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="btn white" text="1" />
            <NumberButton buttonStyle="btn white" text="2" />
            <NumberButton buttonStyle="btn white" text="3" />
          </div>
          <div className="row">
            <NumberButton buttonStyle="large btn white" text="0" />
          </div>
        </div>
        <div className="action">
          <div className="row">
            <ActionButton buttonStyle="large red" text="&#247;" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="large red" text="&#215;" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="large red" text="&#8722;" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="large red" text="&#x2B;" />
          </div>
          <div className="row">
            <ActionButton buttonStyle="large red" text="&#61;" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInputArea;
