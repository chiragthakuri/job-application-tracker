const express = require('express')
const {
    getJobapplications,
    getJobapplication,
    createJobapplication,
    deleteJobapplication,
    updateJobapplication
} = require('../controllers/jobapplicationController')

const router = express.Router()

// GET all workouts
router.get('/', getJobapplications)

// GET a single workout
router.get('/:id', getJobapplication)

// POST a new workout
router.post('/', createJobapplication)

// DELETE a workout
router.delete('/:id', deleteJobapplication)

// UPDATE a workout
router.patch('/:id', updateJobapplication)

module.exports = router