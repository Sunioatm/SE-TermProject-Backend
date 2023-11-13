const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    // Token is expected to be in the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) {
        return res.status(401).send("Access Denied / Unauthorized request");
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).send("Invalid Token");
    }
}

module.exports = authenticate;
