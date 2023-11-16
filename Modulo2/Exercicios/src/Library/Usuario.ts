class Usuario{
    nome: string;
    email: string;
    livroEmprestado: string;

    pegarLivroEmprestado(nome: string): void{
        console.log(nome);
    }

    devolverLivroEmprestado(nome: string): void{
        console.log(nome);
    }
}

const statusUsuario = () => {
    const usuario1 = new Usuario;
    const livroEmprestado = usuario1.pegarLivroEmprestado("HP1");
}

export { statusUsuario };