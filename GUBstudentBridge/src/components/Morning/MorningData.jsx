import lunchFood from '../../assets/images/img1.jpeg';
import biriyani from '../../assets/images/img2.jpeg';
import breakfastFood from '../../assets/images/img3.jpeg';

const morningData = [
  {
    id: 1,
    name: 'Egg Omelette',
    description: 'A fluffy savory blend of eggs and seasoning.',
    price: 20,
    stock: 10,
    provider: 'S<br />T', // If this should be rendered as HTML, use a React component
    image: lunchFood
  },
  {
    id: 2,
    name: 'Pancakes',
    description: 'Delicious pancakes served with syrup and butter.',
    price: 30,
    stock: 5,
    provider: 'A<br />B',
    image: biriyani
  },
  {
    id: 3,
    name: 'Fruit Salad',
    description: 'A mix of fresh fruits served with a honey dressing.',
    price: 25,
    stock: 0,
    provider: 'C<br />D',
    image: breakfastFood
  }
];

export default morningData;
