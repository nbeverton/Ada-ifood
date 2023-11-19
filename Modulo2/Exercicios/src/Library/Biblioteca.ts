import { Autor } from "./Autor";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
// import { dataBase } from "./DB";

export class Biblioteca{
    autoresCadastrados: Autor[] = [];
    livrosCadastrados: Livro[] = [];
    usuariosCadastrados: Usuario[] = [];

    constructor(autoresCadastrados: Autor[] = []){
        this.autoresCadastrados = autoresCadastrados;
    }

    adicionarAutor(autor: Autor){
        this.autoresCadastrados.push(autor);
    }

    adicionarLivro(livro: Livro){
        this.livrosCadastrados.push(livro);
    }

    adicionarUsuario(usuario: Usuario){
        this.usuariosCadastrados.push(usuario);
    }

    removerAutor(autor: Autor){
        const index = this.autoresCadastrados.indexOf(autor);
        if(index !== -1){
            this.autoresCadastrados.splice(index, 1);
        }
    }

    removerLivro(livro: Livro){
        const index = this.livrosCadastrados.indexOf(livro);
        if(index !== -1){
            this.livrosCadastrados.splice(index, 1);
        }
    }

    removerUsuario(usuario: Usuario){
        const index = this.usuariosCadastrados.indexOf(usuario);
        if(index !== -1){
            this.usuariosCadastrados.splice(index, 1);
        }
    }

    imprimirInfoAutores(){
        console.log("Autores Cadastrados:");
        console.log(this.autoresCadastrados);
    }
    
    imprimirInfoLivros(){
        console.log("Livros Cadastrados:");
        console.log(this.livrosCadastrados);
    }

    imprimirLivrosDisponiveis() {
        console.log("Livros disponíveis para empréstimo:");
        
        const livrosDisponiveis = this.livrosCadastrados.filter(livro => !livro.emprestado);
        
        if (livrosDisponiveis.length > 0) {
          livrosDisponiveis.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
          });
        } else {
          console.log("Nenhum livro disponível para empréstimo.");
        }
      }
    
    imprimirInfoUsuarios(){
        console.log("Usuários Cadastrados:");
        console.log(this.usuariosCadastrados);
    }
}
