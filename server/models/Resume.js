const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Resume Schema
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
      Percent: Number
    },
  ],
  experience: [
    {
      rangeStart: String,
      rangeEnd: String,
      Title: String,
      Description: String
    },
  ],
  education: [
    {
      rangeStart: String,
      rangeEnd: String,
      Title: String,
      Description: String
    },
  ],
  abilities: [
    {
      Title: String,
      Description: String
    },
  ],
  socials: [
    {
      url: Number
    },
  ]

});

module.exports = Link = mongoose.model('Resume', ResumeSchema);
