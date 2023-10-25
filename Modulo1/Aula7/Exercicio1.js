// Escreva uma função recursiva que inverta uma String.
function inverteString(str) {
    if (str.length <= 1) return str;
    
    return inverteString(str.slice(1)) + str[0];
}    

console.log(inverteString("abcde"));