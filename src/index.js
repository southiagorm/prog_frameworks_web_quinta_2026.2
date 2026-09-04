require("dotenv/config")
const express = require("express");
const alunoRouter = require("./routes/alunoRoutes");

const app = express();
app.use(express.json());
app.use("/alunos", alunoRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on server: ${process.env.PORT}`)
});

