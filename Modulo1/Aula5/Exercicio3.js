/*
    Crie uma função "validarSenha" que recebe uma senha como parâmetro e retorna true 
    se a senha atender aos seguintes critérios, sem utilizar regex:

    Pelo menos 8 caracteres de comprimento.
    Deve conter pelo menos uma letra maiúscula.
    Deve conter pelo menos uma letra minúscula.
    Deve conter pelo menos um número.
*/

function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }

    let Maiuscula = false;
    let Minuscula = false;
    let Numero = false;

    for (let i = 0; i < senha.length; i++) {
        const charactere = senha.charAt(i);
        if (charactere >= 'A' && charactere <= 'Z') {
            Maiuscula = true;
        } else if (charactere >= 'a' && charactere <= 'z') {
            Minuscula = true;
        } else if (parseInt(charactere) !== NaN) {
            Numero = true;
        }
    }

    return Maiuscula && Minuscula && Numero;
}

const senha1 = "TesTando123";
const senha2 = "tesTando";
const senha3 = "123"
const senha4 = "testando"
console.log(validarSenha(senha1));
console.log(validarSenha(senha2));
console.log(validarSenha(senha3));
console.log(validarSenha(senha4));