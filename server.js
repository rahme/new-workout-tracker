const express = require("express")

var app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

const logger = require("morgan")
const mongoose = require("mongoose")
var db = require("./models")

require("./routes/htmlroutes.js")(app)
require("./routes/apiroutes.js")(app)

mongoose.connect("mongodb+srv://raffayahmed:password123456789@cluster0.7vqtw.mongodb.net/test?retryWrites=true&w=majority")

var PORT = process.env.PORT || 8080

app.listen(PORT, function(){
  console.log(`App running on port 8080`)
})