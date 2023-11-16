class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;

    constructor(titulo: string){
        this.titulo = titulo;
    }

    emprestar(): void{
        console.log("Livro emprestado com sucesso!");
    }
    devolver(): void{
        console.log("Livro devolvido. Tudo ok!");
    }
}


const livroStatus = () => {
    const livro1 = new Livro("HP");
    livro1.emprestar();
    console.log(livro1.titulo);
}

export { livroStatus };