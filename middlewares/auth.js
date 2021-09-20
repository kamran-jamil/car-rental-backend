const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    const bearer = token.split(" ");
    const bearerToken = bearer[1];
    const verified = jwt.verify(bearerToken, "access");
    req.user = verified;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
