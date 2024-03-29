import React, { useState } from "react";
import StoreNavbar from "../Components/StoreNavbar";
import { useMyContext } from "../Context";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useMyContext();
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);

  const calculateTotalQuantity = (productId) => {
    return cart.reduce(
      (total, item) => (item.id === productId ? total + 1 : total),
      0
    );
  };

  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) =>
        total +
        parseFloat(item.CardPrice.replace("Rs.", "").replace("/-", "")) *
          calculateTotalQuantity(item.id),
      0
    );
  };

  const handleDecrement = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);

    if (index !== -1 && calculateTotalQuantity(productId) > 1) {
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const handleIncrement = (productId) => {
    setCart([...cart, cart.find((item) => item.id === productId)]);
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

 const handleNavigate =()=>{
  navigate('/success')
  setCart([]);
 }
  

  return (
    <>
      <StoreNavbar />
      <div className=" ">
        <h1 className="text-3xl font-bold text-center">
          YOUR CART
          <br />
          <br />
          {cart.length === 0 && (
            <p className="text-4xl font-bold text-center">Your cart is empty !</p>
          )}
        </h1>

        {cart.length > 0 && (
          <>
            <div className=" flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2 text-center">Total Amount:</h2>
              <p className="text-2xl font-bold text-center">{`Rs. ${calculateTotalAmount()}/-`}</p>
              <button className="payment-btn" onClick={handleNavigate}>Proceed to Pay</button>
            </div>

            {/* Payment Success Modal */}
            {isPaymentSuccess && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md text-center">
                  <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
                  <p className="text-lg">Thank you for your purchase.</p>
                  <Link to="/Store" className="block mt-4 text-blue-500 underline">Continue Shopping</Link>
                </div>
              </div>
            )}

            <div className="p-12 m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...new Set(cart.map((product) => product.id))].map((productId) => {
                const product = cart.find((item) => item.id === productId);
                return (
                  <div key={productId} className="p-4  flex flex-col">
                    <img
                      src={product.CardImage}
                      alt={`cart-item-${productId}`}
                      className="w-full h-96 object-fit"
                    />
                    <p className="text-lg font-bold">{product.CardName}</p>
                    <p className="text-xl">{product.CardPrice}</p>
                    <p className="text-sm w-auto flex items-center">
                      <b>QUANTITY:</b>
                      <button
                        className="m-2 p-1 text-xl"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </button>
                      <b> {calculateTotalQuantity(product.id)}</b>
                      <button
                        className="m-2 p-1 text-xl"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="m-2 p-1 text-xl"
                        onClick={() => handleDelete(product.id)}
                      >
                        <RiDeleteBin6Fill />
                      </button>
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
