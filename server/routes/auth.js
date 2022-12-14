const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup', (req,res)=>{
    const {name, lastname, slug, email, password} = req.body
    if(!name || !lastname || !slug || !email || !password){
          return res.status(422).json({error:"Something might be missing."})
    }
    User.findOne({email:email})
      .then((savedUser)=>{
            if(savedUser){
              return res.status(422).json({error:"This email has already signed up."})
            }
            //Password Hash
            bcrypt.hash(password,12)
            .then(hashedpassword=>{
                const user = new User({
                    name,
                    lastname,
                    slug,
                    email,
                    password:hashedpassword
                })
                user.save()
                .then(user=>{
                    res.json({message:"Welcome to the Escala"})
                })
                .catch(error=>{
                    console.log(error)
                })
            })
        })
        .catch(error=>{
              console.log(error)
    })
})

router.post('/signin',(req,res)=>{
     const {email,password} = req.body
      if(!email || !password){
          return res.status(422).json({error:"Please add all the fields"})
      }
      User.findOne({email:email})
      .then(savedUser=>{
          if(!savedUser){
             return res.status(422).json({error:"Invalid Email or Password"})
          }
          bcrypt.compare(password,savedUser.password)
          .then(doMatch=>{
              if(doMatch){
                  //res.json({message:"Welcome back!"})
                  //Creating Token based on user id
                  const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                  const {_id,name,lastname,slug,email} = savedUser
                  res.json({token,user:{_id,name,lastname,slug,email}})
              }
              else{
                  return res.status(422).json({error:"Invalid Email or Password"})
              }
          }).catch(error=>{
                console.log(error)
          })
      })
})


module.exports = router
