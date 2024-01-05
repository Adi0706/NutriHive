import React from 'react';
import Logo2 from '../Media/Logo2.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='border-solid border-black w-100 h-auto flex flex-col items-center px-6 py-8'>
      <Link to='/'><img src={Logo2} alt='Logo2' className='w-52 mt-0'></img></Link>

      

      <p
        style={{
          zIndex: '2',
          color: 'black',
          position: 'absolute',
          top: '98%',
          left: '50%',
          fontSize: '15px',
          transform: 'translate(-50%, -50%)',
        }}
      > 
        © NUTRIHIVE 2023
      </p>
    </section>
  );
}

export default Footer;
