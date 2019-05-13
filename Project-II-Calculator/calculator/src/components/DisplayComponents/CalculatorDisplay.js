import React from 'react';
import './Display.css';

const Display = props => {
  return <div className={props.style}>{props.text}</div>;
};

export default Display;
