const express = require('express') //รับ express
//เรียก Routes มาใช้
const productRouters = require('./Routes/product')


const app = express(); //สร้างตัวแปรมา run express


// Route 1
// app.get('/product', (req, res) => { // (path , call back frunction need request and response)
//     // res.json({'hello':"hello"})
//     // res.status
//     // res.send('Hello world')
// }) ถ้าเรามี enpoint เยอะๆ

// Rout 2
// สร้าง folder Routes
app.use('/api',productRouters) //จะเป็น part /api/product


app.listen(5000, ()=>{console.log("Server Running on port 5000")}) //ตัว runserver (เลข port , call back function)