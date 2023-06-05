const Task = require("../Models/tasks.js");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body) 
    res.status(201).json(task)
  } catch(error) {
    res.status(400).json({
      error: error 
    })
  }
}

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  }catch(error) {
    res.status(400).json({
      error: error 
    })
  }
}
