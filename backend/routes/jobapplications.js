const express = require('express')
const {
    getJobapplications,
    getJobapplication,
    createJobapplication,
    deleteJobapplication,
    updateJobapplication
} = require('../controllers/jobapplicationController')

const router = express.Router()

// GET all Job applications
router.get('/', getJobapplications)

// GET a single Job application
router.get('/:id', getJobapplication)

// POST a new Job application
router.post('/', createJobapplication)

// DELETE a Job application
router.delete('/:id', deleteJobapplication)

// UPDATE a Job application
router.patch('/:id', updateJobapplication)

module.exports = router