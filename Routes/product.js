const express = require('express')
const router = express.Router() //ใช้ Router เป็นเส้นทางเชื่อมกับ path ต่างๆ

//import controller
const {read,list,update,create,remove} = require('../Controllers/product')
const { auth } = require('../Middleware/auth')

router.get('/product',auth, list);

//ส่ง ID
// router.get('/product/:id', (req, res) => {
//     res.send('Hello 1 Product')
// });
router.get('/product/:id', read);

router.post('/product', create)

router.put('/product/:id', update)

router.delete('/product/:id',remove)
module.exports = router //ให้ไฟล์อื่นสามารถใช้ file นี้ได้