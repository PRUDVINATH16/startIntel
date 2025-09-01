require("dotenv").config();
const express = require('express');
const connect = require('./database/db');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const authroutes = require("./routes/auth-routes");
const getUserByMobile = require('./profile');
const researchRoutes = require('./routes/research-routes');
const reportRoutes = require('./routes/report-routes');

app.use(cors({
    origin: true,
    credentials: true
}));

connect();
app.use(express.json());

app.use('/api/auth', authroutes);
app.use('/api/profile', getUserByMobile);
app.use('/api/research', researchRoutes);  // 🔥 New
app.use('/api/report', reportRoutes);


app.listen(port, () => {
    console.log(`the server is running ${port}`);
});
