const router = require('express').Router()

router.post('/login', (req, res) => {
    res.send(['Login page!', req.body])
})

router.post('/register', (req, res) => {
    res.send('Register page!')
})


module.exports = router