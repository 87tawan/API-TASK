const dotenv = require("dotenv").config()
const mongoose = require("mongoose")

const db = mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("You are on in the ATLAS MONGODB")
})
.catch(e => {
  console.log("Something wrong happens" + e)
})

module.exports = db