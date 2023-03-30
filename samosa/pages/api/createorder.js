import Order from "@/models/Order";
import pincodes from "@/values/pincode.json";
import { getOrderId, setOrderId } from "@/values/setOrderIds";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const OrderData = req.body;
  const METHOD = req.method;

  if (METHOD === "POST") {
    if (
      !OrderData.email ||
      !OrderData.phone ||
      !OrderData.pincode ||
      !OrderData.name ||
      !OrderData.address ||
      !OrderData.amount ||
      !OrderData.payment_type
    ) {
      res
        .status(500)
        .json({ message: "Please enter the complete information" });
    } else {
      if (Object.keys(pincodes).includes(OrderData.pincode)) {
        if (OrderData.products.length === 0) {
          res
            .status(500)
            .json({ message: "cannot proceed with an empty cart" });
        } else {
          setOrderId((Math.random() * 10000000).toFixed(0));

          let orderId = getOrderId();

          if (!mongoose.connections[0].readyState){
            await mongoose.connect(process.env.MONGO_URI)
          }

          const repeatId = Order.findOne({_id : orderId.toString()})

          if(repeatId != null){
            setOrderId((Math.random() * 10000000).toFixed(0))
          }

          let RFOrderId = getOrderId().toString()

          if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGO_URI);
          }

          let order = new Order({
            _id: RFOrderId,
            name: OrderData.name,
            userEmail: OrderData.email,
            address: OrderData.address,
            phone: Number(OrderData.phone),
            payment: OrderData.payment_type,
            alt_email: OrderData.alt_email,
            products: OrderData.products,
            date: Date.now().toString(),
            amount: OrderData.amount,
          });

          try {
            order.save();
            res
              .status(200)
              .json({ message: "yay! your order has been placed sucessfully" , orderId : RFOrderId });
          } catch {
            (err) =>
              res.status(404).json({
                message: "unable to placed your order please try again",
              });
          }
        }
      } else {
        res.status(404).json({
          message:
            "Sorry, we will not able to deliver you samosas, comming soon in your city.",
        });
      }
    }
  } else {
    res.status(500).json({ message: "method not allowed" });
  }
}
