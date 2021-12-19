const database = require('../models');

class TurmasController{
    
    //Lista todas as turmas
    async show(req, res){
        try{
            const tudoTurmas = await database.Turmas.findAll()

            return res.status(200).json(tudoTurmas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Buscar por um ID
    async search(req, res){
        const { id } = req.params;

        try{
            const encontrado = await database.Turmas.findOne({ 
                where: { id: Number(id) }
            })

            return res.status(200).json(encontrado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Criar uma nova turma
    async create(req, res){
        const novaTurma = req.body;

        try{
            const TurmaNova = await database.Turmas.create(novaTurma)

            return res.status(200).json(TurmaNova);
        }catch(error){
            return res.status(500).json(error.message)
        }

    }

    //Altera uma turma 
    async update(req, res){
        const { id } = req.params;
        const infosNovos = req.body;

        try{
            await database.Turmas.update(infosNovos, { 
                where: { id: Number(id) }
            })

            const novaTurma = await database.Turmas.findOne({where: { id: Number(id) }})

            return res.status(200).json(novaTurma);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Deleta uma turma  
    async delete(req, res){
        const { id } = req.params;

        try{
            await database.Turmas.destroy({where: { id: Number(id)}})

            return res.status(200).json( {message: `id ${id} turma deletada`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = new TurmasController;