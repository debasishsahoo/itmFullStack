const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    regId: Number,
    name: String,
    course: String,
    section: {
        type: String, default: "A"
    },
});

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;