import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import HomePage from '../Pages/HomePage';
import Store from '../Pages/Store';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GymSup from '../Pages/GymSup';
import HealthSup from '../Pages/HealthSup';
import AyurvedSup from '../Pages/AyurvedSup' ; 
function AllRoutes() {
    return (
      <>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Store' element={<Store/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/GymSupplement' element={<GymSup/>}></Route>
      <Route path='/HealthSupplement' element={<HealthSup/>}></Route>
      <Route path='/AyurvedSupplement' element={<AyurvedSup/>}></Route>
  
      </Routes>
      
      
      </>
    )
  }
  
  export default AllRoutes;