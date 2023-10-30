// task.js
const express = require('express');
const router = express.Router();
const { Task } = require('../models');

// Move task to another list
router.put('/move/:taskId/:newListId', async (req, res) => {
  try {
    const { taskId, newListId } = req.params;
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update task's listId
    task.listId = newListId;
    await task.save();

    res.status(200).json({ message: 'Task moved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Mark task as completed
router.put('/complete/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update task's completion status
    task.completed = true;
    await task.save();

    res.status(200).json({ message: 'Task marked as completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
