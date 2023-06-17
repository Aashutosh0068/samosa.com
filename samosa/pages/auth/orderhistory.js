import Order from "@/models/Order";
import userState from "@/values/userState";
import mongoose from "mongoose";
import React from "react";

const orderhistory = ({ data }) => {
  return (
    <div>
      {data ?(
      <>
          <div>
    <main class="container mx-auto py-6"/>
  <h1 class="text-3xl font-bold mb-4">Order History</h1>
  
    {data.map(orders => (   
    <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img src="/alt.jpg" alt="Order 2" class="w-full h-48 object-cover object-center"/>
      <div class="absolute top-2 right-2 flex items-center">
        <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">In Progress</span>
        <i class="fas fa-spinner text-yellow-500 text-2xl ml-2"></i>
      </div>
  </div>))}
  </div>
      </>
      ):(<></>)}
    </div>
  );
};

export default orderhistory;

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let SamosaOrders = await Order.find({ alt_email: "aashutoshpawar0068@outlook.com" });
  const data = JSON.parse(JSON.stringify(SamosaOrders));

  return {
    props: { data },
  };
}
