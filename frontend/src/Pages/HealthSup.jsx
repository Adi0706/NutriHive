import React, { useState } from 'react';
import StoreNavbar from '../Components/StoreNavbar';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import vit1 from '../Media/HealthSup/vit1.png';
import vit2 from '../Media/HealthSup/vit2.png';
import vit3 from '../Media/HealthSup/vit3.png';
import sport1 from '../Media/HealthSup/sport1.png';
import sport2 from '../Media/HealthSup/sport2.png';
import sport3 from '../Media/HealthSup/sport3.png';
import dig1 from '../Media/HealthSup/dig1.png';
import dig2 from '../Media/HealthSup/dig2.png';
import dig3 from '../Media/HealthSup/dig3.png';
import healthsupbg from '../Media/Healthbg.png';
import { useMyContext } from '../Context';


function HealthSup() {
  const [filter, setFilter] = useState(null);
  const { cart, setCart } = useMyContext();

  const addtoCart = (item) => {
    setCart([...cart, item]);
  };
  const HealthData = [
    {
      id: 1,
      CardName: 'HK VITALS :Multivitamin for Women',
      CardPrice: 'Rs.500/-',
      CardImage: vit1,
      Category: 'Vitamins and Minerals',
    },
    {
      id: 2,
      CardName: 'Optimum Nutrition : Optimen - Multivitamin',
      CardPrice: 'Rs.700/-',
      CardImage: vit2,
      Category: 'Vitamins and Minerals',
    },
    {
      id: 3,
      CardName: 'Premium Grade : Vitamin Stack',
      CardPrice: 'Rs.900/-',
      CardImage: vit3,
      Category: 'Vitamins and Minerals',
    },
    {
      id: 4,
      CardName: 'Optimum Nutrition : Gold Standard BCAA',
      CardPrice: 'Rs.850/-',
      CardImage: sport1,
      Category: 'Sports Nutrition',
    },
    {
      id: 5,
      CardName: 'Optimum Nutrition : Fish Oil',
      CardPrice: 'Rs.650/-',
      CardImage: sport2,
      Category: 'Sports Nutrition',
    },
    {
      id: 6,
      CardName: 'Optimum Nutrition : Glutamine',
      CardPrice: 'Rs.700/-',
      CardImage: sport3,
      Category: 'Sports Nutrition',
    },
    {
      id: 7,
      CardName: 'mindbodygreen: probiotic+',
      CardPrice: 'Rs.500/-',
      CardImage: dig1,
      Category: 'Digestive Health',
    },
    {
      id: 8,
      CardName: 'Yakult: Probiotic Drink',
      CardPrice: 'Rs.800/-',
      CardImage: dig2,
      Category: 'Digestive Health',
    },
    {
      id: 9,
      CardName: 'Enzymedica: Digest Basic',
      CardPrice: 'Rs.700/-',
      CardImage: dig3,
      Category: 'Digestive Health',
    },
  ];

  const categories = ['Vitamins and Minerals', 'Sports Nutrition', 'Digestive Health'];

  const filteredData = filter ? HealthData.filter((item) => item.Category === filter) : HealthData;

  return (
    <>
      <StoreNavbar />
    
      <p className='text-center font-mono'>
        <b>
          <Link to='/Store'>STORE </Link>/ GENERAL HEALTH SUPPLEMENT STORE
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
                <button className='card-button'>BUY NOW</button>
                <button className='card-button ml-20' onClick={() => addtoCart(item)}>ADD TO CART </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default HealthSup;
