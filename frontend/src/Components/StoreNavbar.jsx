import React, { useEffect, useState } from "react";
import logoNutrihive from "../Media/Logo2.png";
import { FaCartShopping } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useMyContext } from "../Context";

function StoreNavbar() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const {cart} = useMyContext();


  const handleClick = () => {
    setPopup(true);
  }

  const renderPopup = () => {
    if (popup) {
      return (
        <div className="absolute top-full left-0 bg-white p-2 shadow-slate-200 opacity-2">
          <ul className="cursor-pointer m-0">
          <Link to='/Store'><li className="m-2"><b>Store</b></li></Link>
            <li onClick={handleLogout} className="m-2"><b>Logout</b></li>
         
          </ul>
        </div>
      );
    }
  }

  const handleLogout = () => {
    navigate('/')
  }

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setPopup(false);
    }, 3000);
  }, [popup]);


  return (
    <>
      <nav className="flex items-center justify-evenly mb-4 shadow-xl">
        <Link to="/Store">
          <img
            src={logoNutrihive}
            alt="nutrihive-logo"
            className="w-25 h-20"
          />
        </Link>
        <ul className="flex items-center justify-between w-52 mt-7">
          <Link to='/Cart'>
            
            <li className="list-none relative flex" >
              <FaCartShopping className="w-6 h-7 cursor-pointer" /> <span className="text-center bg-red-400 rounded-full p-1">
                  ({cart.length})
                </span>
              <br/>
                
              
            </li>
          </Link>
          <li className="list-none relative">
            <RiAccountCircleFill className="w-6 h-7 cursor-pointer" onClick={handleClick} />
            {renderPopup()}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default StoreNavbar;
