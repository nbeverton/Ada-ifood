import { Autor } from "./Autor";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Biblioteca } from "./Biblioteca";

const dataBase = (biblioteca: Biblioteca) => {

    const livro1 = new Livro("livro1", "fulano", 1990, "ficcao total", true);
    const livro2 = new Livro("livro2", "cicrano", 1991, "ficcao total", true);
    const livroHP1 = new Livro("A pedra filosofal", "J.K.Rowling", 1997, "Ficção", false)
    const livroHP2 = new Livro("A câmara secreta", "J.K.Rowling", 1998, "Ficção", false)
    const livroHP3 = new Livro("O prisioneiro de Azkaban", "J.K.Rowling", 1999, "Ficção", false)
    const livroHP4 = new Livro("O cálice de fogo", "J.K.Rowling", 2000, "Ficção", false)
    const livroHP5 = new Livro("A ordem da Fênix", "J.K.Rowling", 2003, "Ficção", false)
    const livroHP6 = new Livro("O príncipe mestiço", "J.K.Rowling", 2007, "Ficção", false)
    const livroHP7 = new Livro("As relíquias da morte", "J.K.Rowling", 20013, "Ficção", false)
    const livroGOT1 = new Livro("GoT1", "George R.R. Martin", 1996, "Ficção", false);
    const livroGOT2 = new Livro("GoT2", "George R.R. Martin", 1998, "Ficção", false);
    const livroGOT3 = new Livro("GoT3", "George R.R. Martin", 2000, "Ficção", false);
    const livroGOT4 = new Livro("GoT4", "George R.R. Martin", 2005, "Ficção", false);
    const livroGMG1 = new Livro("O Guia do mochileiro das galáxias", "Douglas Adams", 1979, "Ficção", false);
    const livroGMG2 = new Livro("O restaurante no fim do universo", "Douglas Adams", 1980, "Ficção", false);
    const livroGMG3 = new Livro("A vida, o universo e tudo o mais", "Douglas Adams", 1982, "Ficção", false);
    const livroGMG4 = new Livro("Até mais e obrigado pelos peixes", "Douglas Adams", 1984, "Ficção", false);
    const livroGMG5 = new Livro("Praticamente inofensiva", "Douglas Adams", 1986, "Ficção", false);

    const autor1 = new Autor("J.K. Rowling", new Date(1965, 6, 31), "Britânica", [livroHP1, livroHP2, livroHP3, livroHP4, livroHP5, livroHP6, livroHP7]);
    const autor2 = new Autor("George R.R. Martin", new Date(1948, 8, 20), "Americano", [livroGOT1, livroGOT2, livroGOT3, livroGOT4]);
    const autor3 = new Autor("Douglas Adams", new Date(1952, 3, 11), "Britânico", [livroGMG1, livroGMG2, livroGMG3, livroGMG4, livroGMG5]);

    const usuario1 = new Usuario("Joãozinho", "joaozinho@email.com");
    const usuario2 = new Usuario("Marquinho", "marquinho@email.com");
    
    biblioteca.adicionarAutor(autor1);
    biblioteca.adicionarAutor(autor2);
    biblioteca.adicionarAutor(autor3);
  
    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);
    biblioteca.adicionarLivro(livroHP1);
    biblioteca.adicionarLivro(livroHP2);
    biblioteca.adicionarLivro(livroHP3);
    biblioteca.adicionarLivro(livroHP4);
    biblioteca.adicionarLivro(livroHP5);
    biblioteca.adicionarLivro(livroHP6);
    biblioteca.adicionarLivro(livroHP7);
    biblioteca.adicionarLivro(livroGOT1);
    biblioteca.adicionarLivro(livroGOT2);
    biblioteca.adicionarLivro(livroGOT3);
    biblioteca.adicionarLivro(livroGOT4);
    biblioteca.adicionarLivro(livroGMG1);
    biblioteca.adicionarLivro(livroGMG2);
    biblioteca.adicionarLivro(livroGMG3);
    biblioteca.adicionarLivro(livroGMG4);
    biblioteca.adicionarLivro(livroGMG5);
    
  
    biblioteca.adicionarUsuario(usuario1);
    biblioteca.adicionarUsuario(usuario2);
}

export { dataBase };