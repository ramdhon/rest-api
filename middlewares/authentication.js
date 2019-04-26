const jwt = require('../helpers/jwt');
const Model = require('../models');

module.exports = (req, res, next) => {
  try {
    let decoded = jwt.verify(req.headers.token);
    Model
      .User
      .findOne({
        where: {
          username: decoded.username
        }
      })
      .then(user => {
        if (!user) {
          res.status(400).json({ message: 'not recognized input data' });
        } else {
          next();
        }
      })
  } catch(err) {
    res.status(400).json({ message: 'authentication failure', err });
  }
}