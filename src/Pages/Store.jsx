import React from 'react';
import StoreBackground from '../Media/store.png';
import Logo from "../Media/Logo.png";
import {Link} from 'react-router-dom' ; 
function Store() {
  return (
    <>
      <div className="relative">
      <img src={StoreBackground} alt="storebackground" className="w-full h-52 object-cover " />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Link to ='/'> <img
          src={Logo}
          alt="logo"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            cursor:"pointer"
          }}
        ></img> </Link>
         <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize:"10px"
          }}
        >
          WHERE NATURE MEETS NOURISHMENT.
        </p>
      </div>
      <div>
       
      </div>
    </>
  );
}

export default Store;
