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
  skillContent:{
    type:String
  },
  skills: [
    {
    name: String,
    percentage: Number
    },
  ],
  experience: [
    {
      rangeStart: String,
      rangeEnd: String,
      name: String,
      description: String
    },
  ],
  education: [
    {
      rangeStart: String,
      rangeEnd: String,
      Digree: String,
      Description: String
    },
  ],
  abilities: [
    {
      title: String,
      description: String
    },
  ],
  socials: [
    {
      title: String,
      url: String
    },
  ]

});

module.exports = Link = mongoose.model('Resume', ResumeSchema);
