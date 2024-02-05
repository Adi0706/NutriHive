import React, { useState } from 'react';
import ForgotBackground from "../Media/forgotbackground.png";
import { FcAssistant } from "react-icons/fc";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  const { id, token } = useParams(); // destructure id and token from useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    axios.post(`http://localhost:8000/resetpassword/${id}/${token}`, { password })
      .then(response => {
       
        
          console.log("Response from server:", response);
  
          alert("Your password has been reset!");
          navigate("/Login");
      
      })
      .catch(error => {
        console.error("Error in axios request:", error);
      });
  };
  

  return (
    <>
      <div className="overlay"></div>
      <img
        src={ForgotBackground}
        alt="background-forgotPassword"
        className="login-bg"
      />
      <div className="w-96 h-96 bg-zinc-50 absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-opacity-80">
        <div className="h-auto flex flex-col items-center">
          <FcAssistant className="w-12 h-12" />
          <p>RESET PASSWORD</p>
        </div>
        <div className="mt-5 flex flex-col items-center">
          <label htmlFor="passwordInput" className="text-xl">
            <b> NEW PASSWORD</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder='Enter a new Password'
            id="passwordInput"
            className="bg-zinc-100 w-80 h-12 rounded-xl m-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn flex flex-col items-center">
          <button className="p-2 m-2 bg-zinc-50 rounded-xl text-sm text-black hover:bg-zinc-400" onClick={handleSubmit}>
            <b>UPDATE PASSWORD</b>
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

export default ResetPassword;
