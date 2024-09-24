import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div style={{ backgroundColor: data.bgcolor }} className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>{data.discount}</p>
            <p className='text-sm'>{data.title}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>
              {data.title2}
            </h1>
            <p className='text-sm'>{data.title3}</p>
            <p className='text-sm'>{data.title4}</p>
            <button className='mt-4 bg-black text-white px-4 py-2 rounded-3xl'>
              {data.buttonLabel}
            </button>
          </div>
          <div className='flex justify-center'>
            <img src={data.image} alt={data.title} className='w-full h-auto' />
          </div>
          <div className='h-full flex items-center'>
            <img src={data.image} alt='' className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'/>
          </div>
   
            
     
          
          </div>
        </div>
      </div>
    
  );
}

export default Banner;
