// Estruturas Condicionais(Tomando Decisões)
// As estruturas condicionais permitem executar diferentes blocos de código dependendo de uma condição
// if/Else -Condicionais
// If - Verifica se uma condição é verdadeira e executa o código dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de código

let idade = 18
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade");
}

// If, Else if, else (multiplas condições)


let idade2 = 19;
if(idade < 12){
    console.log("Você é uma criança ");
} else if (idade < 18) {
    console.log ("Você é um adolescente");
} else {
    console.log("Você é um adulto");
}