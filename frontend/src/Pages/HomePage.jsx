import React, { useEffect, useState } from "react";
import Background from "../Media/Background.mp4";
import NavBar from "../Components/NavBar";
import Logo from "../Media/Logo.png";

function HomePage() {
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWarning(true);
    }, 1000); 
  }, []);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setWarning(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [warning]);

  const renderWarning = () => {
    if (warning) {
      return (
        <div className="w-{205} h-{205} bg-zinc-50  bg-opacity-20 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-5 rounded-2xl">
        <p className="text-white text-center " >LOGIN / REGISTER ON OUR WEBSITE TO BUY OUR PRODUCTS</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="relative video-container">
        <div className="overlay"></div>

        <video className="Background-Video" autoPlay loop muted>
          <source src={Background} type="video/mp4" />
        </video>

        {renderWarning()}

        <NavBar />
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
