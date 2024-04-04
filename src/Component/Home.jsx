import React from 'react';

const Home = (props) => {
  console.warn('home', props);
  return (
    <div>
      <div className='text-center'>
        <h1>Home Component</h1>
      </div>
      <div className='relative float-end'>
        {/* Positioning the text absolutely */}
        <div className='absolute top-5 left-14'>
          <h2 className='text-white  p-2 rounded-full'>{props.data.length}</h2>
        </div>
        <img
          className='h-24 w-24 mt-4'
          src='https://cdn-icons-png.flaticon.com/512/4379/4379542.png'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-20 w-20'
          src='https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp'
          alt=''
        />
        <p>Price: $1000</p>
        <button
          onClick={() => {
            props.addToCartHandler({ price: 1000, name: 'i-phone 11' });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Home;
