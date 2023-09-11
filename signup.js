const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('./models/user'); // Import the User model (adjust the path as needed)


const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for hashing

    // Create a new user with the hashed password
    const newUser = new User({ email, name, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
