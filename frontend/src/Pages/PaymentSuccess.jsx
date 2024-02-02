import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <>
  <div className='flex justify-center items-center h-screen'>
  <div className=' w-3/6 flex flex-col items-center'>
    <p className='text-4xl'>PAYMENT SUCCESSFUL</p>
    <FcApproval className='w-20 h-20' />
    <Link to='/LoginHomepage'><FaHome className='m-7 w-7 h-7' /></Link>
  </div>
</div>

    </>
  )
}

export default PaymentSuccess