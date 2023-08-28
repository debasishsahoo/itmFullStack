const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorHandler = require("./Middlewares/Error.middlware");
const ItmDB = require('./DB/mongo.db');
const StudentRouter = require('./Routes/Student.route');
const UserRouter = require('./Routes/User.route')
const app = express();
// Middlewares
app.use(express.json({ limit: '20mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
// app.use(
//     cors({
//         origin: ["http://localhost:3000", "http://localhost:4000"],
//         credentials: true,
//     })
// );

//Configuration
dotenv.config();
const PORT = process.env.PORT;

// Routes Middleware
app.get('/api/check', (req, res) => res.send('App is running'));
app.use('/api/student', StudentRouter);
app.use('/api/user', UserRouter);

// Error Middleware
app.use(errorHandler);

ItmDB();
app.listen(PORT, () => {
    console.log('\x1b[43m', '\x1b[32m', `✅ Server Running on 127.0.0.1:${PORT}😊😊😊😊😊`);
});
