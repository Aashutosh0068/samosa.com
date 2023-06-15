import Order from "@/models/Order";
import userState from "@/values/userState";
import mongoose from "mongoose";
import React from "react";

const orderhistory = ({ data }) => {
  return (
    <div>
      {data ?(
      <>
        {data.map(orders => (
          <div key={orders._id}>{orders._id}</div>
        ))}
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
