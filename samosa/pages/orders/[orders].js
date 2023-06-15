import Order from "@/models/Order";
import userState from "@/values/userState";
import mongoose from "mongoose";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import React, {useEffect, useState} from "react";

const orderSummary = ({ order }) => {

    const [email, setemail] = useState('')
    useEffect(()=> setemail(userState().email))

    return (
        <>
            {
                order.alt_email === email ? (
                    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                        <div className="flex justify-start item-start space-y-2 flex-col ">
                            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{order._id}</h1>
                            <p className="text-base font-medium leading-6 text-gray-600">{"placed on " + (order.date).slice(0,10)}</p>
                        </div>
                        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                    <p className="text-lg md:text-xl w-full pb-10 border-gray-200 border-b first-line:font-semibold leading-6 xl:leading-5 text-gray-800">{order.name.split(" ").slice(0,1)}’s Cart</p>
                                    {order.products.map((samosa) => (
                                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-4 xl:space-x-6 w-full ">
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-6 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-lg xl:text-xl leading-6 text-gray-800">{samosa.name}</h3>
                                                    {/*<div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                        </p>
                                    </div>*/}
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6">
                                                        ₹{(samosa.price).toFixed(2)}
                                                    </p>
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800">{samosa.quantity}</p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">₹{((samosa.price).toFixed(2) * Number(samosa.quantity)).toFixed(2)}
                                                    <span className="text-red-400 pl-3 line-through">₹{((samosa.price + 4.9) * samosa.quantity).toFixed(2)}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>))
                                    }
                                    {/*<div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                                        <div className="w-full md:w-40">
                                            <img className="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                            <img className="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                                        </div>
                                        <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
                                                <div className="flex justify-start items-start flex-col space-y-2">
                                                    <p className="text-sm leading-none text-gray-800">
                                                        <span className="text-gray-300">Style: </span> Italic Minimal Design
                                                    </p>
                                                    <p className="text-sm leading-none text-gray-800">
                                                        <span className="text-gray-300">Size: </span> Small
                                                    </p>
                                                    <p className="text-sm leading-none text-gray-800">
                                                        <span className="text-gray-300">Color: </span> Light Blue
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between space-x-8 items-start w-full">
                                                <p className="text-base xl:text-lg leading-6">
                                                    $20.00 <span className="text-red-300 line-through"> $30.00</span>
                                                </p>
                                                <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                            </div>
                                        </div>
                                    </div>*/}
                                </div>
                                <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                            <div className="flex justify-between  w-full">
                                                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                                <p className="text-base leading-4 text-gray-600">₹{order.amount}</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base leading-4 text-gray-800">
                                                    Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">SAVINGS</span>
                                                </p>
                                                <p className="text-base leading-4 text-gray-600">₹{ order.products.reduce((total, samosa)=> total + 4.9 * samosa.quantity, 0)} (50%)</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base leading-4 text-gray-800">Shipping</p>
                                                <p className="text-base leading-4 text-emerald-500">Free</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                            <p className="text-base font-semibold leading-4 text-gray-600">₹{order.amount}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Samosas Status</h3>
                                        <div className="flex justify-between items-start w-full">
                                            <div className="flex justify-center items-center space-x-4">
                                                <div className="w-11 h-11">
                                                    <img className="w-full h-full" alt="logo" src="https://www.kindpng.com/picc/m/65-650704_clip-art-delivery-man-clipart-delivery-boys-png.png" />
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p className="text-lg leading-6 font-semibold text-gray-800">
                                                        <span className="text-cyan-500 mb-2">{order.status}</span>
                                                        <br />
                                                        <span className="font-normal">Delivery with in {(Math.random()*34).toFixed(0)} Minutes</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-lg font-semibold leading-6 text-emerald-500">FREE</p>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Samosa Delivery Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                                <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                                        <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                            <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-380-456332-512.png" className="w-12 h-12" alt="avatar" />
                                            <div className=" flex justify-start items-start flex-col space-y-2">
                                                <p className="text-base font-semibold leading-4 text-left text-gray-800">{order.name}</p>
                                                <p className="text-sm leading-5 text-gray-600">{"+91 " + order.phone}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="cursor-pointer text-sm leading-5 text-gray-800">{order.userEmail}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                                        <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                            <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                                <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order.address}</p>
                                            </div>
                                            <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                                <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order.address}<br/>{order.pincode}</p>
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                            <button 
                                            className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Cancel Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <>Error Order Not Found</>
                )
            }
        </>
    );
};

export default orderSummary;

orderSummary.getInitialProps = async (ctx) => {
    const orderId = ctx.query.orders

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }

    let order = await (await Order.findOne({ _id: orderId }))

    if(order === null){
       order = {alt_email : 'abcd'}
    }

    return { order : order }
}
