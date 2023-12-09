const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`connect to mongodb database ${mongoose.connection.host}`)
  }
  catch (err) {
    console.log(`error ${err}`)
  }
}

module.exports = connectDB