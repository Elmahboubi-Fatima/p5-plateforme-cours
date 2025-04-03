const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

const {verifyToken} = require('../middleware/auth')


router.get("/all", verifyToken, async(req, res)=>{
    try{
        const Teachers = await Teacher.find({})
        res.status(200).json(Teachers)
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post("/add", verifyToken, async(req, res)=>{
    try{
        const newTeacher = new Teacher(req.body)
        const teacher = await newTeacher.save();
        res.json(teacher) 
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})
module.exports = router;