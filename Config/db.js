const mongoose = require('mongoose');
require('dotenv').config(); // โหลดตัวแปรสภาพแวดล้อม

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI; // ดึงค่า MONGO_URI ออกมาเป็น string
        // console.log('Mongo URI:', mongoUri); // ตรวจสอบว่าค่า MONGO_URI เป็น string
        await mongoose.connect(mongoUri);
        console.log('DB Connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

module.exports = connectDB;
