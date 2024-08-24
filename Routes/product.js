const express = require('express')
const router = express.Router() //ใช้ Router เป็นเส้นทางเชื่อมกับ path ต่างๆ

router.get('/product', (req, res) => {
    res.send('Hello Product Endpoint')
});

//ส่ง ID
router.get('/product/:id', (req, res) => {
    res.send('Hello 1 Product')
});

router.post('/product', (req, res) => {
    res.send('Hello Post')
})

router.put('/product/:id', (req, res) => {
    res.send('hello id')
})

router.delete('/product', (req, res) => {
    res.json({name:"Hello Nut"})
})
module.exports = router //ให้ไฟล์อื่นสามารถใช้ file นี้ได้