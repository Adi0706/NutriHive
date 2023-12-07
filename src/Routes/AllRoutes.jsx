import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import HomePage from '../Pages/HomePage';
import Store from '../Pages/Store';
function AllRoutes() {
    return (
      <>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Store' element={<Store/>}></Route>
  
      </Routes>
      
      
      </>
    )
  }
  
  export default AllRoutes;