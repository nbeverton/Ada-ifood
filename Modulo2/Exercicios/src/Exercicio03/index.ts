class Calculadora {
    private num1: number;
    private num2: number;

    constructor() {
        this.num1 = 0;
        this.num2 = 0;
    }
    
    somar(num1: number, num2: number): number{
        this.num1 = num1;
        this.num2 = num2;
        return num1 + num2;
    }

    subtrair(num1: number, num2: number): number{
        this.num1 = num1;
        this.num2 = num2;
        return num1 - num2;
    }

    multiplicar(num1: number, num2: number): number{
        this.num1 = num1;
        this.num2 = num2;
        return num1 * num2;
    }

    dividir(num1: number, num2: number): number{
        if(num2 !== 0){
            this.num1 = num1;
            this.num2 = num2;
            return num1 / num2;
        } else "Não é possível dividir um numero por zero!";
    }

    static valorAbsoluto(numero: number): number{
        return Math.abs(numero);
    }
}

const Resultados = () => {
    const calculos = new Calculadora();
    console.log(calculos.somar(3, 5)); 
    console.log(calculos.subtrair(3, 5));
    console.log(calculos.multiplicar(3, 5));
    console.log(calculos.dividir(3, 5));
    console.log(Calculadora.valorAbsoluto(-5));
}

export { Resultados };