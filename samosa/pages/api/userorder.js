import mongoose from "mongoose";

export default async function handler(req, res){
   if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
   }

   userEmail