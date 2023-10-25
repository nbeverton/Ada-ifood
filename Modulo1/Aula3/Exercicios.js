// Exercício 1
console.log("teste")

const numero = 1

if (numero % 2 == 0 && numero !== 0){
    console.log("O número é par")
} else if(numero == 0){
    console.log("O número é zero")
} else {
    console.log("O número é impar")
}



// Exercício 2
let idade = 18

if(idade >= 18){
    console.log("A pessoa é maior de idade")
} else{
    console.log("A pessoa ainda é menor de idade")
}

// modo ternário
const idade2 = idade  >= 18 ? "maior de idade" : "menor de idade"
console.log(idade2)



//Exercício 3
// Melhorar código = usar o método console.log() apenas uma vez.
const dia = 6

switch(dia){
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda")
        break;
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("sexta")
        break;
    case 7:
        console.log("sábado")
        break;
    default:
        console.log("Número inválido")
        break;
}



// Exercício 4
var a = 1
var b = 2
var c = 3

if(a > b && a > c){
    console.log("a é o maior número")
} else if(b > a && b > c){
    console.log("b é o maior número")
} else if (c > a && c > b){
    console.log("c é o maior número")
} else {
    console.log("Os número são iguais")
}