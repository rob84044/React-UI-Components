import React from 'react';
import './Button.css';

const ClearButton = props => {
  return <button className={props.style}>{props.text}</button>;
};

export default ClearButton;
