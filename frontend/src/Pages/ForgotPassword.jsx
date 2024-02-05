import React from "react";
import NavBar from "../Components/NavBar";
import ForgotBackground from "../Media/forgotbackground.png";
import { FcAssistant } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/forgotpassword", { email: email })
      .then(response => {
        console.log(response);
        // navigate("/Login");
        alert("Reset Link Sent ! Check your Email")
      })
      .catch(error => {
        console.error("Axios error:", error);
        
      });
  };

  return (
    <>
      <NavBar />
      <div className="overlay"></div>
      <img
        src={ForgotBackground}
        alt="background-forgotPassword"
        className="login-bg"
      />
      <div className="w-96 h-96 bg-zinc-50 absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-opacity-80">
        <div className="h-auto flex flex-col items-center">
          <FcAssistant className="w-12 h-12" />
          <p>Forgot Password ?</p>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <label htmlFor="emailInput" className="text-xl">
            <b>Enter your Email</b>
          </label>
          <input
            type="email"
            name="email"
            id="emailInput"
            className="bg-zinc-100 w-80 h-12 rounded-xl m-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="btn flex flex-col items-center">
          <button className="p-2 m-2 bg-zinc-50 rounded-xl text-sm text-black hover:bg-zinc-400" onClick={handleSubmit}>
            <b>SEND RESET LINK</b>
          </button>
        </div>
      </div>
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
    </>
  );
}

export default ForgotPassword;
