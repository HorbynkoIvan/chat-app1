require('dotenv').config()

module.exports={
    appKey: process.env.API_KEY,
    appUrl: process.env.API_URL,
    appPort: process.env.API_PORT
}