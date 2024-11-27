const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const passKey = require("../privateKeys/keys");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const authorization = req.headers.authorization;
  const authArray = authorization.split(" ");
  const JWTtoken = authArray[1];
  try {
    const decodedValue = jwt.verify(JWTtoken, passKey);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "Wrong Admin credentials",
      });
    }
  } catch (err) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = adminMiddleware;
