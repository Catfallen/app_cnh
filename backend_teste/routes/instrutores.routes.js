const express = require('express');
const router = express.Router();
const instrutoresController = require('../controller/instrutores.controller')


router.get("/novoInstrutor/:nome/:email/:categorias",instrutoresController.inserirInstrutor);

router.get("/all",instrutoresController.getInstrutores)


module.exports = router;