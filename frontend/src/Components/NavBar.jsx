import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";

function NavBar() {
  const [authPopup, setAuthPopUp] = useState(false);

  const handlePopup = () => {
    setAuthPopUp(true);
  }

 

  useEffect(() => {
    let timer;

timer = setTimeout(()=>[
  setAuthPopUp(false)
],10000)

  }, [authPopup]);

  const renderPopup = () => {
    if (authPopup === true) {
      return (
        <div className="w-full h-full absolute z-3">
          <ul className='text-white mt-3 ml-10'>
            <li className='item'>
              <Link to='/Login' className='cursor-pointer '>
                LOGIN
              </Link>
            </li>
            <li className='mt-3 item'>
              <Link to='/Register' className='cursor-pointer '>
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <>
      <nav className='NavBar'>
        <ul className='navigation-list ml-5'>
          <Link to='/About' style={{ textDecoration: "none" }}>
            <li className='item py-5'>ABOUT</li>
          </Link>
          <li className='item' onClick={handlePopup}>
            <VscAccount style={{ width: "30px", height: "30px" }} />
          </li>
        </ul>
        {renderPopup()}
      </nav>
    </>
  )
}

export default NavBar;
