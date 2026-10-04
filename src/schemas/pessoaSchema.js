const z = require("zod");

const pessoaSchema = z.object({
    nome: z.string("O nome não pode ser númerico").trim().min(3, "Nome muito curto."),
    email: z.string().trim().email("E-mail inválido")
});

module.exports = pessoaSchema;
