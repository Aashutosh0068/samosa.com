const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

const connectDb = () =>{
    if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGO_URI)
    }
}

module.exports = connectDb;