// server.js - BACKEND COMPLETO

// PARTE 1- IMPORTAR AS FERRAMENTAS NECESSÁRIAS
const express = require('express');
const path = require('path');
const {DatabaseSync} = require('node:sqlite');


// PARTE 2 - CRIAR O SERVIDOR e abrir o banco de dados
const app = express();
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db'));
// ABRE O BANCO DE DADOS(SE NÃO EXISTIR, CRIA UM NOVO), ------> ___dirname = pasta deste arquivo

// cria a tabela "tarefas" caso não exista
banco.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo      TEXT NOT NULL,
        concluida   INTEGER DEFAULT 0
)`);

// PARTE 3 - CONFIGURAR O SERVIDOR PARA RECEBER REQUISIÇÕES
// permite que o servidor receba requisições com dados no formato JSON
// app.use:"Todo pedido que chegar, passe por esse middleware, que vai transformar o corpo da requisição em JSON."

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public'))); // permite que o servidor sirva arquivos estáticos da pasta "public"

// PARTE 4 - CRIAR AS ROTAS DA API
// rota: a combinaçaõ do meétodo + endereço
// API: é o conjuto de rotas que o servidor disponibiliza para o cliente


// toda rota recebe 2 coisas: 
// requisição (request) e resposta (response)

// Operação | Método HTTP | Endereço | Comando SQL
// ------------------------------------------------
// Create   | POST        | /tarefas     | INSERT
// Read     | GET         | /tarefas     | SELECT
// Update   | PUT         | /tarefas/:id | INSERT
// Delete   | DELETE      | /tarefas/:id | DELETE

// criar
// post/ tarefas -->salvar uma nova tarefa no banco de dados
// criar
// post /tarefas --> salvar uma nova tarefa no banco de dados
app.post('/tarefas', (req, res) => {
    const { titulo } = req.body; // pega o título da tarefa do corpo da requisição

    // se o título estiver vazio, retorna um erro (400) e para aqui
    if (!titulo) {
        return res.status(400).json({ erro: 'Digite um título' })
    }

    // INSERT: adiciona uma linha na tabela
    banco.prepare('INSERT INTO tarefas (titulo) VALUES (?)').run(titulo);

    res.json({ ok: true });
});

// PASSO A PASSO do que acontece no CREATE
// 1) O usuário digita no campo e clica em "adicionar" no navegador
// 2) O front manda um POST para /tarefas com {"titulo":"..."}
// 3) Chega aqui no server. O express escolhe esta rota porque o metodo POST e o endereço é /tarefas
// 4) "requisição.body.titulo" é o texto que o front mandou, lembrando só funciona por causa do express.json() que está lá em cima!
// 5) Validação: se vier vazio, respondemos com status 400(= "pedido errado") em um JSON de erro
// 6)Insert em tarefaas
// 7)resposta


// ler
// get /tarefas --> retorna todas as tarefas do banco de dados
app.get('/tarefas', (req, res) => {
    // SELECT: pega todas as linhas da tabela
    const tarefas = banco.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
    res.json(tarefas);
});

app.put('/tarefas/:id', (req, res) => {
    const  id  = req.params.id;
    const concluida = req.body.concluida;

    // UPDATE: atualiza a coluna "concluida" da linha com o id especificado
    banco.prepare('UPDATE tarefas SET concluida = ? WHERE id = ?').run(concluida, id);
    res.json({ ok: true });
});

// APAGAR
// DELETE /tarefas/5 --->apaga a tarefa com id=5
app.delete('/tarefas/:id',(req,res)=>{
    const id = req.params.id;

    // DELETE: remove a linha que tem esse id
    banco.prepare('DELETE FROM tarefas WHERE id = ?').run(id);
    res.json({ ok: true });
});

// PARTE 5 - INICIAR O SERVIDOR
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});