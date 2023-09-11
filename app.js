const express = require('express');
const mysql = require("mysql");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'config.env' });

const app = express();
const port = 1500;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB (Replace 'your_database_url' and 'your_database_name' with your actual MongoDB URL and database name)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Import and use the signup route from the signup.js file
const signupRoute = require('./signup');
app.use(signupRoute);

const loginRoute = require('./login');
app.use(loginRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
