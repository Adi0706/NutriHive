import React, { useEffect, useState } from "react";
import LoginNavbar from '../../Components/PostLogin/LoginNavbar'
import Logo from "../../Media/Logo.png";
import LoginBackground from '../../Media/LoginBackground.mp4';
function HomePage() {



  return (
    <>
      <div className="relative video-container">
        <div className="overlay"></div>

        <video className="Background-Video" autoPlay loop muted>
          <source src={LoginBackground} type="video/mp4" />
        </video>

   

        <LoginNavbar />
        <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "23%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          WHERE NATURE MEETS NOURISHMENT.
        </p>
        <img
          src={Logo}
          alt="logo"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "12%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "650px",
          }}
        ></img>
        <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "23%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          WHERE NATURE MEETS NOURISHMENT.
        </p>

        <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "98%",
            left: "50%",
            fontSize: "10px",
            transform: "translate(-50%, -50%)",
          }}
        >
          ©-NUTRIHIVE-2023
        </p>
      </div>
    </>
  );
}

export default HomePage;
