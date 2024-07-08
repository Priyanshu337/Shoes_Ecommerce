const jwt = require('jsonwebtoken');


function auth(req, res, next) {
  try {
    const token = req.cookies.token;    // Access the token from the cookies

    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" })

    const verified = jwt.verify(token, process.env.JWT_SECRET);   // use to store the verified id which we get after verification from jwt token

    req.user = verified.user;

    next();             // i used this because of this it will move on to next functions in customer router.
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}
module.exports = auth;





