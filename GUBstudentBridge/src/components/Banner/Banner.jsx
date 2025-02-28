import React from 'react';
import './Banner.css';
import lunchFood from '../../assets/images/LunchFoodCanteen.jpeg';
import biriyani from '../../assets/images/biriyani.jpeg';
import breakfastFood from '../../assets/images/backfirstFoodCanteen.jpeg';

export const Banner = () => {
  return (
    <div className="food-banner">
      <div className="food-banner-left">
        <h2 className="food-banner-title">
          Savor the favorite
        </h2>
        <p className="food-banner-description">
          Experience delicious dishes, fresh ingredients, and culinary delights.
        </p>
        <button className="cta-button">Order Now</button>
      </div>
      <div className="food-banner-right">
        <img src={lunchFood} alt="Lunch Food Canteen" />
        <img src={biriyani} alt="Biriyani" />
        <img src={breakfastFood} alt="Breakfast Food Canteen" />
      </div>
    </div>
  );
};