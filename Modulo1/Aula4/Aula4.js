// Estrutura for
console.log("Estrutura for: ")

for (let i = 0; i <= 5; i++){
    console.log(i)
}

let valores = "";

for( let j = 0; j < 5; j++){
    valores += j;
}
console.log(valores)

// Array

const numeros = [1, 2, 3, 4, 5]
numeros.push(6);
numeros.pop();
console.log(numeros)

const frutas = ["laranja", "limão", "acerola", "melão"]
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}