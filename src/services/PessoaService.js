const prisma = require("../databases/prisma");
const PessoaInvalidaError = require("../errors/PessoaInvalidaError");

class PessoaService{

    async findMany(page, pageSize){
        const pessoas = await prisma.pessoa.findMany({
            skip: (page-1)*pageSize,
            take: Number(pageSize)
        });
        return pessoas;
    }

    async create(pessoa){
        const {nome, email} = pessoa;
        if(!nome || !email){
            throw new PessoaInvalidaError();
        }

        const novaPessoa = await prisma.pessoa.create({data: pessoa});

        return novaPessoa;
    }
}

module.exports = new PessoaService();
