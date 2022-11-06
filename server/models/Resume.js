const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Link Schema
const ResumeSchema = new Schema({
  brief: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  skills: [
    {
      Title: String,
      Percent: Number,
    },
  ],
  Experience: [
    {
      rangeStart: String,
      rangeEnd: String,
      Title: String,
      Description: String,
    },
  ],

});

module.exports = Resume = mongoose.model('resume', ResumeSchema);
