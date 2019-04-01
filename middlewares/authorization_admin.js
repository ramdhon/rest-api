const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  let decoded = jwt.verify(req.headers.token, process.env.SECRET);
  if (decoded.role !== 'admin') {
    res.status(401).json({
      message: "authorization failure - only admin can access"
    })
  } else {
    next();
  }
}