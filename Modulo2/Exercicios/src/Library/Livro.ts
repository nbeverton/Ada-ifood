import { Autor } from "./Autor";

export class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    emprestado: boolean = false;

    constructor(titulo: string, autor: string, anoPublicacao: number, genero: string, emprestado: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.emprestado = emprestado;
    }

    emprestarLivro() {
        if (!this.emprestado) {
            this.emprestado = true;
            return true;
          } else {
            console.log("Livro já emprestado.");
            return false;
          }
    }

    devolverLivro() {
        if (this.emprestado) {
            this.emprestado = false;
            return true;
          } else {
            console.log("Livro não está emprestado.");
            return false;
          }
        }
    }
