const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,           Apparently these three middlewares do not have any effect. There are more errors with that without.
            // useUnifiedTopology: true,
            // useFindAndModify: false
        })

        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB