import React from 'react';
import './home.scss';
import Header from '../../components/header/Header';
import SearchResult from '../../components/searchResult/SearchResult';

const Home = () => {
  return (
    <div className="home-screen-container">
      <Header />
      <SearchResult />
    </div>
  );
};

export default Home;
