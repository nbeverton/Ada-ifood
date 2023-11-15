class Pessoa {
    static totalCadastrado: number = 0;
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
        ++Pessoa.totalCadastrado;
    }
}

const Questionario = () => {
    const p1 = new Pessoa("João");
    console.log(Pessoa.totalCadastrado);
}

export { Questionario }

