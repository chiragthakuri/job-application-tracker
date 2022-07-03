require('dotenv').config()
const express = require('express')

const app = express()

//middleware
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req,res) =>{
    res.json("{mssg: Hello from Express}")
})

app.listen(process.env.PORT,() =>{
    console.log( "listening at", process.env.PORT)
})

