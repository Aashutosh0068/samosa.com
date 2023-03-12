import userCredentials from "@/models/userCredentials"
import mongoose from "mongoose"
import cryptoJs from "crypto-js"

export default async function handler(req, res) {

    res.setHeader('Content-Type', 'application/send');

    const FormData = req.body
    var METHOD = req.method
    if (METHOD === "POST") {
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGO_URI)
        }
        const exists = await userCredentials.findOne({ email: FormData.email })
        if (exists) {
            res.status(690).send({ 'message': 'email already exists' })
        }
        else {
            if (FormData.email && FormData.password) {

                let body = new userCredentials({
                    _id: FormData.email,
                    email: FormData.email,
                    password: cryptoJs.AES.encrypt(FormData.password, process.env.SECRET_KEY),
                    isFoodie: false
                })

                try {

                    body.save()
                    res.status(200).send({ 'message': 'user sucessfully added' })
                }
                catch {
                    err =>
                        res.status(500).send({ 'message': 'error' })
                }
            }
            else {
                res.status(500).send({ 'message': 'invalid body' })
            }
        }
    }
    else {
        res.status(500).send({ 'message': 'method not allowed' })
    }
}