//String
let nome = "João";

console.log(typeof nome);
console.log(nome);

// Number

let age = 25;
console.log(typeof age);

//BigInt - Adicionar o n no final.
let gigante = 300000000n;
console.log(typeof gigante);

//Undefined
let qualquer;
console.log(typeof qualquer);

//Null - retorna object. É o tipo do valor null.
let isso = null;
console.log(typeof isso);

// Object - SPREAD OPERATOR (pesquisar). let client2 = { ...client };
let Client = {name: "João", 
                idade: 19,
            Adress: {
                Rua: "Rua de cima"
            }}; // Objeto literal.

console.log(typeof Client);
console.log(Client.name);
Client.sexo = "M";
console.log(Client.sexo);

console.log(Client.Adress.Rua);