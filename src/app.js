const express = require ("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

// se conectando ao mongoose
const bank = require("./Config/mongoose.connection")
app.set("mongoose conneection", bank)

const tasksRoutes = require("./routes/task.routes")
app.use(tasksRoutes)


module.exports = app 