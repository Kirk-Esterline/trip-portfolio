const express = require('express')
const router = express.Router()

// @desc  Login/Landing Page
// @route   GET /

let message = 'this is a test'

router.get('/', (req, res) => {
    res.render('layouts/login')
    console.log(req.body)
})

// @desc Dashboard
// @route  GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})
module.exports = router