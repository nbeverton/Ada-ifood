import { Livro } from "./Livro";

export class Usuario{
    nome: string;
    email: string;
    livroEmprestado: Livro[] = [];

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

    pegarLivroEmprestado(livro: Livro){
        if (!livro.emprestado) {
            livro.emprestarLivro();
            this.livroEmprestado.push(livro);
            return true;
          } else {
            console.log("Livro não disponível para empréstimo.");
            return false;
          }
    }

    devolverLivroEmprestado(livro: Livro) {
        const index = this.livroEmprestado.indexOf(livro);
        if (index !== -1) {
          livro.devolverLivro();
          this.livroEmprestado.splice(index, 1);
          return true;
        } else {
          console.log("Livro não está na lista de livros emprestados.");
          return false;
        }
    }
}
