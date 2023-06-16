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
            <main class="container mx-auto py-6">
  <h1 class="text-3xl font-bold mb-4">Order History</h1>
  <ul class="bg-white shadow-md rounded-lg p-4">
    {data.map(orders=>(
    <li key={orders._id} class="border-b py-2">
      <p class="text-lg font-bold">Order #{orders._id}</p>
      <p>Items: Samosa (x3), Chutney</p>
      <p>Status: {orders.status}</p>
      <p>Total: ₹{orders.amount}</p>
    </li>
    ))}
  </ul>
</main>

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
