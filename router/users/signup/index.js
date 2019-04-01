const signup = require ('express').Router();

const SignUpController = require('../../../controllers/user')


signup.post('/', SignUpController.create)


module.exports = signup;