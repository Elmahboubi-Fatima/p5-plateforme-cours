const express = require('express');
const router = express.Router();
const CourseModel = require('../models/Course');
const {verifyToken} = require('../middleware/auth')

router.get("/all", verifyToken, async (req, res)=>{
    try{
        const Course = await CourseModel.find({})
        res.json(Course) 
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post("/add", verifyToken, async (req, res)=>{
    try{
        const newCourse = new CourseModel(req.body)
        const course = await newCourse.save();
        res.json(course) 
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put("/update/:id", verifyToken, async(req, res)=>{
    try {
        const course = await CourseModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    }
    catch(error){
        res.json({ message: error.message });
    }
})

router.delete("/delete/:id", verifyToken, async(req, res)=>{
    try {
        const course = await CourseModel.deleteOne({id: req.params.id});
        res.json(course)
    }
    catch(error){
        res.json({ message: error.message });
    }
})

router.get("/search/:id", verifyToken, async(req, res)=>{
    try{
        const Course = await CourseModel.findOne({id: req.params.id})
        res.json(Course) 
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router