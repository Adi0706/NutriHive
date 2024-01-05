import React from 'react';
import GymStore from '../Media/GymStore.png';
import { Link } from 'react-router-dom';
import Logo from '../Media/Logo.png';
import whey1 from '../Media/GYMcards/whey1.png';
import whey2 from '../Media/GYMcards/whey2.png';
import whey3 from '../Media/GYMcards/whey3.png';
import pre1 from '../Media/GYMcards/pre1.png';
import pre2 from '../Media/GYMcards/pre2.png';
import pre3 from '../Media/GYMcards/pre3.png';
import Footer from '../Components/Footer';

function GymSup() {
  const GymData = [
    {
      id: '1',
      CardName: 'OnWhey : Gold Standard',
      ItemPrice: 'Rs.2800',
      ItemImage: whey1
    },
    {
      id: '2',
      CardName: 'MuscleTech : Mass Tech Elite',
      ItemPrice: 'Rs.3000',
      ItemImage: whey2
    },
    {
      id: '3',
      CardName: 'ProJym : Ultra-Premium Protein Blend.',
      ItemPrice: 'Rs.4000',
      ItemImage: whey3
    },
    {
      id: '4',
      CardName: 'C4: Extreme PreWorkout',
      ItemPrice: 'Rs.1500',
      ItemImage: pre1
    },
    {
      id: '5',
      CardName: 'Gold Standard : PreWorkout',
      ItemPrice: 'Rs.2000',
      ItemImage: pre2
    },
    {
      id: '6',
      CardName: 'My Pro : PreWorkout',
      ItemPrice: 'Rs.2200',
      ItemImage: pre3
    },
  ];

  return (
    <>
      <div className="relative">
        <img
          src={GymStore}
          alt="storebackground"
          className="w-full h-auto object-fit"
          style={{ minHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Link to="/">
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
          />
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

      <div className="ProductCard">
        {GymData.map((item) => (
          <div key={item.id} className="bg-zinc-50 w-auto h-auto f-96 opacity-2 flex flex-col items-center justify-center  mt-6 rounded-xl">
            <div className="imageCard">
              <img src={item.ItemImage} className='w-65 h-80' alt={`Product: ${item.CardName}`} />
            </div>
            <p className="mt-2"><b>{item.CardName}</b></p>
            <p>{item.ItemPrice}</p>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default GymSup;
