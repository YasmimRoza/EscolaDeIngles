const database = require('../models')

class NiveisController{
    
    //Busca todos os Niveis dentro do banco
    async show(req, res) {
        try{ 
            const todosOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Procura um ID dentro do banco
    async search(req, res){
        const { id } = req.params;

        try{
            const umNivel = await database.Niveis.findOne({
                where: { id: Number(id) }
            })

            return res.status(200).json(umNivel);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Cadastra um nivel
    async create(req, res){
        const novoNivel = req.body;

        try{
            const novoNivelCriado = await database.Niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Altera um nivel
    async update(req, res){
        const { id } = req.params;
        const infosNovos = req.body;

        try{
            await database.Niveis.update(infosNovos, {
                where: { id: Number(id) }
            })

            const nivelAtualizado = await database.Niveis.findOne({where: {id: Number(id)}})

            return res.status(200).json(nivelAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Deleta um nivel
    async delete(req, res) {
        const { id } = req.params

        try {
            await database.Niveis.destroy({ 
                where: { id: Number(id) }
            })

            return res.status(200).json({mesagem: `id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = new NiveisController;