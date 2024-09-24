import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";




const productsData = [
  {
    id: 1,
    name: "Whey Protein",
    description: "High-quality whey protein for muscle recovery.",
    price: 49.99,
    img: Img1,
  },
  {
    id: 2,
    name: "Dumbbells Set",
    description: "A set of adjustable dumbbells for strength training.",
    price: 99.99,
    img: Img2,
  },
  {
    id: 3,
    name: "Yoga Mat",
    description: "Non-slip yoga mat for comfortable workouts.",
    price: 29.99,
    img: Img3,
  },
  {
    id: 4,
    name: "Resistance Bands",
    description: "Durable resistance bands for strength training.",
    price: 19.99,
    img: Img4,
  },
  {
    id: 5,
    name: "Treadmill",
    description: "High-performance treadmill for indoor running.",
    price: 599.99,
    img: Img5,
  },
  {
    id: 6,
    name: "Resistance Bands",
    description: "Durable resistance bands for strength training.",
    price: 19.99,
    img: Img6,
  },
  {
    id: 7,
    name: "Resistance Bands",
    description: "Durable resistance bands for strength training.",
    price: 89.99,
    img: Img7,
  },
];

const Product = () => {
  return (
    <div className='container'>
      <Heading title="Our Products" subtitle="Explore Our Products" />
      <ProductCard productsData={productsData} />
    </div>
  );
};

export default Product;
