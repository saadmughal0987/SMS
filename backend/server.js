const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// ==========================
// 🔹 Middleware
// ==========================
app.use(cors());
app.use(express.json());

// ==========================
// 🔹 MongoDB Connection
// ==========================
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1); // Stop app if DB not connected
  });

// ==========================
// 🔹 Routes
// ==========================
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// ==========================
// 🔹 Health & Test Routes
// ==========================
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend route works!' });
});

// ==========================
// 🔹 Error Handling Middleware
// ==========================
app.use((err, req, res, next) => {
  console.error(' Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ==========================
// 🔹 404 Route (Must be last)
// ==========================
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ==========================
// 🔹 Server Start
// ==========================
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

// ==========================
//  Port-in-use auto fix
// ==========================
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(` Port ${PORT} is already in use. Trying port ${PORT + 1}...`);
    app.listen(PORT + 1, () => {
      console.log(` Server running on port ${PORT + 1}`);
    });
  } else {
    console.error(' Server error:', err);
  }
});
