const jwt = require("jsonwebtoken");
const { secret } = require("../config/passport");

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "not registered" });
      }
      const { roles: userRoles } = jwt.verify(token, secret);
      console.log(userRoles);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
    });
    if (!hasRole) {
      return res.status(403).json({ message: "not available" });
    }
      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({ message: "not registered" });
    }
  };
};
