const User = require('../Models/User')
const bcrypt = require('bcryptjs') //hash password
const jwt = require('jsonwebtoken') //for login token

exports.register = async (req, res) => {
    try {
        //code

        //1. check user ว่ามีในฐานข้อมูลยัง
        console.log(req.body)
        const { name, password } = req.body
        console.log(name)
        console.log(password)

        var user = await User.findOne({ name })
        console.log(user)
        if (user) {
            return res.send('User Alread Exists!!').status(400)
        }
        //2. Encrypt
        const salt = await bcrypt.genSalt(10) //$2a$10$E2i..KyIm7LNaEdI9zrFwO
        user = new User({
            name,
            password
        })
        user.password = await bcrypt.hash(password,salt)
        
        // console.log(salt)
        
        //3. Save
        user.save()
        
        res.send(req.body)

    } catch (err) {
        console.log(err)
        res.status(500).send('Server ERROR')
    }
}

exports.login = async (req, res) => {
    try {
        //code
        //1. check user-password

        //2. Payload เตรียมข้อมูลส่งให้หน้าบ้าน
        
        //3. Generate token
        res.send("Hello login")
    } catch (err) {
        console.log(err)
        res.status(500).send('Error')
    }
}