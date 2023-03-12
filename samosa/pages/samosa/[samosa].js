import Samosa from "@/models/Samosa"
import mongoose from "mongoose"
import { useEffect } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { FaCartPlus } from 'react-icons/fa'

function SamosaSlug({ data, rate, addToCart }) {
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

    return (
        <div>{
            data.map((samosa) => (
                <section key={samosa._id} className="text-gray-600 body-font overflow-hidden">
                    {useEffect(() => rate(samosa))}
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt={samosa.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={samosa.image} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">INDIA'S PRIDE</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{samosa.name}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <div className="inline-flex text-xl mt-1.5 justify-between mb-3 ">
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
                                    </span>
                                    <span className="text-gray-600 mt-1 ml-3">{samosa.reviews}K Reviews</span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <p className="leading-relaxed">{samosa.description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div className="flex">
                                        <span className="mr-2">AvailableQty</span>
                                        <span className="text-emerald-500 font-semibold">{samosa.availableQty * 10} left</span>
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3">Quantity</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium mt-1.5 text-2xl text-gray-900">₹{samosa.price}</span>
                                    <button
                                        className="inline-flex justify-center ml-4 -mt-1 px-2.5 border-2 cursor-pointer focus:outline-none bg-amber-300 py-1.5 rounded-md border-transparent"
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
                                    </button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

SamosaSlug.getInitialProps = async (ctx) => {

    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }

    let samosa = await Samosa.find({ slug: ctx.query.samosa })

    const datax = JSON.parse(JSON.stringify(samosa));

    return { data: datax }
}

export default SamosaSlug