const router = require('express').Router()

router.use('/', require('./auth'))

router.get('/home', (req, res) => {
    res.send('Hello my home!')
})

module.exports = router