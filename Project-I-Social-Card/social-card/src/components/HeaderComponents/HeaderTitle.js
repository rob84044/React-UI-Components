import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle() {
  return (
    <div className="headerTitle">
      <p className="title">
        <strong>LambdaSchool</strong>
      </p>
      <p className="smallGray">
        @LambdaSchool &#8226;{' '}
        <span className="date">{moment().format('MMM D')}</span>
      </p>
    </div>
  );
}

export default HeaderTitle;
