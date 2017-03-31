'use strict';

import PlacesController from './app/http/controllers/placescontroller';

const express = require('express');
const bodyParser = require('body-parser');
const placesController = new PlacesController();

const app = express();

// Run server to listen on port 3000.
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/users/:userId', placesController.places.bind(placesController));
