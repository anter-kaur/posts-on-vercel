const express=require('express');
const app=express();
const router=express.Router();
const User=require('../models/usermodel')

// add user
router.post('/adduser',async(req,res)=>{
    const {name,email,age}=req.body;
    try{
        const user=await User.create({
            name,
            email,
            age
        })
        user.save()
        res.status(200).json({user})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

// get all users
router.get('/getusers',async(req,res)=>{
    try{
        const users= await User.find();
        res.status(200).json(users)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

// get one user
router.get('/getusers/:id',async (req,res)=>{
    const {id}=req.params;
    try{
    const user=await User.findById(id)
    res.status(200).json(user)
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})
    }
})

// update user
router.patch('/updateuser/:id',async (req,res)=>{
    const {id}=req.params;
    console.log("idin patch->",id)
    try{
        const user=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json(error)
    }
})

// delete user
router.delete('/deleteuser/:id',async (req,res)=>{
    const {id}=req.params;
    try{
        const user= await User.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
})

module.exports=router;