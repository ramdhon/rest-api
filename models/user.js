const bcrypt = require('bcryptjs');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        let salt = bcrypt.genSaltSync(8);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};