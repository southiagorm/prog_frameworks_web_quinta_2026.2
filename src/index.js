require("dotenv/config")
const express = require("express");
const cors = require("cors");
const pessoaRouter = require("./routes/pessoaRoutes");
const usuarioRouter = require("./routes/usuarioRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());
app.use((request, response, next)=>{
    console.log("Esse middleware esta sendo executado antes das rotas de pessoas!");
    next();
});
app.use("/pessoas", pessoaRouter);
app.use("/usuarios", usuarioRouter);
app.use("/", authRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on server: ${process.env.PORT}`)
});

