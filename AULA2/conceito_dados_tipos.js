//tipos de dados
//no javascipt, tudo


//principais tipos de dados:
//string (textos)
//number (numeros)
//boolean (verdadeiro ou falso)
//object (objetos, que agrupam informações)
//array (listas de valores)
//null (valor vazio)
//undefined (quando algo não foi definido)



//STRING (Textos)
//Uma string é um texto,sempre escrito entre aspas(""ou'')
let nome = "Jarvis";
let mensagem = 'Olá, mundo!';

console.log(nome);
console.log(mensagem);

let saudacao = "Olá," + nome + "!";
console.log(saudacao);//Exibi "Olá, Jarvis"

//typeof
//o typeof serve para descobrir o tipo de um valor ou variável 

//let nomeDois = "Bryan";
//let nometres = "Bryan";
//console.log(typeof nomeDois);


let soma = 10 + 5;
console.log(soma);

//boolean (verdadeiro ou falso)
let maiorDeidade = true;
let menorDeidade = false;

console.log(maiorDeidade);
console.log(menorDeidade);

let idade = 16;
let podeDirigir = idade >= 18;
console.log(podeDirigir);