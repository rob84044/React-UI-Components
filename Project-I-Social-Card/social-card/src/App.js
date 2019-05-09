import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <a href="https://reactjs.org/" className="master">
      <div className="column1">
        <ImageThumbnail />
      </div>
      <div className="column2">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </a>
  );
};

export default App;
