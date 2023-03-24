const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    _id: String,
    name: { type: String, required: true },
    userEmail: { type: String, required: true },
    alt_email: { type: String },
    phone: { type: Number, required: true },
    date: { type: Date },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true },
      },
    ],
    payment: { type: String, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Order", OrderSchema);
