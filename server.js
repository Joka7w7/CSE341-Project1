const express = require('express');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

const routes = require('./routes');
app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log("❌ DB connection failed:", err.message);
  } else {
    app.listen(port, () => {
      console.log(`✅ Database connected. Server running on port ${port}`);
    });
  }
});