const jwt = require('../utils/token');
const authService = require('../service/auth.service')

async function login(req,res) {
    const {email,senha} = req.body;
    const user = await authService.buscarPorEmail(email);
    console.log(user);
    const compare = await authService.compararSenha(senha,user.senha);
    if(!compare){
        return res.status(401).json({"msg":"senha incorreta"});
    }
    console.log(user);
    const token = jwt.generateToken({id:user.id,nome:user.nome,email:user.email});
    return res.status(200).json({"msg":"tudo certo paizão",token});
}

async function register(req,res) {
    const {nome,email,senha} = req.body;
    const user = await authService.criarUsuario({nome,email,senha});
    return res.status(201).json({nome: user.nome,email: user.email})
}



module.exports = {
    login,register
}