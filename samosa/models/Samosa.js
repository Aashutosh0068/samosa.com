import mongoose from "mongoose"

const SamosaSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, unique: true, required:true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    reviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    availableQty: { type: String }
}, { timestamps: true });

mongoose.models = {}

export default mongoose.model("Samosa", SamosaSchema)