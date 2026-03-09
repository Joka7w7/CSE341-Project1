const express = require('express');
const router = express.Router();
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const db = mongodb.getDb();
    const contacts = await db.collection('contacts').find().toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single contact by ID
router.get('/:id', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid contact ID format' });
    }

    const contactId = new ObjectId(req.params.id);
    const db = mongodb.getDb();
    const contact = await db.collection('contacts').findOne({ _id: contactId });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;