// API DE CACHORROS

// Agora as fotos não são mais baixadas automaticamente
// elas devem existir manualmente na pasta
// data/fotos

// rotas :
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// importar framework express para criar o servidor 
const express = require("express");
// importar o CORS para permitir requisições de outros domínios (ex: frontend)
const cors = require("cors");
// importar o módulo de arquivos do NODE
const fs = require("fs");
// importar utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// importar o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");

// criar aplicação express
const app = express();
// definir a porta onde o servidor vai funcionar
const PORT = 3000;

// HABILITAR O USO DO CORS NA APLICAÇÃO
app.use(cors());

// SERVIR ARQUIVOS ESTÁTICOS
// Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos
app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos")   
    )
);

//==================================================
// FUNÇÃO AUXILIAR
//==================================================

// função que recebe um array e retorna um item aleatório dele
function sortear(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// =================
// ROTAS DA API
// =================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res) => {
    // pegar todas as fotos de todas as raças
    const todasAsFotos = Object.values(cachorros).flat();

    // sorteia uma foto aleatória
    const item = sortear(todasAsFotos);

    // responder para o cliente em formato JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2 - Cachorro por raça
app.get("/api/cachorros/:raca", (req, res) => {
    // pega o parâmetro da URL em minúsculas
    const raca = req.params.raca.toLowerCase();

    // verifica se a raça NÃO existe no ficheiro JSON
    if (!cachorros[raca]) {
        res.status(404).json({
            status: "error",
            message: `Raça "${raca}" não encontrada`
        });
        return; // encerra a execução da rota
    }

    // sorteia uma foto da raça solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// =================
// INICIA O SERVIDOR
// =================

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📁 Coloque as fotos manualmente em: data/fotos/`);
});