import React from 'react';
import './home.scss';
import Header from '../../components/header/header';
interface homeProps {}

const Home = (props: homeProps) => {
  return (
    <div className="home-screen-container">
      <Header />
    </div>
  );
};

export default Home;
