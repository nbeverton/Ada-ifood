class Carro {
    ano: number;
    cor: string;
    modelo: string;

    constructor(ano: number, cor: string, modelo: string) {
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
    }
}


const Exercicio1 = () => {
    const c1 = new Carro(1990, "branco", "fusca");
    const c2 = new Carro(2023, "vermelho", "dolphin");

    console.log(c1);
    console.log(c2);
}

export { Exercicio1 }
