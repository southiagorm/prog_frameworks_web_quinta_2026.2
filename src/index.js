require("dotenv/config")
const express = require("express");
const pessoaRouter = require("./routes/pessoaRoutes");
const usuarioRouter = require("./routes/usuarioRoutes");

const app = express();
app.use(express.json());
app.use((request, response, next)=>{
    console.log("Esse middleware esta sendo executado antes das rotas de pessoas!");
    next();
});
app.use("/pessoas", pessoaRouter);
app.use("/usuarios", usuarioRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on server: ${process.env.PORT}`)
});

