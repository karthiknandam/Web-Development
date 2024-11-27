const jwt = require("jsonwebtoken");
const passKey = require("../privateKeys/keys");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const fullToken = req.headers.authorization;
  const auth = fullToken.split(" ");
  const JWTtoken = auth[1];
  try {
    const finder = jwt.verify(JWTtoken, passKey);
    if (finder.username) {
      next();
    } else {
      res.status(403).json({
        msg: "Invalid User Credentials",
      });
    }
  } catch (err) {
    res.json({
      msg: "Invalid Details",
      err,
    });
  }
}

module.exports = userMiddleware;
