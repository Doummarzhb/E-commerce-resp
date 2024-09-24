import React from 'react';
import { FaShippingFast, FaHeadset, FaUndo, FaPercent } from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "On all orders over $75",
    icon: <FaShippingFast  className='text-4xl md:text-5xl text-primary'/>
  },
  {
    id: 2,
    title: "Support 24/7",
    desc: "Get friendly support",
    icon: <FaHeadset className='text-4xl md:text-5xl text-primary' />
  },
  {
    id: 3,
    title: "Money Return",
    desc: "Back guarantee under 7 days",
    icon: <FaUndo className='text-4xl md:text-5xl text-primary' />
  },
  {
    id: 4,
    title: "Member Discount",
    desc: "On every order over $50",
    icon: <FaPercent className='text-4xl md:text-5xl text-primary' />
  }
];

const Services = () => {
  return (
    <div className='container mt-14 md:mt-20'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
        {ServiceData.map((data) => (
          <div key={data.id} className="flex flex-col items-center text-center p-4 gap-4">
            <div className="text-4xl">{data.icon}</div> {/* Directly rendering the icon */}
            <h2 className="text-2xl font-semibold">{data.title}</h2>
            <p className="text-lg">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
