let lista = [1, 2, 3, 4];
let soma = 0;


// Exercício 1:
console.log("\n A soma da lista: ")

for (i = 0; i < lista.length; i++){
    soma = soma + lista[i];
}
console.log(soma + "\n")


// Exercício 2
console.log("\n O maior valor da lista: ")
let maior = 0;
for(i = 0; i < lista.length; i++){
    if(lista[i] > maior){
    maior = lista[i]
    }
}
console.log(maior)


// Exercício 3
console.log("\n A média da lista: ")
let media = 0
for(i = 0; i < lista.length; i++){
    media = lista[i] + media
}
console.log(media / lista.length)


// Exercício 4
// Pode ser usada com o include também.
// Revisar as funções concat - pode ter mais de um tipo. O JS preserva os tipos.
// toString (converte tudo par aestring separado por vírgula)
// join (", ") - acrescenta a vírgula
// 1 == "1" true | 1 === "1" false (tipo)
// sort - ordena os itens.
// splice - modifica o original?
// slice - cria uma cópia
// unshift - Empilhar na primeira posição
// shift - Desempilha 
// push - Enfileira no final do array
// pop - Desenfileirar
console.log("\n O elemento da lista: ")

function verificarValor(lista, valor){
    if(lista.indexOf(valor) !== -1){
        return true
    } else {
        return false
    }
}

const valorProcurado = 8
if(verificarValor(lista, valorProcurado)){
    console.log("Está presente")
} else{
    console.log("Não está presente")
}