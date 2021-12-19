const database = require('../models')

class PessoaController{
     async index(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new PessoaController;