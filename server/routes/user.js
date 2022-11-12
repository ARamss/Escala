const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middleware/requireLogin')
// const multer = require('multer');
// require('dotenv').config();

// User Model
const User = require('../models/user');

// @route GET /users
// @desc Get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .select('-password -email')
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route GET /users/admin
// @desc Get user data
// @access Private
router.get('/admin', requireLogin, (req, res) => {
  User.findById(req.user._id)
  .select('-password -email')
  .then(user => res.send(user));
});

// @route GET /users/:slug
// @desc Get user by slug
// @access Public
router.get('/:slug', (req, res) => {
  const slug = req.params.slug
  const querySlug = '^' + slug + '$'
  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// @route PATCH /users/:slug
// @desc Add a Resume a specific user's links
// @access Private
router.patch('/:slug', requireLogin, (req, res) => {
  const slug = req.params.slug
  const querySlug = '^' + slug + '$'
  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => {
      const brief = req.body.brief;
      const introduction = req.body.introduction;
      const skills = req.body.skills;
      const experience = req.body.experience;
      const education = req.body.education;
      const abilities = req.body.abilities;
      const socials = req.body.socials;

      user.resume.push({
          "brief": brief,
          "introduction": introduction,
          "skills": skills,
          "experience": experience,
          "education": education,
          "abilities": abilities,
          "socials": socials
      })

      user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});


// @route PATCH /users/:slug/deleteResume
// @desc Delete a Resume
// @access Private
router.patch('/:slug/deleteResume', requireLogin, (req, res) => {
  const slug = req.params.slug
  const { _id } = req.body;
  const querySlug = '^' + slug + '$';

  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => {
      user.resume.forEach((resume, index) => {
        if (resume._id.toString() === _id.toString()) {
          user.resume.splice(index, 1);
          user.save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      });
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

// @route PATCH /users/:slug/editResume
// @desc Update a link
// @access Private
router.patch('/:slug/editResume', requireLogin, (req, res) => {
  const slug = req.params.slug
  const { _id } = req.body;
  const querySlug = '^' + slug + '$';

  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => {

      user.resume.forEach((resume, index) => {
        if (resume._id.toString() === _id.toString()) {
          const brief = req.body.brief;
          const introduction = req.body.introduction;
          const skills = req.body.skills;
          const experience = req.body.experience;
          const education = req.body.education;
          const abilities = req.body.abilities;
          const socials = req.body.socials;

          user.resume[index] = {
            "_id": _id,
            "brief": brief,
            "introduction": introduction,
            "skills": skills,
            "experience": experience,
            "education": education,
            "abilities": abilities,
            "socials": socials
          }
          user.save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
        }
      });
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

// @route PATCH /users/:username/theme
// @desc Update a user's Resume theme
// @access Private
router.patch('/:slug/theme', requireLogin, (req, res) => {
  const slug = req.params.slug
  const querySlug = '^' + slug + '$';
  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => {
      const theme = req.body.theme;
      user.theme = parseInt(theme);
      user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});


// @route PATCH /users/:slug/defaultAvatar
// @desc Update a user's avatar to the default avatar picture
// @access Private
router.patch('/:slug/defaultAvatar', requireLogin, (req, res) => {
  const slug = req.params.slug
  const querySlug = '^' + slug + '$';
  User.findOne({ "slug": { '$regex': querySlug, $options: 'i' } })
    .select('-password -email')
    .then(user => {
      user.avatar = 'uploads/default.png';
      user.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
});





module.exports = router;
