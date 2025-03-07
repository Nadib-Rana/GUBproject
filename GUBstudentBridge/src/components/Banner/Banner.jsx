import React from 'react';
import './Banner.css';
import lunchFood from '../../assets/images/img1.jpeg';
import biriyani from '../../assets/images/img2.jpeg';
import breakfastFood from '../../assets/images/img3.jpeg';

export const Banner = () => {
  return (
    <div className="food-banner">
      <div className='food-banner-left'>
        <h2 className='food-banner-titel'>
          Savor the favorite
        </h2>
        <p className='food-banner-description'>
          Experience delicious dishes, fresh ingredients, and culinary delights.
        </p>
        <button className='btn'>Explore More</button>
      </div>
      <div className='food-banner-right'>
        <img src={lunchFood} alt="Lunch Food Canteen" />
        <img src={biriyani} alt="Biriyani" />
        <img src={breakfastFood} alt="Breakfast Food Canteen" />
      </div>
    </div>
  );
};
