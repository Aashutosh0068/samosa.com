import React, { useEffect } from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { toast } from "react-toastify";

function SamosaCard({ samosa, addToCart, rate }) {
  addToCart = (samosa) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let existingSamosa = cart.find((samosas) => samosas.id === samosa._id);

    if (existingSamosa) {
      existingSamosa.quantity += 1;
    } else {
      const samosa_one = {
        id: samosa._id,
        name: samosa.name,
        description: samosa.description,
        price: samosa.price,
        image: samosa.image,
      };

      cart.push({ ...samosa_one, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));

    toast.success((samosa.name + " sucessfully added in your cart").toString(), {
      autoClose: 500,
      position: 'top-right',
      closeOnClick: false,
      closeButton: false,
      hideProgressBar: true
  })
  };

  rate = (samosa) => {
    let rating = samosa.rating;

    if (rating == 1) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2").style = "display:flex";
      document.getElementById(samosa.name + "3").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 2) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 3) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3f").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 4) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3f").style = "display:flex";
      document.getElementById(samosa.name + "4f").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 5) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3f").style = "display:flex";
      document.getElementById(samosa.name + "4f").style = "display:flex";
      document.getElementById(samosa.name + "5f").style = "display:flex";
    } else if (rating == 1.5) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2h").style = "display:flex";
      document.getElementById(samosa.name + "3").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 2.5) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3h").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 3.5) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3f").style = "display:flex";
      document.getElementById(samosa.name + "4h").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    } else if (rating == 4.5) {
      document.getElementById(samosa.name + "1f").style = "display:flex";
      document.getElementById(samosa.name + "2f").style = "display:flex";
      document.getElementById(samosa.name + "3f").style = "display:flex";
      document.getElementById(samosa.name + "4f").style = "display:flex";
      document.getElementById(samosa.name + "5h").style = "display:flex";
    } else {
      document.getElementById(samosa.name + "1").style = "display:flex";
      document.getElementById(samosa.name + "2").style = "display:flex";
      document.getElementById(samosa.name + "3").style = "display:flex";
      document.getElementById(samosa.name + "4").style = "display:flex";
      document.getElementById(samosa.name + "5").style = "display:flex";
    }
  };

  useEffect(() => rate(samosa));

  return (
    <div className="bg-white border h-max rounded-lg shadow-xl w-80 m-6 overflow-hidden hover:opacity-90 hover:bg-slate-100">
      <div
        className="h-48 inset-0 overflow-hidden"
        onClick={() => rate(samosa)}
      >
        <img
          className="w-50 object-cover object-center"
          src={samosa.image}
          alt={samosa.name}
        />
      </div>
      <div className="p-6">
        <p className="text-lg cursor-pointer font-medium text-gray-800 mb-2">
          {samosa.name}
        </p>
        <p className="text-sm text-gray-500 mb-4">{samosa.description}</p>
        <div className="flex justify-between items-center">
          <div className="inline-flex text-xl justify-between mb-4 ">
            <BsStarFill
              id={samosa.name + "1f"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStar
              id={samosa.name + "1"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarFill
              id={samosa.name + "2f"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarHalf
              id={samosa.name + "2h"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStar
              id={samosa.name + "2"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarHalf
              id={samosa.name + "3h"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarFill
              id={samosa.name + "3f"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStar
              id={samosa.name + "3"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarFill
              id={samosa.name + "4f"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarHalf
              id={samosa.name + "4h"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStar
              id={samosa.name + "4"}
              className="mr-1.5  hidden text-yellow-500"
            />
            <BsStarHalf
              id={samosa.name + "5h"}
              className=" hidden text-yellow-500"
            />
            <BsStarFill
              id={samosa.name + "5f"}
              className=" hidden text-yellow-500"
            />
            <BsStar
              id={samosa.name + "5"}
              className=" hidden text-yellow-500"
            />
          </div>
          <p className="mb-4 text-right mr-1">{samosa.reviews}K Reviews</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-800">₹{samosa.price}</p>
          <a
            className="inline-flex justify-center px-2.5 border-2 cursor-pointer focus:outline-none bg-amber-300 py-1.5 rounded-md border-transparent"
            onClick={() => addToCart(samosa)}
          >
            <div className="inline-flex">
              <p className="mr-1.5 font-semibold text-white mt-1.5">
                Add To Cart
              </p>
              <div className="flex items-center justify-center h-9 w-9 bg-yellow-400 pointer-events-none text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none border-2 border-transparent">
                <FaCartPlus className="text-xl" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

  );
}

SamosaCard.propTypes = {
  samosa: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default SamosaCard;