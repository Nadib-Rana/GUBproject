import lunchFoodImage from '../../assets/images/img1.jpeg';
import biriyaniImage from '../../assets/images/img2.jpeg';
import breakfastFoodImage from '../../assets/images/img3.jpeg';

const data24h = [
  {
    id: 1,
    name: 'Egg 123Omelette',
    description: 'A fluffy savory blend of eggs and seasoning.',
    price: 20,
    stock: 10,
    provider: 'S<br />T', 
    image: lunchFoodImage
  },
  {
    id: 2,
    name: '111Pancakes',
    description: 'Delicious pancakes served with syrup and butter.',
    price: 30,
    stock: 5,
    provider: 'S<br />T', 
    image: biriyaniImage
  },
  {
    id: 3,
    name: 'Salad',
    description: 'A mix of fresh fruits served with a honey dressing.',
    price: 25,
    stock: 0,
    provider: 'S<br />T', 
    image: breakfastFoodImage
  }
];

export default data24h;
