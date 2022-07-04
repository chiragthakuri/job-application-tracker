const express = require('express')

const Jobapplication = require('../models/jobapplicationModel')

const router = express.Router()

//get all job applications
router.get('/', (req, res) =>{
    res.json({mssg: 'get all job applications'})
}) 

//get a single job application
router.get('/:id', (req, res) =>{
    res.json({mssg: 'get a single application'})
}) 

//post a job application
router.post('/', async (req, res) =>{
    const {position, level, company, salary, questions_asked, date_applied, 
          job_posting_url} = req.body
    try {
       const jobapplication = await Jobapplication.create({ position, level, company, salary, questions_asked, date_applied, job_posting_url })
        res.status(200).json(jobapplication)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}) 

//update a job application
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'update a job application'})
}) 

//delete a job application
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'update a job application'})
}) 

module.exports = router