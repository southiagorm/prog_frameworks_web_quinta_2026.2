const express = require("express");
const pessoaController = require("../controllers/PessoaController");
const validarPessoa = require("../middlewares/validarPessoa");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, (request, response, next)=>{
    console.log(`Esse middleware está executando depois da autenticação: ${request.user.email}`);
    next();
}, pessoaController.findMany);
router.post("/", validarPessoa, pessoaController.create);

module.exports = router;
