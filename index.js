const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./models/db-model')

//load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 8080


app.listen(
    PORT, 
    console.log(`Sever running in ${process.env.NODE_ENV} mode on ${PORT}: You better go catch it!`)
)