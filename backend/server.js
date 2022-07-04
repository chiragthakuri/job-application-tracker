require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const jobapplicationRoutes = require('./routes/jobapplications') 

const app = express()

//middleware

app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/jobapplications',jobapplicationRoutes)

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT,() =>{
            console.log( "connected to mongodb and listening on PORT", process.env.PORT)
        })

    })
    .catch(() =>{
        console.log(error)
    })



