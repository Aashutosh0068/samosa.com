import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
   _id : {type: String, required: true},
   name : {type: String, required: true},
   email : {type: String, unique: true, required: true},
   password : {type: String, required: true},
   isFoodie : {type: Boolean}
}, {timestamps : true})

mongoose.models = {}

export default mongoose.model("UserCredentials", UserSchema)