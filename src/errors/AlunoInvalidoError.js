const ApiError = require("./ApiError");

class AlunoInvalidoError extends ApiError{
    constructor(message="Nome e Email são Obrigatórios", statusCode=400){
        super(message, statusCode);
    }
}

module.exports = AlunoInvalidoError