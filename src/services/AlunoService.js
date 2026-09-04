const prisma = require("../databases/prisma");

class AlunoService{

    async create(aluno){
        const novoAluno = await prisma.aluno.create({data: aluno});

        return novoAluno;
    }
}

module.exports = new AlunoService();