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
    provider: 'S<br />T',
    image: lunchFood
  },
  {
    id: 2,
    name: 'Pancakes',
    description: 'Delicious pancakes served with syrup and butter.',
    price: 30,
    stock: 5,
    provider: 'G<br />U',
    image: biriyani
  },
  {
    id: 3,
    name: 'Fruit Salad',
    description: 'A mix of fresh fruits served with a honey dressing.',
    price: 25,
    stock: 0,
    provider: 'S<br />T',
    image: breakfastFood
  },
  {
    id: 4,
    name: 'Poha',
    description: 'Flattened rice sautéed with spices and herbs.',
    price: 18,
    stock: 12,
    provider: 'G<br />U',
    image: lunchFood
  },
  {
    id: 5,
    name: 'Upma',
    description: 'Savory South Indian breakfast dish made with semolina.',
    price: 22,
    stock: 8,
    provider: 'S<br />T',
    image: biriyani
  },
  {
    id: 6,
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with tangy lentil soup.',
    price: 28,
    stock: 10,
    provider: 'G<br />U',
    image: breakfastFood
  },
  {
    id: 7,
    name: 'Paratha with Curd',
    description: 'Stuffed flatbread served with curd and pickle.',
    price: 35,
    stock: 6,
    provider: 'S<br />T',
    image: lunchFood
  },
  {
    id: 8,
    name: 'Masala Dosa',
    description: 'Crispy dosa filled with spicy mashed potatoes.',
    price: 32,
    stock: 4,
    provider: 'G<br />U',
    image: biriyani
  },
  {
    id: 9,
    name: 'Vegetable Sandwich',
    description: 'Toasted sandwich with fresh veggies and sauces.',
    price: 20,
    stock: 9,
    provider: 'S<br />T',
    image: breakfastFood
  },
  {
    id: 10,
    name: 'Chai & Bun Maska',
    description: 'Classic tea with soft bun and butter.',
    price: 15,
    stock: 11,
    provider: 'G<br />U',
    image: lunchFood
  }
];

export default morningData;
