const mongoose = require('mongoose');
const travelSchema = mongoose.Schema({
  city: {type: String, required: true},
  state: String,
  country: {type: String, required: true},
  duration: String,
  description: String
});

module.exports = mongoose.model('travelTracker', travelSchema);
