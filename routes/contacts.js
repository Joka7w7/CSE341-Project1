const express = require('express');
const router = express.Router();
const userController = require('../controllers/contacts');

// GET all contacts
router.get('/', userController.getAll);

// GET single contact by ID
router.get('/:id', userController.getSingle);

module.exports = router;