const express = require('express');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors())

app.use('/teste',async(req,res)=>{
    return res.status(200).json([{"Nome":"Markim","Categorias":"A,B"},{"Nome":"Manel que da o anel","Categorias":"A,B,C,D"}]);
})


app.listen(3000,()=>{
    console.log('rodando em http://localhost:3000')
})

