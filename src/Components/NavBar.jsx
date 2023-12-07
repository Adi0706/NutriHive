import React from 'react'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <>
    <nav className='NavBar'>
        

        <ul className='navigation-list'>
<Link to='/Store' style={{textDecoration:"none"}}><li className='item'>STORE</li></Link>
<li className='item'>LOGIN/REGISTER</li>


        </ul>
    </nav>
    
    </>
  )
}

export default NavBar