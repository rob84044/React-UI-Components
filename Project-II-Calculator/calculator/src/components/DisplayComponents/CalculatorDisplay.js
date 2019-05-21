import React from 'react';
import './Display.css';

const Display = props => {
  return (
    <div className={props.style}>
      <span className="text">{props.text}</span>
    </div>
  );
};

export default Display;
