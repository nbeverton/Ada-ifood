/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/



let sequence = [0, 1];
let n = 6;

for (let i = 2; i < n; i++) {
    let nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
}

console.log(`O ${n}º termo é:  ${sequence[n - 1]}`);

