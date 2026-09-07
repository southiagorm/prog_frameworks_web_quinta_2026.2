# Programação para Frameworks Web

Este repositório contém os códigos e exemplos desenvolvidos durante a disciplina **Programação para Frameworks Web**, ministrada pelo professor **Thiago Rodrigues**.

## 🚀 Executando o projeto

Para executar o projeto em sua máquina, siga os passos abaixo.

### 1. Clonar o repositório

Clone este repositório utilizando o Git:

```bash
git clone URL_DO_REPOSITORIO
```

Em seguida, entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

### 2. Instalar as dependências

Com o projeto na pasta, execute:

```bash
npm install
```

Esse comando irá instalar todas as dependências necessárias para executar o projeto.

Depois,

```bash
npx prisma generate
```

Esse comando irá fazer o Prisma gerar o Prisma Client a partir do seu schema.prisma.

### 3. Variáveis de Ambiente

> ⚠️ **Lembrete:** sempre que alterar o banco de dados, usuário, senha, porta ou ambiente de execução, **atualize as variáveis de ambiente abaixo**.

```env
DATABASE_URL="mysql://root:thiago@localhost:3306/univ"

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=thiago
DB_NAME=univ

PORT=3000
```

#### Banco de Dados

As variáveis abaixo devem corresponder às configurações do banco MySQL utilizado pela aplicação:

* `DATABASE_URL` — URL de conexão com o banco.
* `DB_HOST` — endereço do servidor MySQL.
* `DB_USER` — usuário do banco.
* `DB_PASSWORD` — senha do banco.
* `DB_NAME` — nome do banco de dados.

#### Servidor

* `PORT` — porta utilizada pela aplicação.

### ⚠️ Importante

Ao clonar o projeto ou configurar um novo ambiente, verifique e **atualize essas variáveis antes de executar a aplicação**.

### 4. Executar o projeto

Após a instalação das dependências, execute o comando definido no projeto para iniciá-lo, por exemplo:

```bash
npm start
```

ou:

```bash
npm run dev
```

> **Observação:** O comando para iniciar o projeto pode variar de acordo com o projeto desenvolvido em aula. Consulte o `package.json` para verificar os scripts disponíveis.

---

**Disciplina:** Programação para Frameworks Web
**Professor:** Thiago Rodrigues
