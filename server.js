const express = require('express') //รับ express



const app = express(); //สร้างตัวแปรมา run express

app.listen(5000, ()=>{console.log("Server Running on port 5000 localhost:5000")}) //ตัว runserver (เลข port , call back function)