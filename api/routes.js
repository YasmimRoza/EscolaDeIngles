const { Router } = require('express');
const router = Router();
const PessoaController = require('./controller/PessoaController')

router.get('/listapessoas', PessoaController.show)
router.get('/pessoas/:id', PessoaController.search)
router.post('/pessoas', PessoaController.create)
router.put('/pessoas/:id', PessoaController.update)
router.delete('/pessoas/:id', PessoaController.delete)


module.exports = router 