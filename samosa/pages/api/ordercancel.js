import Order from "@/models/Order";
import mongoose from "mongoose";

export default async function handler(req, res){
   if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
   }
   const orderId = req.body.order_id

   Order.findOneAndUpdate({_id : orderId},{"status" : "Cancel"})
   res.send("order cancel sucessfully")
   //////------need code-----//////
}