const express = require('express');
const router = express.Router();
const Destination = require('../models/travel.js');


router.get('/', async (req, res) => {
  const allDestinations = await Destination.find();
  res.status(200).json(allDestinations);
});

router.post('/', async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    res.status(200).json(newDestination);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});
router.delete('/', async (req,res) => {
  const oneDestination = await Destination.findByIdAndRemove(req.params.id);
  res.redirect('/')
  console.log('delete');
})

module.exports = router;
