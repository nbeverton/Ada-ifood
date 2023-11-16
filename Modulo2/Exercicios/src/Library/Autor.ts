class Autor{
    nome: string;
    dataDeNascimento: number;
    nacionalidade: string;

    livros: string[] = ["HP1", "HP2", "HP3"]

    adicionarLivroAoAutor(titulo: string){
        this.livros.push(titulo);
    }

    removerLivroAoAutor(titulo: string){
        this.livros.pop();
    }
}

const statusAutor = () => {
    const autor1 = new Autor;
    autor1.adicionarLivroAoAutor("HP4")
    console.log(autor1.livros);
    
}

export { statusAutor };