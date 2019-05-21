import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className="cardContent">
      <p className="title">
        <strong>Get Started With React</strong>
      </p>
      <p className="description">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="faint">reactjs.org</p>
    </div>
  );
}

export default CardContent;
