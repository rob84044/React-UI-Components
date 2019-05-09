import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer() {
  return (
    <div className="cardContainer">
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
