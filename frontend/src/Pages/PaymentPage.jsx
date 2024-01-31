import React from 'react'
import StoreNavbar from '../Components/StoreNavbar';
import Cod from '../Media/paymentIcons/Cod.png';
import BharatPay from '../Media/paymentIcons/bharatpay.png';
import creditpay from '../Media/paymentIcons/creditpay.png';
import netbanking from '../Media/paymentIcons/netbanking.png';

function PaymentPage() {
  return (
    <>
    <StoreNavbar/>
    <div className='flex justify-center items-center h-screen'>
        
  <div className='border border-solid border-black w-4/6 h-5/6 mb-20'>
           <div className='border border-solid border-black w-96 h-full flex flex-col items-center justify-between'>
             <h1 className='text-xl'><b>PAYMENT METHODS</b></h1>
             <ul className='payment-buttons mb-2'>
                <li className="mb-8 m-20"><b>CASH ON DELIVERY</b><img src={Cod} alt='cash-on-delivery'></img></li>
                <li className="mb-8 m-20"><b>UPI</b><span className='flex'><img src={BharatPay} alt='cash-on-delivery' className='w-20 h-20 '></img></span></li>
                <li className="mb-8 m-20"><b>DEBIT CARD / CREDIT CARD </b><img src={creditpay} alt='credit-pay'></img>(COMING SOON )</li>
                <li className="mb-8 m-20"><b>NET BANKING</b><img src={netbanking} alt='credit-pay'></img>(COMING SOON)</li>
                
             </ul>
           </div>
   
  </div>
</div>
    </>
  )
}

export default PaymentPage