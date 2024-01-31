import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import HomePage from '../Pages/HomePage';
import Store from '../Pages/Store';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import GymSup from '../Pages/GymSup';
import HealthSup from '../Pages/HealthSup';
import AyurvedSup from '../Pages/AyurvedSup' ; 
import Cart from '../Pages/Cart';
import ForgotPassword from '../Pages/ForgotPassword';
import LoginHomepage from '../Pages/PostLogin/LoginHomepage';
import About from '../Pages/About';
import PaymentPage from '../Pages/PaymentPage';
function AllRoutes() {
    return (
      <>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Store' element={<Store/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
      <Route path='/GymSupplement' element={<GymSup/>}></Route>
      <Route path='/HealthSupplement' element={<HealthSup/>}></Route>
      <Route path='/AyurvedSupplement' element={<AyurvedSup/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/LoginHomepage' element={<LoginHomepage/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Payment' element={<PaymentPage/>}></Route>
      
  
      </Routes>
      
      
      </>
    )
  }
  
  export default AllRoutes;