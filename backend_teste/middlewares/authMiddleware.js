const jwt = require('../utils/token');

function authMiddleware(req,res,next){
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    //Authorization
    const tokenFromAuthHeader = authHeader.toString().startsWith("Bearer") ? authHeader.split(" ")[1] : null;
    console.log(tokenFromAuthHeader)
    const token = tokenFromAuthHeader;

    if(!token){
        return res.status(401).json({"msg":"Token não fornecido"})
    }

    let decoded;
    try{
        decoded = jwt.verifyToken(token);
    }catch(err){
        return res.status(403).json({"msg":"Token invalido ou expirado"});
    }
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    req.userNome = decoded.nome;
    return next();
}

module.exports = authMiddleware;