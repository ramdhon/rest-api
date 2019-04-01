const Model = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


class UserSignIn {
  static signIn(req, res) {
    Model
      .User
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(user => {
        if (!user) {
          res.status(401).json({
            message: 'username invalid'
          });
        } else {
          let valid = bcrypt.compareSync(req.body.password, user.password);
          if (!valid) {
            res.status(401).json({
              message: 'password invalid'
            });
          } else {
            let token = jwt.sign({
              id: user.id,
              username: user.username,
              role: user.role
            }, process.env.SECRET);
            req.headers.token = token;
            res.status(200).json({ user, token });
          }
        }
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}


module.exports = UserSignIn;