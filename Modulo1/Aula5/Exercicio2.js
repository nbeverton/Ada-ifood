/*
    Crie uma função "gerarSenhaAleatoria" que recebe um comprimento (tamanho) como parâmetro 
    e gera uma senha aleatória contendo letras maiúsculas, letras minúsculas e números.
*/


function gerarSenhaAleatoria(comprimento){

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let senha = "";

    while (senha.length < comprimento) {
        let posicao = Math.floor(Math.random() * caracteres.length )
        senha += caracteres[posicao];
        
    }
    return senha;
}

console.log(gerarSenhaAleatoria(5));