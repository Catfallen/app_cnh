const prisma = require('../lib/prisma')
const bcrypt = require('bcrypt');



async function criarUsuario({nome,email,senha}) {
    const senhaHash = await bcrypt.hash(senha,10);
    return prisma.usuario.create({
        data:{
            nome,email,senha:senhaHash
        }
    })
}

async function buscarPorEmail(email) {
    return prisma.usuario.findUnique({
        where:{email}
    })
}



async function compararSenha(senha,hash) {
    console.log(senha,hash);
    const compare = await bcrypt.compare(senha,hash);
    return true;
}

module.exports = {
    buscarPorEmail,criarUsuario,compararSenha
}


