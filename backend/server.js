require("dotenv").config();
const express = require('express');
const connect = require('./database/db');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const authroutes = require("./routes/auth-routes");
const getUserByMobile = require('./profile');

app.use(cors({
    origin: true,
    credentials: true
}));

connect();

app.use(express.json())

app.use('/api/auth', authroutes);
app.use('/api/profile', getUserByMobile);

app.listen(port, () => {
    console.log(`the server is running ${port}`);
})
