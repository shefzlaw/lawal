const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  subscription: {
    end: { type: Number }, // Timestamp
    months: { type: Number } // 3 or 7
  }
});

module.exports = mongoose.model('User', userSchema);