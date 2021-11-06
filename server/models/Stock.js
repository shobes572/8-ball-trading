const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema({
  ticker: {
    type: String,
    require: true,
  }
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;