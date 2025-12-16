const express = require('express');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors())

app.use('/teste',async(req,res)=>{
    return res.status(200).json([{"Nome":"Markim","Categorias":"A,B","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL-aV5HCfQzueQoSwQ_CkMrJ5E5sacUK9lA&s"},{"Nome":"Manel que da o anel","Categorias":"A,B,C,D","img":"https://ds-images.bolavip.com/news/image/740/416/?src=https://images.bolavip.com/webp/br/full/BBR_20211206_BBR_679332_pedro-guilherme_crop1638809329085jpg_242310155.webp"}]);
})


app.listen(3000,()=>{
    console.log('rodando em http://localhost:3000')
})

