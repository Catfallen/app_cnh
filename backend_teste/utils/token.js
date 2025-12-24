require('dotenv').config();

const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: "24h"})
}

function verifyToken(token){
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    return decoded;
}

module.exports = {generateToken,verifyToken}