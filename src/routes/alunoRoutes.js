const express = require("express");
const alunoController = require("../controllers/AlunoController")

const router = express.Router();

router.get("/", (request, response, next)=>{
    console.log("Esse middleware está executando antes do controller!");
    next();
}, alunoController.findMany);
router.post("/", alunoController.create);

module.exports = router;