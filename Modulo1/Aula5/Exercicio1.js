/*
  Faça um programa com uma função chamada "somaImposto".
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa
  em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas e retorna o preço final do produto ao consumidor.
*/

function somaImposto(taxaImposto, custo){
    const valorImposto = taxaImposto * custo;
    return valorImposto + custo;
}

const somaImposto2 = (taxaImposto, custo) => {
    return (taxaImposto + 1) * custo;
}

console.log(somaImposto(0.7, 100));
console.log(somaImposto2(0.7, 100));