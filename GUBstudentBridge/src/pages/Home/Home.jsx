import React from 'react';
import './Home.css';
import { Banner } from '../../components/Banner/Banner';
import Navigation2 from '../../components/Navigation2/Navigation2';

const Home = () => {
  return (
    <div className='food-home'>
      <Banner className="banner-paste" />
      <br />
      <Navigation2 className="navigation-paste" />
      
    </div>
  );
};

export default Home;