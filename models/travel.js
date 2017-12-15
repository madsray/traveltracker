const mongoose = require('mongoose');
const travelSchema = mongoose.Schema({
  city: String,
  state: String,
  country: String,
  date: String,
  description: String,
  travelAgain: {type: Boolean, default: true}
});

module.exports = mongoose.model('travelTracker', travelSchema);
