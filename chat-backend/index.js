const express = require('express')
const config = require('./config/app')
const app = express()
const port = process.env.API_PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${config.appPort}`)
})