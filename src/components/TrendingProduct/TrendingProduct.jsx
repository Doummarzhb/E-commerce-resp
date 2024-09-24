import React from 'react';
// import productImage from '../../assets/products/product-1.jpg';
import productImage from '../../assets/product/p-1.jpg';
import productoip from '../../assets/product/OIP (1).jpeg';
import proteine from '../../assets/product/proteine.jpeg';
import water from '../../assets/product/water.jpeg';




const TrendingProducts = () => {
    const products = [
        {
          id: 1,
          name: "Fitness Tracker",
          price: "$50",
          description: "Track your fitness goals and progress.",
          image: productImage,
        },
        {
          id: 2,
          name: "Yoga Mat",
          price: "$20",
          description: "Non-slip mat for all your yoga sessions.",
          image: productoip,
        },
        {
          id: 3,
          name: "Dumbbell Set",
          price: "$40",
          description: "Adjustable dumbbells for versatile workouts.",
          image: productImage,
        },
        {
          id: 4,
          name: "Resistance Bands",
          price: "$15",
          description: "Perfect for strength training and stretching.",
          image: productImage,
        },
        {
          id: 5,
          name: "Protein Powder",
          price: "$30",
          description: "High-quality protein for muscle recovery.",
          image: proteine,
        },
        {
          id: 6,
          name: "Water Bottle",
          price: "$10",
          description: "Stay hydrated with this durable bottle.",
          image: water,
        },
        {
          id: 7,
          name: "Exercise Bike",
          price: "$200",
          description: "Get fit with this compact exercise bike.",
          image: productoip,
        },
        {
          id: 8,
          name: "Foam Roller",
          price: "$25",
          description: "Relieve muscle soreness and improve recovery.",
          image: productImage,
        },
      ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Trending Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-4 transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {product.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{product.price}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
