import React from 'react';
import { FaHeart, FaRegListAlt, FaUserFriends } from 'react-icons/fa'; 
import image from '../../assets/blogs/blog-1.jpg';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-2 bg-gray-100 dark:bg-gray-900 transition duration-300 ease-in-out min-h-screen">
      <img src={image} alt="About Us" className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg" />
      <div className="relative z-10 max-w-3xl w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
        
        <h1 className="text-4xl font-bold mb-4 text-center animate-fade-in">About Us</h1>
        
        <div className="flex items-center mb-4">
          <FaHeart className="text-3xl text-red-500 mr-2" />
          <h2 className="text-2xl font-semibold">Our Mission</h2>
        </div>
        <p className="text-lg mb-4 animate-fade-in delay-100 text-center">
          Welcome to our E-commerce shop! We are dedicated to offering the best products to meet your needs.
        </p>

        <div className="flex items-center mb-4">
          <FaRegListAlt className="text-3xl text-blue-500 mr-2" />
          <h2 className="text-2xl font-semibold">Our Story</h2>
        </div>
        <p className="text-lg mb-4 animate-fade-in delay-200 text-center">
          Our journey started in 2024, with the goal of creating a platform where people can easily shop for their favorite items.
          We believe in the power of technology and how it can make shopping faster, easier, and more enjoyable for everyone.
        </p>

        <div className="flex items-center mb-4">
          <FaUserFriends className="text-3xl text-green-500 mr-2" />
          <h2 className="text-2xl font-semibold">Our Team</h2>
        </div>
        <p className="text-lg mb-4 animate-fade-in delay-300 text-center">
          Behind every product we offer, there's a passionate team working to bring you the best service. Meet the people who make it all happen!
        </p>
        
        <p className="text-lg animate-fade-in delay-400 text-center">
          Thank you for choosing our store. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
