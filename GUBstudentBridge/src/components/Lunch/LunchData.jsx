import lunchFoodImage from '../../assets/images/img1.jpeg';
import biriyaniImage from '../../assets/images/img2.jpeg';
import breakfastFoodImage from '../../assets/images/img3.jpeg';

const lunchFood = [
  {
    id: 1,
    name: '121 Egg Omelette',
    description: 'A fluffy savory blend of eggs and seasoning.',
    price: 20,
    stock: 10,
    provider: 'S<br />T',
    image: lunchFoodImage
  },
  {
    id: 2,
    name: '123 Pancakes',
    description: 'Delicious pancakes served with syrup and butter.',
    price: 30,
    stock: 5,
    provider: 'G<br />U',
    image: biriyaniImage
  },
  {
    id: 3,
    name: 'Fruit Bowl',
    description: 'A mix of fresh fruits served with a honey dressing.',
    price: 25,
    stock: 0,
    provider: 'S<br />T',
    image: breakfastFoodImage
  },
  {
    id: 4,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with spiced chicken.',
    price: 50,
    stock: 8,
    provider: 'G<br />U',
    image: biriyaniImage
  },
  {
    id: 5,
    name: 'Veg Thali',
    description: 'A wholesome Indian platter with roti, rice, dal and sabzi.',
    price: 40,
    stock: 6,
    provider: 'S<br />T',
    image: lunchFoodImage
  },
  {
    id: 6,
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cooked in a creamy tomato gravy.',
    price: 45,
    stock: 7,
    provider: 'G<br />U',
    image: breakfastFoodImage
  },
  {
    id: 7,
    name: 'Fried Rice & Manchurian',
    description: 'Spicy Indo-Chinese combo of fried rice and veg balls.',
    price: 38,
    stock: 5,
    provider: 'S<br />T',
    image: biriyaniImage
  },
  {
    id: 8,
    name: 'Rajma Chawal',
    description: 'Red kidney beans curry with steamed rice.',
    price: 28,
    stock: 9,
    provider: 'G<br />U',
    image: lunchFoodImage
  },
  {
    id: 9,
    name: 'Chole Bhature',
    description: 'Spicy chickpeas served with deep-fried fluffy bread.',
    price: 35,
    stock: 4,
    provider: 'S<br />T',
    image: breakfastFoodImage
  },
  {
    id: 10,
    name: 'Grilled Sandwich',
    description: 'Crispy grilled bread stuffed with spicy veggies and cheese.',
    price: 22,
    stock: 10,
    provider: 'G<br />U',
    image: biriyaniImage
  }
];

export default lunchFood;
