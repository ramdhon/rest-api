const users = require('express').Router();

const UserController = require('../../controllers/user');

const authorizationUser = require('../../middlewares/authorization_authenticatedUserOrAdmin');
const authorizationAdmin  = require('../../middlewares/authorization_admin');

users.get('/', authorizationAdmin, UserController.all);
users.get('/:id', authorizationUser, UserController.one);
users.post('/', authorizationAdmin, UserController.create);
users.delete('/:id', authorizationAdmin, UserController.delete);
users.put('/:id', authorizationUser, UserController.update);
users.patch('/:id', authorizationUser, UserController.update);

module.exports = users;