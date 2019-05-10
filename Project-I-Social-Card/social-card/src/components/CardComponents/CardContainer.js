import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  const clickMe = () => {
    window.location.href = 'https://reactjs.org';
  };

  return (
    <div className="cardContainer" onClick={clickMe}>
      <div className="cardImg">
        <CardBanner />
      </div>
      <div className="content">
        <CardContent />
      </div>
    </div>
  );
}

export default CardContainer;
