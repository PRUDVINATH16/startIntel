require("dotenv").config();
const express = require('express');
const connect = require('./database/db');
const user = require('./models/users');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000;
const authroutes = require("./routes/auth-routes");

app.use(cors({
    origin: true,
    credentials: true
}));

connect();

app.use(express.json())

app.use('/api/auth', authroutes)

app.listen(port, () => {
    console.log(`the server is running ${port}`);
})
