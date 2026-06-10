require("dotenv").config({ override: true });
const express = require('express');
const connect = require('./database/db');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const authroutes = require("./routes/auth-routes");
const getUserByMobile = require('./profile');
const researchRoutes = require('./routes/research-routes');
const reportRoutes = require('./routes/report-routes');
const userRoutes = require('./routes/profile-routes');
const formRoutes = require('./routes/form-routes');

const path = require('path');

app.use(cors({
    origin: true,
    credentials: true
}));

app.get('/scripts/config.js', (req, res) => {
    console.log("ROUTE HANDLER API_BASE_URL:", process.env.API_BASE_URL);
    res.setHeader('Content-Type', 'application/javascript');
    res.send(`window.API_BASE_URL = "${process.env.API_BASE_URL || ''}";`);
});

app.use(express.static(path.join(__dirname, '..')));


connect();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.url} - Body:`, req.body);
    next();
});

app.use('/api/auth', authroutes);
app.use('/api/users', userRoutes);
app.use('/api/profile', getUserByMobile);
app.use('/api/form', formRoutes);
app.use('/api/research', researchRoutes);   // 🔥 New
app.use('/api/report', reportRoutes);




app.listen(port, () => {
    console.log(`the server is running ${port}`);
});
