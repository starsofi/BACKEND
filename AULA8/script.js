// API DE DOGS

// ENDEREÇO DA API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random'

// Pegando os elementos do HTML

// imagem pelo seu ID
const fotoCachorro = document.getElementById('fotoCachorro')

// botão pelo seu ID
const btnNovaFoto = document.getElementById('btnNovaFoto')

// FUNÇÃO PARA NOVA FOTO

async function buscarFoto() {
    // Fazer uma requisição para a API
    const resposta = await fetch(url);
    // converter a resposta da API para JSON
    const dados = await resposta.json();
    // Mostrar no console o que a API retornou
    console.log(dados);
    // Alterarmos o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

// ------------------------------------
// BOTÃO
// ------------------------------------
// Quando o usuário clicar no botão
// Vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// Quando a pagina abrir,
// Já buscamos uma foto automaticamente
buscarFoto();
