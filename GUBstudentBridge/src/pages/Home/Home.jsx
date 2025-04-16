import React from 'react';
import './Home.css';
import { Banner } from '../../components/Banner/Banner';
// import Navigation1 from '../../components/Navigation1/Navigation1'; 
import Navigation2 from '../../components/Navigation2/Navigation2';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='food-home'>
      {/* <Navigation1 className="navigation1" /> */}
     
      <Banner className="banner-paste" />
      <br />
      <Navigation2 className="navigation-paste" />
      <br />
       <Footer />
    </div>
  );
};

export default Home;