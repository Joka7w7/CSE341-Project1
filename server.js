require('dotenv').config();

const express = require('express');
const app = express(); // ✅ create app first

const mongodb = require('./data/database');
const contactsRoutes = require('./routes/contacts');

app.use(express.json());

// routes
app.use('/contacts', contactsRoutes);

const port = process.env.PORT || 3000;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});