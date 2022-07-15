const express = require('express')
const {
    getJobapplications,
    getJobapplication,
    createJobapplication,
    deleteJobapplication,
    updateJobapplication
} = require('../controllers/jobapplicationController')

const validateMongooseId  = require("../middleware/validateMongooseId ");

const router = express.Router()

// GET all job applications
router.get('/', getJobapplications)

// GET a single job application
router.get('/:id', validateMongooseId , getJobapplication)

// POST a new job application
router.post('/', createJobapplication)

// DELETE a job application
router.delete('/:id', validateMongooseId , deleteJobapplication)

// UPDATE a job application
router.patch('/:id', validateMongooseId, updateJobapplication)

module.exports = router