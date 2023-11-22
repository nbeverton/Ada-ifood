import { Livro } from "./Livro";

export class Autor{
    nome: string;
    dataDeNascimento: Date;
    nacionalidade: string;
    livros: Livro[] = [];

    constructor(nome: string, dataDeNascimento: Date, nacionalidade: string, livros: Livro[] = []){
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.nacionalidade = nacionalidade;
        this.livros = livros;
    }

    
}