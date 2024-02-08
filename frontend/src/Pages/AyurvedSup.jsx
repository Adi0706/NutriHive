import React from 'react'
import StoreNavbar  from '../Components/StoreNavbar';
import { Link } from 'react-router-dom';
import ay1 from '../Media/AyurvedSup/ay1.png';
import ay2 from '../Media/AyurvedSup/ay2.png';
import ay3 from '../Media/AyurvedSup/ay3.png';
import shil1 from '../Media/AyurvedSup/shil1.png';
import shil2 from '../Media/AyurvedSup/shil2.png';
import shil3 from '../Media/AyurvedSup/shil3.png';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useMyContext } from '../Context';


function AyurvedSup() {
  const { cart, setCart } = useMyContext();
  const [filter, setFilter] = useState(null);


  const addtoCart = (item) => {
    setCart([...cart, item]);
  };

  const GymData = [
    {
      id: 1,
      CardName: 'Optimum Nutrition : Gold Standard Whey',
      CardPrice: 'Rs.2500/-',
      CardImage: ay1,
      Category: 'Ashwgandha',
    },
    {
      id: 2,
      CardName: 'MusleTech : Mass Tech Elite',
      CardPrice: 'Rs.3000/-',
      CardImage: ay2,
      Category: 'Ashwgandha',
    },
    {
      id: 3,
      CardName: 'ProJym : Ultra-Premium Blend.',
      CardPrice: 'Rs.2000/-',
      CardImage: ay3,
      Category: 'Ashwgandha',
    },
    {
      id: 4,
      CardName: 'C4 : Extreme Pre-Workout',
      CardPrice: 'Rs.1200/-',
      CardImage: shil1,
      Category: 'Shilajit',
    },
    {
      id: 5,
      CardName: 'Optimum Nutrition : Gold Standard Pre-Workout',
      CardPrice: 'Rs.1650/-',
      CardImage: shil2,
      Category: 'Shilajit',
    },
    {
      id: 6,
      CardName: 'MyPro : Pre-Workout',
      CardPrice: 'Rs.1700/-',
      CardImage: shil3,
      Category: 'Shilajit',
    }
  ];
  const categories = ['Ashwgandha', 'Shilajit'];

  const filteredData = filter
    ? GymData.filter((item) => item.Category === filter)
    : GymData;
  return (
    <>
    <StoreNavbar />
    <p className='text-center font-mono'>
        <b>
          <Link to='/Store'>STORE </Link>/ AYURVEDIC SUPPLEMENT STORE
        </b>
      </p>
      <div className='flex items-center'>
        <div className='mx-2'>
          <hr className='h-full border-r border-solid border-black' />
        </div>
        <hr className='w-full' />
      </div>
      <div className='flex'>
        <section className='flex flex-col w-52 h-96 items-center justify-around ml-52 font-mono '>
          <div className='flex items-center'>
            <FaFilter />
            <p className='ml-2'>FILTERS</p>
            <button className='reset-button ml-2' onClick={() => setFilter(null)}>
              RESET
            </button>
          </div>
          <ul className='font-bolder text-xl cursor-pointer'>
            {categories.map((category) => (
              <li key={category} className='m-9' onClick={() => setFilter(category)}>
                {category.toUpperCase()} 
              </li>
            ))}
          </ul>
        </section>
        <section className='grid grid-cols-3 ml-20'>
          {filteredData.map((item) => (
            <div key={item.id} className='p-4 m-2 flex flex-col items-center  rounded-xl bg-opacity-50'>
              <h1>
                <b>{item.CardName}</b>
              </h1>
              <img src={item.CardImage} alt='whey-image' className='w-48 h-52' />
              <p className='text-xl'>{item.CardPrice}</p>
              <div className='flex mt-4'>
                
                <button className='card-button ml-2'  onClick={() => addtoCart(item)}>ADD TO CART </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default AyurvedSup