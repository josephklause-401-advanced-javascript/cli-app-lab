const express = require('express');
const app = express();
// Load model plugins
require('./models/register-plugins');

// MIDDLEWARE
const morgan = require('morgan');
const checkConnection = require('./middleware/check-connection');
// uncomment to use ensureAuth on routes
// const ensureAuth = require('./middleware/ensure-auth');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// IS ALIVE TEST
app.get('/hello', (req, res) => res.send('world'));

app.use(checkConnection);

// API ROUTES
const cliUsers = require('./routes/cli-user-route');

app.use('/api/cli-users', cliUsers);

// NOT FOUND
const api404 = require('./middleware/api-404');
app.use('/api', api404);
// using express default 404 for non-api routes

// ERRORS
const errorHandler = require('./middleware/error-handler');
app.use(errorHandler);

module.exports = app;