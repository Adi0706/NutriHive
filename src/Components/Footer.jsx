import React from 'react';
import Logo2 from '../Media/Logo2.png';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className='border-solid border-black w-100 h-auto flex items-center justify-around px-6'>
      <Link to='/'><img src={Logo2} alt='Logo2' className='w-60 ml-0 mt-0'></img></Link>

      <ul className='flex  flex-row list-none p-20'>
        <li className='text-lg '><b>STORE </b></li>
        <li className='mx-4'>WHEY PROTEIN STORE </li>
        <li className='mx-4'>PREWORKOUT STORE</li>
        <li className='mx-4'>CREATINE STORE</li>
        <li className='mx-4'>AYURVEDIC SUPPLEMENTS</li>
        <ul className='flex  flex-row list-none'>
        <li className='text-lg '><b>ACCOUNT </b></li>
        <li className='mx-4'> LOGIN </li>
        <li className='mx-4'> REGISTER</li>
        
      </ul>
      
      </ul>
      <p
          style={{
            zIndex: "2",
            color: "black",
            position: "absolute",
            top: "110%",
            left: "50%",
            fontSize: "15px",
            transform: "translate(-50%, -50%)",
          }}
        >
          ©-NUTRIHIVE-2023
        </p>
     
    </section>
    

  );
}

export default Footer;
