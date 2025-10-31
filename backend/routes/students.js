const express = require('express');
const Student = require('../models/Student');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// GET /api/students - Get all students (Admin only)
router.get('/', auth, adminAuth, async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json({ students });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /api/students/:id - Get single student (Admin only)
router.get('/:id', auth, adminAuth, async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ student });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid student ID' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/students - Create new student (Admin only)
router.post('/', auth, adminAuth, async (req, res) => {
  try {
    const {
      name,
      email,
      registrationNo,
      department,
      gender,
      cnic,
      dateOfBirth,
      program,
      semester,
      section,
      currentCgpa,
      graduated,
      phone,
      country,
      city,
      guardianPhone,
      status
    } = req.body;

    const student = new Student({
      name,
      email,
      registrationNo,
      department,
      gender,
      cnic,
      dateOfBirth,
      program,
      semester,
      section,
      currentCgpa,
      graduated,
      phone,
      country,
      city,
      guardianPhone,
      status
    });

    await student.save();
    res.status(201).json({
      message: 'Student created successfully',
      student
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email or registration number already exists' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/students/:id - Update student (Admin only)
router.put('/:id', auth, adminAuth, async (req, res) => {
  try {
    const {
      name,
      email,
      registrationNo,
      department,
      gender,
      cnic,
      dateOfBirth,
      program,
      semester,
      section,
      currentCgpa,
      graduated,
      phone,
      country,
      city,
      guardianPhone,
      status
    } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        registrationNo,
        department,
        gender,
        cnic,
        dateOfBirth,
        program,
        semester,
        section,
        currentCgpa,
        graduated,
        phone,
        country,
        city,
        guardianPhone,
        status
      },
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      message: 'Student updated successfully',
      student
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email or registration number already exists' });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid student ID' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/students/:id - Delete student (Admin only)
router.delete('/:id', auth, adminAuth, async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      message: 'Student deleted successfully',
      student
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid student ID' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;