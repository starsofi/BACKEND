let titulo = document.getElementById("titulo");
let subitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

//Selecionando por classe 
let caixas = document.getElementsByClassName("box");

//mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

function alterar (){
    titulo.innerText = "Jorge Ben Jor"
    subitulo.innerText = " O melhor cantor"
    paragrafo.innerText = "Jorge Ben é um artista do MPB" 

    //ALTERANDO ELEMENTO DA CLASSE 
    caixas[0].innerText = "Primeiro paragráfo alterado"
    caixas[1].innerText = "Segundo paragráfo alterado"

    imagem.src = "https://imusic.b-cdn.net/images/item/original/114/0196587792114.jpg?sza-2023-sos-lp&class=scaled&v=1682691240"
}