const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../Models/adminModel');
 require('dotenv').config();

const signup = async (req, res) => {
  try {
    const { username, mobile, email, password } = req.body; // Include email field
    const newAdmin = new Admin({ username, mobile, email, password }); // Include email field
    await newAdmin.save();
    console.log('Admin saved successfully!');
    res.status(201).json({ message: 'Signup successful!' });
  } catch (error) {
    console.log('Error while signing up:', error);
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
      res.status(409).json({ error: 'Email address is already registered.' });
    } else {
      res.status(500).json({ error: 'Error while signing up!' });
    }
  }
};

const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const admin = await Admin.findOne({ mobile });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials!' });
    }

    // Create a JWT token with the admin's ID as the payload
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Set the token expiration time (e.g., 1 hour)
    });

    // Send the token in the response
    res.json({ message: 'Login successful!', isAdmin: true, token });
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).json({ message: 'An error occurred during login.' });
  }
};



module.exports = { login, signup };