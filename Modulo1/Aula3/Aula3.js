// Aula 3
// Controle de fluxo


// Estruturas condicionais
console.log("Estruturas Condicionais: \n")


// Estrutura if/else
console.log("Estruturas com if/else: ")

const a = 10

if(a > 10){
    console.log("O valor é maior que 10")
} else if(a == 10) {
    console.log("O valor é igual a 10")
} else {
    console.log("O valor é igual a 10")
}


// Estrutura Switch
console.log("\n Estruturas com switch: ")

const opcao = 'Papaia'

switch(opcao){
    case 'Banana':
        console.log("A fruta é banana")
        break
    case "Laranja":
        console.log("A fruta é laranja")
        break
    case "Melancia":
        console.log("A fruta é melancia")
        break
    case "Papaia":
        console.log("A fruta é papaia")
        break
    default:
        console.log("A fruta não está na lista")
        break;    
}


// Estruturas de repetição
// Estrutura while (Não precisa de break e continue)

console.log("\n Estrutura de repetição while")

var i = 0

while (i < 5){
    console.log(i)
    i++
    if(i == 2){
        break
    }
}
