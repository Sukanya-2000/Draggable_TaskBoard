// list.js
const express = require('express');
const router = express.Router();
const { List } = require('../models');

// Create a new list
router.post('/create', async (req, res) => {
  try {
    const { name } = req.body;
    const newList = await List.create({ name });
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all lists
router.get('/', async (req, res) => {
  try {
    const lists = await List.findAll();
    res.status(200).json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
