const signin = require('express').Router();

const SignInController = require('../../../controllers/signin');


signin.post('/', SignInController.signIn);


module.exports = signin;