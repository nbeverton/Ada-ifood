// Aula 2
// Coerção de tipos (explícita ou implícita)

// Coerção explícita:
console.log("Coerção explícita:")
let num = "15";
const newNum = Number(num) // pode usar apenas o +num2
console.log(typeof newNum);

let num2 = "15e"
const newNum2 = Number(num2)
console.log(typeof newNum2);
console.log(newNum2) //NaN

const newNum3 = parseInt(num2) 
console.log(newNum3) //retira o number da string

// Number to String - Converte tudo para String (true/false/undefined)
let doc1 = 12345678;
const formatedDoc = doc1.toString;
console.log(typeof formatedDoc);
let doc2 = "" + doc1;
console.log(typeof doc2)


// Coerção implícita - para String/Number/Boolean
console.log("\nCoerção implícita")
