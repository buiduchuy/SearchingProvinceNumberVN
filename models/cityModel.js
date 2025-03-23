const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: String,
  plate_no: String
});

module.exports = mongoose.model('City', citySchema);
