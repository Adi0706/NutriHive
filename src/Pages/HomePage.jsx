import React from "react";
import Background from "../Media/Background.mp4";
import NavBar from "../Components/NavBar";
import Logo from "../Media/Logo.png";

function HomePage() {
  return (
    <>
      <div className="video-container">
        <div className="overlay"></div>

        <video className="Background-Video" autoPlay loop muted>
          <source src={Background} type="video/mp4" />
        </video>
        <NavBar />
        <img
          src={Logo}
          alt="logo"
          style={{
            zIndex: "1",
            position: "absolute",
            top: "12%",
            left: "50%",
            transform:"translate(-50%,-50%)",
            width:"650px",
            
          }}
        ></img>
        <p style={{zIndex:"2",color:"white",position:"absolute", top: "23%",
            left: "50%",
            transform:"translate(-50%,-50%)"}}>WHERE NATURE MEETS NOURISHMENT.</p>

             <p style={{zIndex:"2",color:"white",position:"absolute", top: "98%",
            left: "50%",fontSize:"10px",
            transform:"translate(-50%,-50%)"}}> ©-NUTRIHIVE-2023</p>
      </div>
    </>
  );
}

export default HomePage;
