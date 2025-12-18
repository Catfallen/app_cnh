const fs = require("fs/promises");
const getPlayer = require("../utils/imagens");
const filePath = "./database/instrutores.json"
const insertSorted = require("../utils/pesquisa").insertSorted

async function inserirInstrutor(req, res) {
    try {
        const {nome,email,categorias} = req.params;
        console.log(nome)
        const file = await fs.readFile(filePath, 'utf8');
        console.log(file)
        const json = JSON.parse(file);
        const id = Object.keys(json).length + 1
        const img = await getPlayer();
        console.log(img)
        
        insertSorted(json, { id, 'email': email, "nome": nome, img,categorias }, "email")
        console.log(json)


        await fs.writeFile(
            filePath,
            JSON.stringify(json, null, 2),
            'utf8'
        );
        return res.status(200).json({ "msg": "instrutor inserido com sucesso" })
    } catch (err) {
        return res.status(500).json({ 'msg': "Erro interno no servidor" })
    }
}

async function getInstrutores(req,res) {
    try{
        const file = await fs.readFile(filePath,'utf-8');
        console.log(file)
        const json = JSON.parse(file);
        return res.status(200).json(json);
    }catch(err){
        return res.status(500).json({"msg":"erro interno no servidor"})
    }
}

module.exports = {
    inserirInstrutor,getInstrutores
}