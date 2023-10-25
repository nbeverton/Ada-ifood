// Parametrização de funções

// Exemplo de função sem parâmetro:
function somar() {
    console.log("Função SEM parâmetro:");
    console.log(`1 + 2 = ${1 + 2}`);
}

somar();

// Exemplo de função com parâmetros - Aumenda a usabilidade.
function somar2(num1, num2) {
    console.log("Função COM parâmetro:");
    console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}\n`);;
}
somar2(10, 10);


// Composição de função
const compose = (fn1, fn2) => function() {
    return fn2(fn1(...arguments));
}

const parseAndRound = compose(parseFloat, Math.round);

console.log("Composição de função: " + parseAndRound(8.9));


let str = "teste";
let strUp = str.toUpperCase();
console.log(strUp);

// ##############################

const compose2 = (fn1, fn2) => function() {
    return fn2(fn1(...arguments));
}
const toUpperCase = text => text.toUpperCase();
const trim = text => text.trim();

const trimAndUpper = compose2(trim, toUpperCase);

console.log(trimAndUpper("  testezinho \n"));

let x = 10.4;
let y = x.parseFloat();
console.log(y);