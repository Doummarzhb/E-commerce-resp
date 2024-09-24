import React from 'react';

const ProductCard = ({ productsData }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
        {productsData.map((product) => (
          <div key={product.id} className='border p-4 rounded-md shadow-lg flex flex-col'>
            <img 
              src={product.img} 
              alt={product.name} 
              className='h-48 w-full object-cover rounded-md mb-4' 
            />
            <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
            <p className='text-gray-600 mb-2'>{product.description}</p>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-lg'>${product.price}</p>
              <button 
                className='bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-200'
                onClick={() => handleAddToCart(product)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const handleAddToCart = (product) => {
  console.log(`Added ${product.name} to cart`);
};

export default ProductCard;
