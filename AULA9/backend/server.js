// API DE CACHORROS

// Agora as foos não são mais baixadas automaticamente
// eles devem exitir manualmente na pasta
// data/fotos

// rotas :
// get /api/cachorros/aleatório
// GET /api/cachorros/:raca

// uimpotar framework express para criar o servidor 
const express = require("express");
// impotar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// importar o módulo de arquivos do NODE
const fs = require("fs")
// importar utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// importar o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json")
// criar  aplicação express
const app = express();
// definir a porta onde o servidor vai funcionar
const PORT  = 3000;
// HABILITAR O USO DO cors NA APLICAÇÃO
app.use(cors());

// SERVIR ARQUIVOS ESTÁTICO



// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo :
// http://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos")   
    )
)

//==================================================
// FUNÇÃO AUXILIAR
//==================================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    // gera um numero aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // Math.random() - Sorteia um número decimal entre 0 e 1
    // Math.random() - array.length - Multiplica o número sorteado pela quantidade de itens
    // Math.floor() - tira a parte decimal, arredondando para baixo.
    const i = Math.floor(Math.random() * array.length)
     // const i = guarda a posição na variável 1
    // retorna o item sorteado
    return array[i];
}