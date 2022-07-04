const Jobapplication = require('../models/jobapplicationModel')
const mongoose = require('mongoose')

// get all job applications
const getJobapplications = async (req, res) => {
  const jobapplications = await Jobapplication.find({}).sort({createdAt: -1})

  res.status(200).json(jobapplications)
}

// get a job applications
const getJobapplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Job application'})
  }

  const jobapplication = await Jobapplication.findById(id)

  if (!jobapplication) {
    return res.status(404).json({error: 'No such jobapplication'})
  }

  res.status(200).json(jobapplication)
}

// create a new jobapplication
const createJobapplication = async (req, res) => {
  const {position, level, company, salary, questions_asked, 
    date_applied, job_posting_url} = req.body

  // add to the database
  try {
    const jobapplication = await Jobapplication.create({ position, level, company, salary,
        questions_asked, date_applied, job_posting_url })
    res.status(200).json(jobapplication)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Jobapplication
const deleteJobapplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Jobapplication'})
  }

  const jobapplication = await Jobapplication.findOneAndDelete({_id: id})

  if(!jobapplication) {
    return res.status(400).json({error: 'No such jobapplication'})
  }

  res.status(200).json(jobapplication)
}

// update a Jobapplication
const updateJobapplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such jobapplication'})
  }

  const jobapplication = await Jobapplication.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!jobapplication) {
    return res.status(400).json({error: 'No such jobapplication'})
  }

  res.status(200).json(jobapplication)
}

module.exports = {
    getJobapplications,
    getJobapplication,
    createJobapplication,
    deleteJobapplication,
    updateJobapplication
}