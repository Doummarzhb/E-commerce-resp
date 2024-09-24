import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg'; 
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

// Sample blog data
const BlogData = [
  {
    id: 1,
    title: "Effective Time Management Strategies",
    description: "Learn how to manage your time effectively with proven strategies and tips.",
    date: "September 10, 2024",
    img: Img2,  
  },
  {
    id: 2,
    title: "The Impact of Smartphone Usage on Productivity",
    description: "Discover how smartphone usage affects productivity and ways to mitigate its impact.",
    date: "September 12, 2024",
    img: Img1,  
  },
  {
    id: 3,
    title: "The Future of Robotics in Everyday Life",
    description: "Explore how robotics technology is shaping the future and its potential applications in daily life.",
    date: "September 15, 2024",
    img: Img3,  
  },
];

const Blogs = () => {
  return (
    <div className='container'>
      <Heading title="Recent News" subtitle="Explore Our Blogs" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
        {BlogData.map((blog) => (
          <div key={blog.id} className='border p-4 rounded-md shadow-lg'>
            <img 
              src={blog.img} 
              alt={blog.title} 
              className='h-48 w-full object-cover rounded-md mb-4' 
            />
            <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
            <p className='text-gray-600 mb-2'>{blog.description}</p>
            <p className='text-gray-400 text-sm'>{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
