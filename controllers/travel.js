const express = require('express');
const router = express.Router();
const Destination = require('../models/travel.js');

router.post('/', async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    res.status(200).json(newDestination);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});
router.get('/', async (req, res) => {
  const allDestinations = await Destination.find();
  res.status(200).json(allDestinations);
});


//DELETE
router.delete ( '/:id' , async ( req , res ) => {
  try {
    const deleteDestination = await Destination.findByIdAndRemove( req.params.id );
    res.status( 200 ).json( deleteDestination );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

module.exports = router;
