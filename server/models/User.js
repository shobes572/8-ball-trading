const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Stock = require('./Stock');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  alpacaAPI: {
    type: String,
    required: false,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  stocks: [Stock.Schema]
});

userSchema.pre('save', async function(next) {
  const saltRounds = 10;
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  } else if (this.isModified('alpacaAPI')) {
    this.alpacaAPI = await bcrypt.hash(this.alpacaAPI, saltRounds);
  } else if (this.isNew) {
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.alpacaAPI = await bcrypt.hash(this.alpacaAPI, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;