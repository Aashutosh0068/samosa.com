import Order from "@/models/Order";
import mongoose from "mongoose";
import React from "react";

const orderhistory = ({ data }) => {
  return (
    <div>
      {data ? (
        <>
          <main class="container mx-auto py-6">
            <h1 class="text-4xl font-bold mb-4 mt-4">Order History</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
              {data.map(order => (
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div class="relative">
                    <img src="/alt.jpg" alt="Order 1" class="w-full h-full object-cover object-center" />
                    {order.status == "cancelled" ? (
                      <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
                        <span class="text-md font-semibold">{order.status}</span>
                      </div>):(
                      <div class="absolute text-md top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-bl-lg"><span class="text-md font-semibold">{order.status}</span></div>
                    )}
                    <div class="absolute bottom-0 mt-28 left-0 w-full px-4 py-3 bg-gradient-to-t from-gray-800 to-transparent">
                      <h2 class="text-2xl font-bold text-white mb-2 mt-24">Order #{order._id}</h2>
                      <p class="py-2 text-white my-2">Items : {order.products.map(samosa => (<label key={samosa.name}>{samosa.name} x {samosa.quantity}<br /></label>))}</p>
                      <p class="text-white font-semibold text-lg">Total: ₹{order.amount}</p>
                    </div>
                  </div>
                  <div class="p-4">
                    <a href={"/orders/" + order._id} class="text-blue-500 hover:underline inline-block">View Details</a>
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
