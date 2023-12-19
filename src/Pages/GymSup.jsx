import React from 'react'
import GymStore from '../Media/GymStore.png';
import {Link} from 'react-router-dom';
import Logo from "../Media/Logo.png";
function GymSup() {
  return (
<>
<div className="relative">
      <img src={ GymStore} alt="storebackground" className="w-full h-full object-cover  " />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Link to ='/'> <img
          src={Logo}
          alt="logo"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "350px",
            cursor:"pointer",
            position:"fixed"
          }}
        ></img> </Link>
         <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize:"20px",
            position:"fixed",
            fontWeight:"bolder"
          }}
        >
          GYM SUPPLEMENT STORE
        </p>
      </div>
      <div>
       
      </div>
</>
  )
}

export default GymSup