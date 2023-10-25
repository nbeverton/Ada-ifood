// Função recursiva
function contagemRegressiva(n) {
    // condição de parada
    if (n === 0) {
        return;
    } else{
        console.log(n);
        contagemRegressiva(n - 1);
    }
}

contagemRegressiva(10);