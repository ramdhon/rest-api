const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let decoded = jwt.verify(req.headers.token, process.env.SECRET);
  if (decoded.id == req.params.id || decoded.role === "admin") {
    next();
  } else {
    res.status(401).json({
      message: "authorization failure - you can not access other id"
    })
  }
}