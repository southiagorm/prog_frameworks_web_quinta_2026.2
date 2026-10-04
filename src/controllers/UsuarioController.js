const usuarioService = require("../services/UsuarioService");

class UsuarioController{
    async create(request, response){
        const user = await usuarioService.create(request.body);

        return response.status(201).json({user});
    }
}

module.exports = new UsuarioController();