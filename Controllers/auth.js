const User = require("../Models/User");
const bcrypt = require("bcryptjs"); //hash password
const jwt = require("jsonwebtoken"); //for login token

exports.register = async (req, res) => {
  try {
    //code

    //1. check user ว่ามีในฐานข้อมูลยัง
    console.log(req.body);
    const { name, password } = req.body;
    console.log(name);
    console.log(password);

    var user = await User.findOne({ name });
    console.log(user);
    if (user) {
      return res.send("User Alread Exists!!").status(400);
    }
    //2. Encrypt
    const salt = await bcrypt.genSalt(10); //$2a$10$E2i..KyIm7LNaEdI9zrFwO
    user = new User({
      name,
      password,
    });
    user.password = await bcrypt.hash(password, salt);
    // console.log(salt)
    //3. Save
    user.save();

    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server ERROR");
  }
};

exports.login = async (req, res) => {
  try {
    //code
    //1. check user-password
    const { name, password } = req.body;
    var user = await User.findOneAndUpdate({ name }, { new: true });
    console.log(user);
    console.log(user.password);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.status(400).send("Password Invalid!");
      }
      //ถ้า password ถูก สร้าง Payload ต่อ
      //2. Payload เตรียมข้อมูลส่งให้หน้าบ้าน
      var payload = {
        user: {
          name: user.name,
        },
      };
      //3. Generate token
      jwt.sign(payload, "jwtsecret", { expiresIn: 20 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      }); // 10วิ callback function
    } else {
      return res.status(400).send("User not found!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};
