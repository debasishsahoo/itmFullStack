const express = require("express");

const { getStudents, createStudents, updateStudents, deleteStudents, getStudent } = require("../Controllers/Student.controller")

const router = express.Router();


router.get('/', getStudents);//get all student
router.post('/', createStudents);// create one student data
router.delete('/:id', deleteStudents);//delete one student data
router.put('/:id', updateStudents);//update one student data
router.get('/:id', getStudent);//get one student data

module.exports = router;