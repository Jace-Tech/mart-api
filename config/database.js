const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async (cb) => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    mongoose.set("strictQuery")
    console.log(`MongoDB Connected`)

    cb?.()
  } catch (error) {
    console.log("DB ERROR:", error?.message)
  }
}

module.exports = connectDB