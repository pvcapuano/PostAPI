const express = require("express")
const routes = require("./routes")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pvcapuano:123mudar@cluster0.ksdnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true,
useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("conectado ao DB"))

const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
  console.log(`backend started in http://localhost:${port}`)
})