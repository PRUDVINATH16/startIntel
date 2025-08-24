const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);
    req.user = decoded; // 👈 now req.user contains { userId, username, phone }
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
