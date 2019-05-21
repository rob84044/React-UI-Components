import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div className="master">
      <div className="column1">
        <ImageThumbnail />
      </div>
      <div className="column2">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
