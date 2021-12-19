const database = require('../models')

class PessoaController{
    //Lista todas as Pessoas
     async show(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    //Procura uma por ID
    async search(req, res){
        const { id } = req.params

        try{
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Cria uma nova pessoa
    async create(req, res){
        const novaPessoa = req.body;

        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            
            return res.status(200).json(novaPessoaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }

    }

    //Altera uma pessoa
    async update(req, res){
        const { id } = req.params
        const novasInfos = req.body

        try{
            await database.Pessoas.update(novasInfos, 
                {
                    where: {
                        id: Number(id)
                    }
                })
            
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Deleta 
    async delete(req, res){
        const { id } = req.params
        try{
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({
                mensagem: `id ${id} deletado`
            })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Procura uma pessoa por sua Matricula
    //http://localhost:3000/pessoas/:estudanteID/matricula/:matriculaID
    //http://localhost:3000/pessoas/1/matricula/5
    async PegaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params;
        try{
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })

            return res.status(200).json(umaMatricula)   
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    async criaMatricula(req, res){
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

        try{
            const novaCriadaMatricula = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaCriadaMatricula)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    async updateMatricula(req, res){
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body

        try{
            await database.Matriculas.update(novasInfos, 
                {
                    where: {
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                    }
                })
            
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })

            return res.status(200).json(matriculaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    async deleteMatriculas(req, res){
        const { estudanteId, matriculaId } = req.params;
        try{
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            })

            return res.status(200).json({
                mensagem: `id ${matriculaId} deletado`
            })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = new PessoaController;