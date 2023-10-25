let salario = 2001;
let percentual;
let aumento;
let novoSalario;

if (salario <= 1500) {
    percentual = 0.2;
    aumento = salario  * percentual;
    novoSalario = salario + aumento;
} else if(salario > 1500 && salario <= 1700){
    percentual = 0.15;
    aumento = salario  * percentual;
    novoSalario = salario + aumento;
} else if(salario > 1700 && salario <= 2000){
    percentual = 0.10;
    aumento = salario  * percentual;
    novoSalario = salario + aumento;
} else{
    percentual = 0.05;
    aumento = salario  * percentual;
    novoSalario = salario + aumento;
}

console.log("O salário antigo é de: R$ " + salario.toFixed(2))
console.log("O percentual do aumento é de: " + percentual.toFixed(2))
console.log("O valos do aumento é de: " +aumento.toFixed(2))
console.log("O seu novo salário é: R$ " + novoSalario.toFixed(2))

console.log(novoSalario.toLocaleString("pt-br"))