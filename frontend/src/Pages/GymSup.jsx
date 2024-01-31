import React, { useState } from 'react';
import StoreNavbar from '../Components/StoreNavbar';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import whey1 from '../Media/GYMcards/whey1.png';
import whey2 from '../Media/GYMcards/whey2.png';
import whey3 from '../Media/GYMcards/whey3.png';
import pre1 from '../Media/GYMcards/pre1.png';
import pre2 from '../Media/GYMcards/pre2.png';
import pre3 from '../Media/GYMcards/pre3.png';
import cre1 from '../Media/GYMcards/cre1.png';
import cre2 from '../Media/GYMcards/cre2.png';
import cre3 from '../Media/GYMcards/cre3.png';
import { useMyContext } from '../Context';

function GymSup() {
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
      CardImage: whey1,
      Category: 'whey',
    },
    {
      id: 2,
      CardName: 'MusleTech : Mass Tech Elite',
      CardPrice: 'Rs.3000/-',
      CardImage: whey2,
      Category: 'whey',
    },
    {
      id: 3,
      CardName: 'ProJym : Ultra-Premium Blend.',
      CardPrice: 'Rs.2000/-',
      CardImage: whey3,
      Category: 'whey',
    },
    {
      id: 4,
      CardName: 'C4 : Extreme Pre-Workout',
      CardPrice: 'Rs.1200/-',
      CardImage: pre1,
      Category: 'pre-workout',
    },
    {
      id: 5,
      CardName: 'Optimum Nutrition : Gold Standard Pre-Workout',
      CardPrice: 'Rs.1650/-',
      CardImage: pre2,
      Category: 'pre-workout',
    },
    {
      id: 6,
      CardName: 'MyPro : Pre-Workout',
      CardPrice: 'Rs.1700/-',
      CardImage: pre3,
      Category: 'pre-workout',
    },
    {
      id: 7,
      CardName: 'My Protein : Creatine Monohydrate',
      CardPrice: 'Rs.1100/-',
      CardImage: cre1,
      Category: 'creatine',
    },
    {
      id: 8,
      CardName: 'Optimum Nutrition : Micronised Creatine Monohydrate',
      CardPrice: 'Rs.800/-',
      CardImage: cre2,
      Category: 'creatine',
    },
    {
      id: 9,
      CardName: 'BioTech USA : 100% Creatine Monohydrate',
      CardPrice: 'Rs.1000/-',
      CardImage: cre3,
      Category: 'creatine',
    },
  ];

  const categories = ['whey', 'pre-workout', 'creatine'];

  const filteredData = filter
    ? GymData.filter((item) => item.Category === filter)
    : GymData;

  return (
    <>
      <StoreNavbar />
      <p className='text-center font-mono'>
        <b>
          <Link to='/Store'>STORE </Link>/ GYM SUPPLEMENT STORE
        </b>
      </p>

      <div className='flex relative'>
        <section className='flex flex-col w-52 h-96 items-center justify-around ml-52 font-mono z-10'>
          <div className='flex items-center'>
            <FaFilter />
            <p className='ml-2'>FILTERS</p>
            <button
              className='reset-button ml-2'
              onClick={() => setFilter(null)}
            >
              RESET
            </button>
          </div>
          <ul className='font-bolder text-xl cursor-pointer'>
            {categories.map((category) => (
              <li
                key={category}
                className='m-9'
                onClick={() => setFilter(category)}
              >
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </section>
        <section className='grid grid-cols-3 ml-20 z-10 max-w-screen-xl mx-auto'>
          {filteredData.map((item) => (
            <div
              key={item.id}
              className=' p-2 m-1  flex flex-col items-center  bg-zinc-50  rounded-xl bg-opacity-50'
            >
              <h1>
                <b>{item.CardName}</b>
              </h1>
              <img
                src={item.CardImage}
                alt='whey-image'
                className='w-48 h-52'
              />
              <p className='text-xl'>
                <b>{item.CardPrice}</b>
              </p>
              <div className='flex mt-4'>
                <button className='card-button'>BUY NOW</button>
                <button
                  className='card-button ml-20'
                  onClick={() => addtoCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default GymSup;
