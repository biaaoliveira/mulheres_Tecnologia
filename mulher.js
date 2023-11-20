const express = require("express")
const router = express.Router()

//const: informação que não muda
const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Ada Lovelace",
        imagem: "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
        minibio: "Primeira pessoa a criar um programa computacional"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
