import userCredentials from "@/models/userCredentials"
import cryptoJs from "crypto-js"
import { sign } from "jsonwebtoken"
import mongoose from "mongoose"

export default async function handler(req, res) {
    const FormData = req.body
    var METHOD = req.method

    if (METHOD === "POST") {
        if (FormData.email && FormData.password) {
            if (!mongoose.connections[0].readyState) {
                await mongoose.connect(process.env.MONGO_URI)
            }
            try {
                let user_Validation = await userCredentials.findOne({ email: FormData.email })

                if (!user_Validation) {
                    res.status(690).send({ "message": "invalid email address" })
                }
                else {
                    if (cryptoJs.AES.decrypt(user_Validation.password, process.env.SECRET_KEY).toString(cryptoJs.enc.Utf8) == FormData.password) {
                        var token = sign({email : user_Validation.email}, 'eatpeRepeat69')
                        res.status(200).send({ token })
                    }
                    else {
                        res.status(699).send({ "message": "bad credentias seels" })
                    }
                }

            }
            catch {
                res.status(800).send({ 'message': "err" })
            }
        }
        else {
            res.status(500).send({ "message": "invalid body" })
        }
    }

    else {
        res.status(500).send({ 'message': 'method not allowed' })
    }

}