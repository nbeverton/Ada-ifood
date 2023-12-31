import { Livro } from "./Livro";

export class Usuario{
    private nome: string;
    private email: string;
    livroEmprestado: Livro[] = [];

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

    getNome(): string {
        return this.nome;
      }

    setNome(novoNome: string): void {
       this.nome = novoNome;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(novoEmail: string): void {
        this.email = novoEmail;
    }

    pegarLivroEmprestado(livro: Livro): boolean{
        if (!livro.emprestado) {
            livro.emprestarLivro();
            this.livroEmprestado.push(livro);
            return true;
          } else {
            console.log("Livro não disponível para empréstimo.");
            return false;
          }
    }

    devolverLivroEmprestado(livro: Livro): boolean {
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
