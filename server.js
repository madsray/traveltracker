// DEPENDENCIES
const express    = require('express');
const mongoose   = require('mongoose');

const app        = express();


// CONFIG
const PORT       = process.env.PORT ||3000;
const mongoURI   = process.env.MONGODB_URI || 'mongodb://localhost/travelTracker'

// DB
mongoose.connect(mongoURI, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('Mongo disconnected'));
mongoose.Promise = global.Promise;

// CONTROLLERS
const travelController = require('./controllers/travel');
// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

app.use('/travel', travelController);
// LISTEN
app.listen(PORT, () => console.log('Travel Tracker running on port: ', PORT));
