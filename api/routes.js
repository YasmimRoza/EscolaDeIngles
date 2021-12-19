const { Router } = require('express');
const router = Router();
const PessoaController = require('./controller/PessoaController')
const NiveisController = require('./controller/NiveisController')
const TurmasController = require('./controller/TurmasController')

//Pessoas
router.get('/listapessoas', PessoaController.show)
router.get('/pessoas/:id', PessoaController.search)
router.post('/pessoas', PessoaController.create)
router.put('/pessoas/:id', PessoaController.update)
router.delete('/pessoas/:id', PessoaController.delete)

//Niveis
router.get('/listaniveis', NiveisController.show)
router.get('/nivel/:id', NiveisController.search)
router.post('/nivel', NiveisController.create)
router.put('/nivel/:id', NiveisController.update)
router.delete('/nivel/:id', NiveisController.delete)

//Turmas
router.get('/listaturmas', TurmasController.show)
router.get('/turma/:id', TurmasController.search)
router.post('/turma', TurmasController.create)
router.put('/turma/:id', TurmasController.update)
router.delete('/turma/:id', TurmasController.delete)

module.exports = router 