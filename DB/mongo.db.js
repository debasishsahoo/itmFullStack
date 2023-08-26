
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.MONGODB;

module.exports = function ItmDB() {
    mongoose
        .connect(URL)
        .then(() => console.log("\x1b[32m", '✅ DATABASE CONNECTED 😁😁😁😁😁😁 '))
        .catch((err) => console.log(err));
};
