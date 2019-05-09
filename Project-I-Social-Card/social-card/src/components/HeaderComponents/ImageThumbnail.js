import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from './lambda.svg';

function ImageThumbnail() {
  return (
    <div className="imageThumbnail">
      <Logo className="logo" />
    </div>
  );
}

export default ImageThumbnail;
