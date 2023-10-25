/*
    Crie o script de uma calculadora, usando o conceito abordado em aula de funções de alta ordem.
*/

function operacao (tipo, x, y){
    if (tipo === "+") {
        return x + y;
    } else if (tipo === "-") {
        return x - y;
    } else if (tipo === "/"){
        return x / y;
    } else if (tipo === "*"){
        return x * y;
    }
}

const calcu = operacao("*", 1, 2);
console.log(calcu);