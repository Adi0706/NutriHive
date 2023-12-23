import React from 'react';
import GymStore from '../Media/GymStore.png';
import { Link } from 'react-router-dom';
import Logo from '../Media/Logo.png';
import whey1 from '../Media/GYMcards/whey1.png' ; 
import whey2 from '../Media/GYMcards/whey2.png';

function GymSup() {
  const GymData = [
    {
      id: '1',
      CardName: 'ON WHEY GOLD STANDARD',
      ItemPrice: 'Rs.20',
      ItemImage: whey1
    },
    {
      id: '1',
      CardName: 'product2',
      ItemPrice: 'Rs.20',
      ItemImage: whey2
    },
    {
      id: '1',
      CardName: 'ON WHEY GOLD STANDARD',
      ItemPrice: 'Rs.20',
      ItemImage: whey1
    },
    {
      id: '1',
      CardName: 'ON WHEY GOLD STANDARD',
      ItemPrice: 'Rs.20',
      ItemImage: whey1
    },
  
  ];

  

  return (
    <>
      <div className="relative">
        <img src={GymStore} alt="storebackground" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Link to="/">
          {' '}
          <img
            src={Logo}
            alt="logo"
            style={{
              zIndex: '2',
              position: 'absolute',
              top: '8%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '350px',
              cursor: 'pointer',
              position: 'fixed',
            }}
          ></img>{' '}
        </Link>
        <p
          style={{
            zIndex: '2',
            color: 'white',
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            position: 'fixed',
            fontWeight: 'bolder',
          }}
        >
          GYM SUPPLEMENT STORE
        </p>
      </div>
      <div>
        <div className="ProductCard">
          {GymData.map((item) => (
            <div key={item.id} className=" bg-zinc-50 w-36 f-96 opacity-2">
              
              <div className="imageCard"><img src={item.ItemImage} className='w-36 h-48'></img></div>
              <p><b>{item.CardName}</b></p>
              <p>{item.ItemPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GymSup;
