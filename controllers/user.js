const Model = require('../models');
const bcrypt = require('bcryptjs');


class Controller {
  static all(req, res) {
    Model
      .User
      .findAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static one(req, res) {
    Model
      .User
      .findByPk(req.params.id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static create(req, res) {
    Model
      .User
      .create(req.body)
      .then(user => {
        res.status(201).json({ message: 'successufully created', user });
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static delete(req, res) {
    Model
      .User
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(user => {
        res.status(200).json({ message: 'successfully deleted', user });
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }

  static update(req, res) {
    Model
      .User
      .findByPk(req.params.id)
      .then(user => {
        return user.update({
          username: req.body.username,
          email: req.body.email,
          role: req.body.role,
        })
      })
      .then(user => {
        res.status(201).json({ message: 'successfully updated', user });
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;