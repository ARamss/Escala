const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

// Resume Schema
const ResumeSchema = require('./Resume').schema;

// Create User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  theme: {
    type: Number,
    default: 1
  },
  avatar: {
    type: String,
    default: 'uploads/default.png'
  },
  resume: {
    type: [ResumeSchema]
  }
});

mongoose.model('User', userSchema);
