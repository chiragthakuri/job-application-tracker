const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobapplicationSchema = new Schema({
    position:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    salary:{
        type: String
    },
    questions_asked:{
        type: String
    },
    date_applied:{
        type: Date
    },
    job_posting_url:{
        type: String
    }


}, {timestamps: true})

module.exports = mongoose.model('Jobapplication', jobapplicationSchema)