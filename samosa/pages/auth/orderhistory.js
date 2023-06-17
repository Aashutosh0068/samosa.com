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
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map(orders => (
    <div class="bg-white shadow-md rounded-lg p-4">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold">Order #12345</h2>
        <p class="text-green-500 font-semibold">Delivered</p>
      </div>
      <img src="/alt.jpg" alt="Order 1" class="w-full mb-4"/>
      <p>Items: Samosa (x3), Chutney</p>
      <p>Total: $12.50</p>
      <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">View Details</a>
    </div>
  ))}
  </div>
  </div>
  <main class="container mx-auto py-6">
  <h1 class="text-3xl font-bold mb-4">Order History</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img src="/alt.jpg" alt="Order 1" class="w-full h-48 object-cover object-center"/>
      <div class="absolute top-2 right-2 flex items-center">
        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-sm">Delivered</span>
        <i class="fas fa-check-circle text-green-500 text-2xl ml-2"></i>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2">Order #12345</h2>
        <p class="mb-2">Items: Samosa (x3), Chutney</p>
        <p>Total: $12.50</p>
        <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">View Details</a>
      </div>
    </div>
    
    <div class="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img src="/alt.jpg" alt="Order 2" class="w-full h-48 object-cover object-center"/>
      <div class="absolute top-2 right-2 flex items-center">
        <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">In Progress</span>
        <i class="fas fa-spinner text-yellow-500 text-2xl ml-2"></i>
      </div>
      <div class="p-4">
        <h2 class="text-lg font-bold mb-2">Order #12344</h2>
        <p class="mb-2">Items: Samosa (x2), Lassi</p>
        <p>Total: $9.00</p>
        <a href="#" class="text-blue-500 hover:underline
    
  </div>
</main>

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
