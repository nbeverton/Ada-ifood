// Gerar um número aleatório de 1 a 100.
let numRandom = Math.floor(Math.random() * 100) + 1;
console.log(numRandom); 

// Entrada de dados para testar o número.
const prompt = require("prompt-sync")();
let guess;

// Lógica para avaliar se o número é maior ou menor.
while(guess !== numRandom){

    guess = prompt("Digite um número: ");

    if (guess > numRandom) {
        console.log("O número sorteado é menor. Tente de novo");
        
    } else if(guess < numRandom) {
        console.log("O número sorteado é maior. Tente de novo");
        
    } else{
        console.log("Parabéns! Você acertou");
        break
    }
}



