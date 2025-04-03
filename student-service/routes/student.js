
const express = require('express');
const router = express.Router();
const StudentModel = require('../models/Student');

const {verifyToken} = require('../middleware/auth')


router.get("/all", verifyToken, async(req, res)=>{
    try{
        const Students = await StudentModel.find({})
        res.status(200).json(Students)
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post("/add", verifyToken, async(req, res)=>{
    try{
        const newStudent = new StudentModel(req.body)
        const student = await newStudent.save();
        res.json(student) 
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})