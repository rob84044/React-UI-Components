import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a href="" className="chat item">
        <i class="far fa-comments fa-2x" />
      </a>
      <div className="grouped item">
        <a href="" className="load">
          <i class="fas fa-retweet fa-2x" />
        </a>
        <p className="number">6</p>
      </div>
      <div className="grouped item">
        <a href="" className="heart">
          <i class="far fa-heart fa-2x" />
        </a>
        <p className="number ">4</p>
      </div>
      <a href="" className="envelope item">
        <i class="far fa-envelope fa-2x" />
      </a>
    </div>
  );
}

export default Footer;
