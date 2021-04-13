const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = proces.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/navRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });