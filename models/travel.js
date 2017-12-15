const mongoose = require('mongoose');
const travelSchema = mongoose.Schema({
  city: String,
  state: String,
  country: String,
  date: String,
  description: String
});

module.exports = mongoose.model('travelTracker', travelSchema);
