'use strict';

const PlacesController = require('./app/http/controllers/placescontroller');
const Config = require('./app/configuration/config');
const express = require('express');
const bodyParser = require('body-parser');
const placesController = new PlacesController();

const app = express();

// Run server to listen on port 3000.
const server = app.listen(Config.port, () => {
  console.log('listening on *:' + Config.port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/users/:userId', placesController.places.bind(placesController));
