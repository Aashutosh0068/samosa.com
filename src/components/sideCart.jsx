import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiCloseFill, RiShoppingCartFill } from "react-icons/ri";

const SideCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleIncrease = (index) => {
    const newItems = [...cartItems];
    newItems[index].quantity += 1;
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const handleDecrease = (index) => {
    const newItems = [...cartItems];
    if (newItems[index].quantity >= 2) {
      newItems[index].quantity -= 1;
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      document.getElementById(newItems[index].name).disabled = false;
    } else {
      document.getElementById(newItems[index].name).disabled = true;
    }
  };

  const handleCheckout = () => {
    // handle checkout logic here
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter(
      (item, itemIndex) => itemIndex !== index
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  useEffect(function handleRefresh() {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  },[]);

  const handleQuantity = (index) => {
    const cartQuantity = cartItems[index].quantity;
    if (cartQuantity === 1) {
      document.getElementById(cartItems[index].name).disabled = true;
    } else {
      document.getElementById(cartItems[index].name).disabled = false;
    }
  };

  const handleClose = () => {
    document.getElementById("cart").style = "display:none";
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      id="cart"
      className="fixed z-full bg-white overscroll-y-contain opacity-100 overflow-y-auto top-0 right-0 w-auto h-screen ease-in-out transition-shadow delay-1000 p-4 shadow-md hidden"
    >
      <div className="flex justify-between items-center">
        <h2 className="right-0 text-lg font-bold">Your Cart</h2>
        <span className="text-xl mb-1 font-bold cursor-pointer">
          <RiCloseFill onClick={handleClose} />
        </span>
      </div>
      {cartItems.length === 0 ? (
        <div className="m-4">
          <p>No cart item were found</p>
          <Link href="/menu" onClick={handleClose}><p className="text-blue-600 underline">Explore Menu</p></Link>
        </div>
      ) : (
        <>
          <div className="overflow-y-auto max-h-screen-60 my-6">
            {cartItems.map((item, index) => (
              <div
                className="flex items-center py-3 mb-2 border-b border-gray-300"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-md mr-3 mb-4"
                />
                <div className="flex-grow lg:w-48 mb-3.5 w-48 ml-1">
                  <p
                    className="text-gray-800  font-semibold text-lg hover:text-red-500 hover:line-through"
                    onClick={() => handleRemove(index)}
                  >
                    {item.name}
                  </p>
                  <p className=" text-yellow-500 font-semibold text-sm">
                    INR {item.price}
                  </p>
                  <p className="text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    id={item.name}
                    className="bg-amber-400 rounded-full mb-3 p-2 w-8 h-8 flex justify-center items-center disabled:bg-white mr-3.5"
                    onClick={() =>
                      handleDecrease(index) & handleQuantity(index)
                    }
                  >
                    <FaMinus className="text-md text-white" />
                  </button>
                </div>
                <p className="text-xl mb-3">{item.quantity}</p>
                <button
                  className="bg-amber-400 mb-3 ml-3.5 mr-2 rounded-full p-2 w-8 h-8 flex justify-center items-center "
                  onClick={() => handleIncrease(index) & handleQuantity(index)}
                >
                  <FaPlus className="text-md text-white" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3">
            <button
              className="bg-amber-400 w-1/2 rounded-lg text-lg font-semibold py-1 px-3 text-white"
              onClick={handleCheckout}
            >
             <p className="inline-flex mt-1"><div className="m-1 -ml-1 text-3xl"><RiShoppingCartFill/></div><span className="mt-1 text-lg ml-1">checkout</span></p>
            </button>
            <span className="text-xl font-semibold">Total : <span className="text-black font-semibold"> ₹{cartTotal.toFixed(2)}</span></span>
          </div>
        </>
      )}
    </div>
  );
};

export default SideCart;