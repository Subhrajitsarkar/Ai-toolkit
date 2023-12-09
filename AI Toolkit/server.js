const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/errorMiddleware')

//routes path
const authRoutes = require('./routes/authRoutes')

//configuring dotenv file 
dotenv.config()

//mongo connection
connectDB()

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(errorHandler)

const PORT = process.env.PORT || 8080

app.use('/api/v1/auth', authRoutes)

//listen server
app.listen(PORT, () => {
  console.log(`server running in ${process.env.DEV_MODE} on ${PORT}`)
})