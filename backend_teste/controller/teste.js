const fs = require("fs/promises");
const getPlayer = require("../utils/imagens");
const filePath = "../database/instrutores.json"
const insertSorted = require("../utils/pesquisa").insertSorted



async function inserirInstrutor(nome,email,senha,categorias) {
    const file = await fs.readFile(filePath, 'utf8');
    console.log(file)
    const json = JSON.parse(file);

    const id = Object.keys(json).length + 1
    const img = await getPlayer()
    console.log(img)
    insertSorted(json,{id,'email':"zmarkim@223232","nome":"markim",img},"email")
    console.log(json)
    
    
    await fs.writeFile(
        filePath,
        JSON.stringify(json, null, 2),
        'utf8'
    );
}


inserirInstrutor("markim","markim@","123","a,b,c,d",'img')