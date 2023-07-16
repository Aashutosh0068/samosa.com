import { SECRET_KEY } from "@/Keys";
import Order from "@/models/Order";
import tokenUserI from "@/values/getEmail";
import CookieCutter from "@/values/tokenCookieCutter";
import { verify } from "jsonwebtoken";
import mongoose from "mongoose";
import React from "react";

const orderhistory = ({ data }) => {
  return (
    <div>
      {data ? (
        <>
          <main className="container mx-auto py-6">
            <h1 className="text-4xl font-bold mb-4 mt-4">Order History</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
              {data.map(order => (
                <div key={order._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative">
                    <img src={order.image} alt="Order 1" className="w-full h-full object-cover object-center" />
                    {order.status == "cancelled" ? (
                      <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
                        <span className="text-md font-semibold">{order.status}</span>
                      </div>):(
                      <div className="absolute text-md top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-bl-lg"><span className="text-md font-semibold">{order.status}</span></div>
                    )}
                    <div className="absolute bottom-0 mt-28 left-0 w-full px-4 py-3 bg-gradient-to-t from-gray-800 to-transparent">
                      <h2 className="text-2xl font-bold text-white mb-2 mt-24">Order #{order._id}</h2>
                      <p className="py-2 text-white my-2">Items : {order.products.map(samosa => (<label key={samosa.name}>{samosa.name} x {samosa.quantity}<br /></label>))}</p>
                      <p className="text-white font-semibold text-lg">Total: ₹{order.amount}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <a href={"/orders/" + order._id} className="text-blue-500 hover:underline inline-block">View Details</a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      ) : (<></>)}
    </div>
  );
};

export default orderhistory;

export async function getServerSideProps(context) {
const {req} = context
const token = CookieCutter(req.headers.cookie)
const tokenEmail = tokenUserI(token)
//  const dynamicValue = HeaderCookie('token',req);
 // const Result = {
 // userEmail : null
//  }
//  verify(dynamicValue, SECRET_KEY.toString(), (err,decoded)=>{
//    if(decoded){
//      Result.userEmail = decoded.email
//    }
 // })

 if (!mongoose.connections[0].readyState) {
 await mongoose.connect(process.env.MONGO_URI);
 }
let SamosaOrders = await Order.find({ alt_email: tokenEmail });
 const data = JSON.parse(JSON.stringify(SamosaOrders));

 return {
  props: { data },
 };
}
