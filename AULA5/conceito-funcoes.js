// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.

// Analogia
// Saõ colocados valores
// Esses valores são processados
// Devolve um resultado (return)


// ESTRUTURA BÁSICA DE UMA FUNÇÃO

// function nomeDaFuncao(parametro1, parametro2) {
// código será executado
// return resultado;
// }


// function = palavrachave
// nomeDaFuncao = nome da função
// parâmetros = valores que a função recebe
// return = valor que a função devolve


// 5 exemplos

// 1 -somar dois números

function somar(a, b ){
    return a + b;
}
console.log(somar(2,15))


// 2 converter real para dolar

function realparadolar(vreal, cotacao){
    return vreal / cotacao;
}
console.log(realparadolar(10,5.20).toFixed(2))


// 3 dolar para real

function dparav(vdolar, cotacao){
    return vdolar * cotacao;
}
console.log(dparav(5.20,10))


// 4 - Aumento de salário (25% de aumento)


function aumento(s, a){
    return (s * a) + s ;
}
console.log(aumento(2000,0.25,2000))



// 5 - Verifique se é impar ou par
function ehParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(ehParOuImpar(7)) 
console.log(ehParOuImpar(10)) 
