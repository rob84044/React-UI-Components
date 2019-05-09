import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="headerTitle">
      <p className="title">
        <strong>LambdaSchool</strong>
      </p>
      <p className="smallGray">@LambdaSchool &#8226; 26 jan</p>
    </div>
  );
}

export default HeaderTitle;
