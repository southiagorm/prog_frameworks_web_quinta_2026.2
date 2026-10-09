const prisma = require("../databases/prisma");
const CredenciaisInvalidasError = require("../errors/CredenciaisInvalidasError");
const {gerarToken} = require("../utils/jwt");
const bcrypt = require("bcrypt");

class AuthService{
    async login({email, password}){
        const usuario = await prisma.usuario.findUnique({
            where: {email}
        });

        if(!usuario){
            throw new CredenciaisInvalidasError();
        }

        const senhaValida = await bcrypt.compare(password, usuario.password);

        if(!senhaValida){
            throw new CredenciaisInvalidasError();
        }

        return gerarToken(usuario);
    }
}

module.exports = new AuthService();