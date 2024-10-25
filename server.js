// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer'); // For file uploads
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/portfolioDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  title: String,
  education: String,
  skills: [String],
  contact: String,
  cv: String, // Path to uploaded CV file
});

const User = mongoose.model('User', userSchema);

// Set up file storage for CV
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// API endpoint to handle form submission
app.post('/api/users', upload.single('cv'), async (req, res) => {
  try {
    const { name, title, education, skills, contact } = req.body;
    const newUser = new User({
      name,
      title,
      education,
      skills: skills.split(',').map(skill => skill.trim()), // Split and trim skills
      contact,
      cv: req.file ? req.file.path : null, // Save file path only if a file is uploaded
    });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
