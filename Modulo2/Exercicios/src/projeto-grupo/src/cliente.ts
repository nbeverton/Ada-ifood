const fs = require("fs");

export class Cliente {
    private _cpf: string
    private _nome: string
    private _tipoCarteira: string
    private _veiculoAlugado: string | null = null

    constructor(cpf: string, nome: string, tipoCarteira: string) {
        this._cpf = cpf
        this._nome = nome
        this._tipoCarteira = tipoCarteira

    }

    // get dados() {
    //     return Cliente
    // }

    // set tipoCarteira(tipoCarteira: string) {
    //     this._tipoCarteira = tipoCarteira
    // }

    static buscarCliente(): Array<TCliente> {
        return JSON.parse(fs.readFileSync("./src/dados/clientes.json", "utf-8"))
    }
    
    static buscarClientePorCpf(cpf: string): TCliente | undefined {
        const clientes = Cliente.buscarCliente();
        return clientes.find(cliente => cliente.cpf === cpf)
    }

    adicionarCliente(): void {
        const clientes = Cliente.buscarCliente();

        if (Cliente.buscarClientePorCpf(this._cpf)) {
            console.error("CPF já cadastrado! ")
            return;
        }

        clientes.push({
            cpf: this._cpf,
            nome: this._nome,
            tipoCarteira: this._tipoCarteira,
            veiculoAlugado: this._veiculoAlugado
        })
        fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes))
    }


}