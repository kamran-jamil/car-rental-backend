// middleware for doing role-based permissions
function isAuthorized(...permittedRoles) {
  return (req, res, next) => {
    const { role } = req.user;
    if (role && permittedRoles.includes(role)) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      res.status(403).json({ message: "Don't have permission" });
    }
  };
}

module.exports = isAuthorized;
