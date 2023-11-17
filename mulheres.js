const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Ada Lovelace',
        imagem: 'https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg',
        minibio: 'Primeira programadora'
    },

    {
        nome: 'Carol Shaw',
        imagem: 'https://i0.wp.com/www.memoriabit.com.br/wp-content/uploads/2014/07/Carol-Shaw-com-premios-por-River-Raid.jpg?resize=696%2C518&ssl=1',
        minibio: 'Primeira mulher desenvolvedora de jogos digitais'

    },

    {
        nome: 'Grace Happer',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg',
        minibio: 'A mãe da programação de computadores'

    },

    {
        nome: 'Jean Sammet',
        imagem: 'https://projetolua.ifce.edu.br/wp-content/uploads/2020/07/ajean.jpg',
        minibio: 'Uma das primeiras mulheres com diploma em ciência da computação'

    },

    {
        nome: 'Karen Sparck Jones',
        imagem: 'https://static01.nyt.com/images/2019/01/07/obituaries/07overlooked-Jones/00overlooked-Jones2-superJumbo-v3.jpg',
        minibio: 'Uma das idealizadoras do conceito de "inverso da frequencia em documentos'

    },

    {
        nome: 'Radia Perlman',
        imagem: 'https://projetolua.ifce.edu.br/wp-content/uploads/2020/07/radia-perlman-blog-da-engenharia-3.jpg',
        minibio: 'A mãe da internet'

    },

    {
        nome: 'Frances Allen',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allen_mg_2528-3750K-b.jpg/800px-Allen_mg_2528-3750K-b.jpg',
        minibio: 'A primeira mulher a ganhar o "Nobel da informática"'

    },

    {
        nome: 'Gladys West',
        imagem: 'https://www.uninabuco.edu.br/sites/joaquimnabuco.edu.br/files/imagens/whatsapp_image_2022-07-21_at_10.34.16.jpeg',
        minibio: 'A  mãe do GPS'

    },

]

function mostraMulheres(request, response){
    response.json({
        nome: "Ada Lovelace",
        imagem: "https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg",
        minibio: "Primeira pessoa a criar um programa computacional"
    })
}

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
