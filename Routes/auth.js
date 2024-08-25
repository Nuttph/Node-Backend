//npm install jsonwebtoken
const express = require('express')
const router = express.Router()

const { register, login } = require('../Controllers/auth')

router.get('/auth', (req, res) => {
    res.send('Hello auth Endpoint')
})
router.post('/login', login)
router.post('/register', register)

module.exports = router