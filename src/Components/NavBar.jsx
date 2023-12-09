import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
function NavBar() {
  
  const [authPopup,setAuthPopUp] = useState(false);


  const handlepopup =()=>{
    setAuthPopUp(true) ; 
    
  }
  const handlepopupClose =()=>{
    setAuthPopUp(false)
  }


  const renderPopup=()=>{
    if(authPopup === true){
      return(
    
        <div className="w-full h-full bg-zinc-100 absolute z-3">
              <span className='bg-zinc-50 p-10 border-solid'>
                 <ul className='NavBar'><li>LOGIN</li></ul>
              </span>
        </div>
        
      )
    }
  }

  return (
    <>
    <nav className='NavBar'>
        

        <ul className='navigation-list'>
<Link to='/Store' style={{textDecoration:"none"}}><li className='item'>STORE</li></Link>
<li className='item' onMouseEnter={handlepopup}
 onMouseLeave={handlepopupClose}>< VscAccount style={{width:"30px",height:"30px"}}/></li>


        </ul>
        {renderPopup()}
    </nav>
    
    </>
  )
}

export default NavBar