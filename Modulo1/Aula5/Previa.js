// Funções e Assinaturas

// Uma função básica para imprimir uma String que pode ser por "return" ou inserindo o console.log.
function imprimiNome() {
    // console.log("Hello, World");
    return "Hello, World!";
}

// imprimiNome();
console.log(imprimiNome());


// ################################################################################
console.log("\n ################################################################################ \n");


function somar(x, y) {
    return x + y;
}

const result = somar(1, 2);
console.log(result);


// ################################################################################
console.log("\n ################################################################################ \n");


function multiplicar(a, b) {
    return( isNaN(a) || isNaN(b) ? NaN : a * b )
}

console.log(multiplicar(2, 2));


// ################################################################################
console.log("\n ################################################################################ \n");


const dividir = function (c, d) { return c / d }
console.log(dividir(10, 5));


// ################################################################################
console.log("\n ################################################################################ \n");
console.log("Arrow funcion:");

const sum = (x, y) => x + y;
console.log(sum(2, 2));

const teste = () => {
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('testando...');
    return "OK";
}

console.log(teste());