const bcrypt = require("bcrypt");
const prisma = require("../databases/prisma");

class UsuarioService{
    async create({nome, email, password, role}){
        const newUser = await prisma.usuario.create({
            data:{
                email,
                password: await bcrypt.hash(password, 10),
                role,

                pessoa:{
                    create:{
                        nome
                    }
                }
            },
            select:{
                id: true,
                email: true,
                role: true,

                pessoa:{
                    select: {
                        nome: true
                    }
                }
            }
        });

        return newUser;
    }
}

module.exports = new UsuarioService();
