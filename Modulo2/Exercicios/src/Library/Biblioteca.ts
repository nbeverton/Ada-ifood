import { Autor } from "./Autor";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
// import { dataBase } from "./DB";

export class Biblioteca{
    autoresCadastrados: Autor[] = [];
    livrosCadastrados: Livro[] = [];
    usuariosCadastrados: Usuario[] = [];
    private emprestimos: { livro: Livro; usuario: Usuario }[] = [];


    constructor(autoresCadastrados: Autor[] = []){
        this.autoresCadastrados = autoresCadastrados;
    }

    // Métodos para adicionar e excluir Autor, Livro e Usuario:
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

    // Imprimir informações sobre os Autores e Usuários cadastrados e os livros cadastrados, disponíveis e emprestados.
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

      imprimirLivrosEmprestados(){
        console.log("Livros emprestados:");
        
        const livrosEmprestados = this.livrosCadastrados.filter(livro => livro.emprestado);

        if(livrosEmprestados.length > 0){
            livrosEmprestados.forEach(livro => {
                console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}`);
            });
        } else {
            console.log("Nenhum livro para ser exibido.");
            
        }
      }
    
    imprimirInfoUsuarios(){
        console.log("Usuários Cadastrados:");
        console.log(this.usuariosCadastrados);
    }

    // Emprestar um livro por nome:
    emprestarLivroPorNome(nomeLlivro: string): boolean {
        const livroEncontrado = this.livrosCadastrados.find(livro => livro.titulo === nomeLlivro);

        if(livroEncontrado){
            return livroEncontrado.emprestarLivro();
        } else {
            console.log(`O livro ${nomeLlivro} não foi encontrado no acervo.`);
            return false;
        }
    }

    // Devolver um livro usando o nome:
    devolverLivroPorNome(nomeLlivro: string): boolean {
        const livroEncontrado = this.livrosCadastrados.find(livro => livro.titulo === nomeLlivro);

        if(livroEncontrado){
            return livroEncontrado.devolverLivro();
        } else {
            console.log(`O livro ${nomeLlivro} não foi encontrado no acervo.`);
            return false;
        }
    }

    // Imprimir livros emprestados relacionando o Usuário que o pegou:
    emprestarLivroParaUsuario(livro: Livro, usuario: Usuario): boolean {
        if (livro.emprestado || !this.livrosCadastrados.includes(livro) || !this.usuariosCadastrados.includes(usuario)) {
          return false;
        }
    
        livro.emprestarLivro();
        this.emprestimos.push({ livro, usuario });
        return true;
      }
    
      imprimirLivrosEmprestadosComUsuarios(): void {
        console.log("Livros emprestados:");
    
        this.emprestimos.forEach(emprestimo => {
          console.log(`Título: ${emprestimo.livro.titulo}, Autor: ${emprestimo.livro.autor}, Usuário: ${emprestimo.usuario.getNome()}`);
        });
      }
}
