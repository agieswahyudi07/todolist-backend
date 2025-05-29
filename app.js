const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
