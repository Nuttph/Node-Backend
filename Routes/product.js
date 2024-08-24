const express = require('express')
const router = express.Router() //ใช้ Router เป็นเส้นทางเชื่อมกับ path ต่างๆ

router.get('/product', (req, res) => {
    res.send('Hello Product Endpoint')
});

module.exports = router //ให้ไฟล์อื่นสามารถใช้ file นี้ได้