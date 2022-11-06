const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Resume Schema
// const ResumeSchema = require('./Resume').schema;

// Create User Schema
const UserSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now
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

module.exports = User = mongoose.model('user', UserSchema);
