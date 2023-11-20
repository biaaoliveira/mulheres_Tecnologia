const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() { //async: processo assincrono - js faz tarefas uma por vez, precisamos dizer ao codigo o que fazer primeiro
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect(process.env.MONGO_URL) //serve para que o node não pare de executar outras pessoas usuárias

        console.log('Conexão com o banco de dados feita com sucesso!') //mensagem na tela
    } catch (erro) {
        console.log(erro)
    }

}

module.exports = conectaBancoDeDados
