import pincodes from '@/values/pincode.json'

export default function handler(req, res) {
    const OrderData = req.body
    const METHOD = req.method

    if (METHOD == "POST") {

        if (Object.keys(pincodes).includes(OrderData.pincode)) {
            
        }
        else {
            res.status(800).json({ 'message': 'Sorry, we will not able to deliver you samosas, comming soon in your city.' })
        }

    }
    else {
        res.status(500).json({ 'message': 'method not allowed' })
    }
}