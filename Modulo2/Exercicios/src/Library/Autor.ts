import { Livro } from "./Livro";

export class Autor{
    private nome: string;
    dataDeNascimento: Date;
    nacionalidade: string;
    livros: Livro[] = [];

    constructor(nome: string, dataDeNascimento: Date, nacionalidade: string, livros: Livro[] = []){
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.nacionalidade = nacionalidade;
        this.livros = livros;
    }

    // adicionarLivroAoAutor(titulo: string){
    //     this.livros.push(titulo);
    // }

    // removerLivroAoAutor(titulo: string){
    //     const index = this.livros.indexOf(titulo);
    //     if(index !== -1){
    //         this.livros.splice(index, 1);
    //     }
    // }
}