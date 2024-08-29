require("dotenv").config();
const express = require("express"); //รับ express

//ลองใช้ morgan ไว้ใต้ app | ใช้ cors เดินทางสะดวก | ใช้ body parse
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
//connect db
const connectDB = require("./Config/db");

// reuire fs เอา readdirSync เอาอ่าน All 7Routers
const { readdirSync } = require("fs");

//เรียก Routes มาใช้
const productRouters = require("./Routes/product");
const authRouters = require("./Routes/auth");

const app = express(); //สร้างตัวแปรมา run express

connectDB(); //ใช้ func connectDB

app.use(morgan("dev")); // วันเวลา run brownser || 'dev'
app.use(cors()); //ตัวผ่านทางสะดวกกกกก
app.use(bodyParse.json()); // .json กำหนดขนาด 10mb มีแล้วอุ่นใจจริงๆ app.use(bodyParse.json({limit:'10mb'}))

// Route 1
// app.get('/product', (req, res) => { // (path , call back frunction need request and response)
//     // res.json({'hello':"hello"})
//     // res.status
//     // res.send('Hello world')
// }) ถ้าเรามี enpoint เยอะๆ

// Route 2
// สร้าง folder Routes
// app.use('/api',productRouters) //จะเป็น part /api/product
// app.use('/api',authRouters) // สร้างอีกละ

//Route 3 auto Endpoint

readdirSync("./Routes").map((r) => {
  // console.log(`this is "${r}"`) // auth.js product.js
  app.use("/api", require(`./Routes/${r}`));
});

app.listen(5000, () => {
  console.log("Server Running on port 5000");
}); //ตัว runserver (เลข port , call back function)
