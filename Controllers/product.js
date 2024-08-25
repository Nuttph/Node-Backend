//import model เข้ามาใช้
const Product = require('../Models/Product')




//สร้าง Routes 3
exports.read = async (req, res) => {
    try {
        const  id = req.params.id // params.id คือ ส่ง id มาเช็ค
        const producted = await Product.find({_id:id}).exec(); // ส่งไปทั้งหมด execute
        res.send(producted)
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.list = async (req, res) => {
    try {
        const producted = await Product.find({}).exec(); // ส่งไปทั้งหมด execute
        res.send(producted)
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.create = async (req, res) => {
    try {
        //code
        console.log(req.body)
        console.log("Okay i got data right now")
        const producted = await Product(req.body).save() //save ข้อมูล
        res.send(producted)
        // res.send('Hello create')
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const producted = await Product.findOneAndUpdate({_id:id},req.body,{new:true}).exec() //ค้นหา id จากนั้น ส่ง req.body ค่าใหม่
        console.log(producted)
        // res.send(remove)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const removed = await Product.findOneAndDelete({ _id: id }).exec() //หาและลบเลย
        res.send(removed)
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}