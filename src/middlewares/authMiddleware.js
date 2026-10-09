const {validarToken} = require("../utils/jwt");

module.exports = (request, response, next)=>{

    const authorization = request.headers.authorization;

    if(!authorization){
        return response.status(401).json({error: "Token não informado"});
    }

    //Bearer kajdkjakjdkjdakdjkadjkjadkj
    const [tipo, token, extra] = authorization.split(" ");

    if(tipo !== "Bearer" || !token || extra){
        return response.status(401).json({error: "Token invalido"});       
    }

    try{
        const payload = validarToken(token);

        request.user = {
            id: payload.id,
            email: payload.email,
            role: payload.role
        }

        next();

    }catch(err){
        return response.status(401).json({error: "Token invalido ou expirado"});       
    }
}