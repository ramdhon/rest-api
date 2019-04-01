const routes = require('express').Router();

const users = require('./users');

const signup = require('./users/signup');
const signin = require('./users/signin');

const authentication = require('../middlewares/authentication');


routes.use('/users', authentication, users);

routes.use('/signup', signup);
routes.use('/signin', signin);


module.exports = routes;