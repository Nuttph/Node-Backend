//check middleware
const jwt = require('jsonwebtoken')
exports.auth = async (req,res,next) => { // next คือไปต่อมั้ย
    try {
        //code
        const token = req.headers["authtoken"]
        console.log('token middleware !!! !! !')
        console.log(token)
        if (!token) {
            return res.status(401).send('No token')
        }
        const decoded = jwt.verify(token, 'jwtsecret')
        console.log('decode = ',decoded)
        next();
    } catch (err) {
        console.log(err,"Erorr!!! naja")
        res.send('Token Invalid').status(500)
    }
}
//ไปใช้ที่ Route