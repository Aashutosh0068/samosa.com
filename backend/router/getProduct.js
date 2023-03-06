const router = require("./Path");
const Samosa = require("../models/Samosa");

router.get('/samosas', async (req, res)=>{
    let samosa = await Samosa.find()
    const samosas = samosa;
    res.status(200).json({samosas})
    }
)

module.exports = router;