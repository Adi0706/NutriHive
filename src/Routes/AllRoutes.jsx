import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import HomePage from '../Pages/HomePage';
import Store from '../Pages/Store';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function AllRoutes() {
    return (
      <>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Store' element={<Store/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
  
      </Routes>
      
      
      </>
    )
  }
  
  export default AllRoutes;