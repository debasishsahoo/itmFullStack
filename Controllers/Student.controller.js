const StudentData = require('../Models/Student.model');
const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
const createStudents = async (req, res) => {
    const student = req.body;
    const newStudent = new StudentData(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
const updateStudents = async (req, res) => {
    const id = req.params.id;
    try {
        const updateStudent = await StudentData.findOneAndUpdate({ _id: id }, req.body);
        if (updateStudent)
            res.status(200).send("Successfully Updated");
        else
            res.status(404).send("Not Updated");
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};
const deleteStudents = async (req, res) => {
    const id = req.params.id;
    try {
        await StudentData.findByIdAndRemove(id);
        res.status(200).send("Successfully deleted");
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};
const getStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await StudentData.findById(id);
        res.status(200).send(student);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

module.exports = {
    getStudents,
    createStudents,
    updateStudents,
    deleteStudents,
    getStudent,
};
