const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         let err = new Error('Authorization header missing or malformed');
//         err.status = 401;
//         return next(err);
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         let decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         req.user = decode;
//         next();
//     } catch (err) {
//         err = err.message || "Invalid or expired token";
//         err.status = 401;
//         return next(err);
//     }
// }

// module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     const err = new Error("Authorization header missing or malformed");
//     err.status = 401;
//     return next(err);
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     const err = new Error("Invalid or expired token");
//     err.status = 401;
//     return next(err);
//   }
// };

// module.exports = authMiddleware;



const authMiddleware = (req, res, next) => {
  console.log("HEADERS:", req.headers);
  console.log("AUTH HEADER:", req.headers.authorization);

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];
  console.log("TOKEN RECEIVED:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("DECODED:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
module.exports = authMiddleware;
