const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./models/db-model')

//load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'))
}

//EmbededJS
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./routes/indexes'))


const PORT = process.env.PORT || 8080


app.listen(
    PORT, 
    console.log(`Sever running in ${process.env.NODE_ENV} mode on ${PORT}: You better go catch it!`)
)