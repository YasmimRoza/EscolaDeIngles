const { Router } = require('express');
const router = Router();
const PessoaController = require('./controller/PessoaController')

router.get('/', PessoaController.index)

module.exports = router 