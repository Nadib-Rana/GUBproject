import React from 'react';

const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-green-50 min-h-screen p-6">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-600">Savor the Favorite</h1>
        <p className="text-gray-600">Experience delicious dishes, fresh ingredients, and culinary delights.</p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Explore Foods</button>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-green-700">Morning Food</h2>
        <div className="flex justify-between items-center my-4">
          <span>Price:</span>
          <input type="range" min="0" max="350" className="w-1/2" />
          <span>Category</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-green-50 p-4 border rounded-lg shadow-md">
              <h3 className="font-bold">Egg omelette</h3>
              <p>Calories: 150</p>
              <button className="mt-2 px-4 py-1 bg-green-400 text-white rounded hover:bg-green-500">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center my-6">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">More items...</button>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-green-700">Lunch Food</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-green-50 p-4 border rounded-lg shadow-md">
              <h3 className="font-bold">Egg omelette</h3>
              <p>Calories: 150</p>
              <button className="mt-2 px-4 py-1 bg-green-400 text-white rounded hover:bg-green-500">Order Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;

