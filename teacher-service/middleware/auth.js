const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Le token est obligatoire pour l'authentification" });
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    
    next();

  } catch (error) {
    return res.status(401).json({ message: "Token invalide" });
  }
}

module.exports = {verifyToken};
