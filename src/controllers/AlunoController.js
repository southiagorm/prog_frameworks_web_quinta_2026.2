const alunoService = require("../services/AlunoService");

class AlunoController{
    
    async findMany(request, response){
        let {page, pageSize} = request.query;
        page ||= 1;
        pageSize ||= 10;
        
        const alunos = await alunoService.findMany(page, pageSize);
        return response.status(200).json({alunos});
    }

    async create(request, response){
        try{
            const aluno = await alunoService.create(request.body);
            return response.status(201).json({aluno});
        }catch(error){
            return response.status(400).json({error: error.message});
        }
    }

}

module.exports = new AlunoController();