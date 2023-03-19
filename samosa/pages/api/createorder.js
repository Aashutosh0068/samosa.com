import Order from "@/models/Order";
import pincodes from "@/values/pincode.json";
import { getOrderId, setOrderId } from "@/values/setOrderIds";

export default async function handler(req, res) {
  const OrderData = await req.body;
  const METHOD = await req.method;

  if (METHOD == "POST") {
    if (
      OrderData.email &&
      OrderData.phone &&
      OrderData.pincode &&
      OrderData.fname &&
      OrderData.address &&
      OrderData.amount
    ) {
      if (Object.keys(pincodes).includes(OrderData.pincode)) {
        if (OrderData.products.length === 0) {
          res
            .status(500)
            .json({ message: "cannot proceed with an empty cart" });
        } else {
          setOrderId((Math.random() * 10000000).toFixed(0));
          let orderId = getOrderId();

          console.log(OrderData.products)

          let order = new Order({
            _id: orderId.toString(),
            userEmail: OrderData.email,
            address: OrderData.address,
            Phone: Number(OrderData.Phone),
            products: OrderData.products,
            amount: OrderData.amount,
          });

          try {
            order.save();
            res
              .status(200)
              .json({ message: "yay! your order has been placed sucessfully" });
          } catch {
            (err) =>
              res
                .status(404)
                .json({
                  message: "unable to placed your order please try again",
                });
          }
        }
      } else {
        res.status(800).json({
          message:
            "Sorry, we will not able to deliver you samosas, comming soon in your city.",
        });
      }
    } else {
      res
        .status(500)
        .json({ message: "Please enter the complete information" });
    }
  } else {
    res.status(500).json({ message: "method not allowed" });
  }
}
