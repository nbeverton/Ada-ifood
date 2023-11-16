class ContaBancaria{
    saldo: number;

    constructor(saldoInicial: number){
        this.saldo = saldoInicial;
    }

    sacar(valor: number): number{
        if(valor > this.saldo){
            throw new Error("O valor do saque não pode ser maior que o saldo");
        } else{
            return this.saldo -= valor;
        }
    }

    depositar(valor: number): number{
        this.saldo += valor;
        return this.saldo;
    }
}


const Resultados = () => {
    
    const conta1 = new ContaBancaria(120);
    
    try {
        conta1.sacar(130);
    } catch (error) {
        console.log(error.message);
    }
    
    console.log(conta1.saldo);

}

export { Resultados };