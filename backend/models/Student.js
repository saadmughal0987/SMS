const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  registrationNo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  cnic: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  program: {
    type: String,
    required: true,
    trim: true
  },
  semester: {
    type: String,
    required: true,
    trim: true
  },
  section: {
    type: String,
    required: true,
    trim: true
  },
  currentCgpa: {
    type: Number,
    required: true,
    min: 0,
    max: 4
  },
  graduated: {
    type: String,
    required: true,
    enum: ['Yes', 'No']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  guardianPhone: {
    type: String,
    required: true,
    trim: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'graduated'],
    default: 'active'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);