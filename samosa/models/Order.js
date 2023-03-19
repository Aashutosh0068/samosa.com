const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    _id: String,
    userEmail: { type: String, required: true },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, default: 1 }
      },
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Order", OrderSchema);
