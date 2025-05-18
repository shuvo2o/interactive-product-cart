import React from 'react';
  const products= [
    {
      id:1, name:'Shirt',price:2199,
    },
    {
      id:2, name:'Pant',price:2700
    },
    {
      id:3, name:'T-shirt',price:1300
    },
    {
      id:4, name:'Watch',price:4500
    },
    {
      id:5, name:'Gadgets',price:5000
    },
    {
      id:6, name:'Shirt',price:1530,
    },
    {
      id:2, name:'Pant',price:500
    },
    {
      id:3, name:'T-shirt',price:500
    },
  ]
const App = () => {

  return (
    <div>
      <div className='px-4 py-20 max-w-screen-lg mx-auto'>
    <h2 className='text-2xl text-center font-bold mb-4'>E-Commerce Product Cart</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {
        products.map(product=>(
          <div className='border shadow-2xl  px-5 py-5 rounded-xl bg-indigo-300' key={product.id}>
            <h2 className='text-center text-2xl font-bold'>{product.name}</h2>
            <h2 className='text-center'>price: {product.price}</h2>
            <button className='bg-green-400 hover:bg-green-600 mt-4 flex mx-auto px-3 py-2 rounded-xl text-white font-bold '>Add to Cart</button>
          </div>
        ))
      }
    </div>
      </div>
    </div>
  );
};

export default App;