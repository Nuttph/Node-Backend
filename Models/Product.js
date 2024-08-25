const mongoose = require('mongoose')

//สร้างฟิว
const productSchema = mongoose.Schema({ 
    name: String,
    detail: {
        type: String,
    },
    price: {
        type: Number
    }
}, { timestamps: true }) // timestamps ช่วยเรื่อง เวลา update


module.exports = mongoose.model('products',productSchema) // (ชื่อฟิว , ตัว Schema)