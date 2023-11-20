import { Biblioteca } from "./Biblioteca";
import { Autor } from "./Autor";
import { dataBase } from "./DB";

describe("Biblioteca", () => {
  let biblioteca: Biblioteca;

  beforeEach(() => {
    biblioteca = new Biblioteca();
    dataBase(biblioteca);
  });

  it("deve emprestar um livro pelo nome com sucesso", () => {
    const nomeLivroParaEmprestar = "livro1";
    const emprestouComSucesso = biblioteca.emprestarLivroPorNome(nomeLivroParaEmprestar);
    expect(emprestouComSucesso).toBe(true);
  });

  it("deve falhar ao tentar emprestar um livro indisponível", () => {
    const nomeLivroIndisponivel = "livro2";
    const emprestouComSucesso = biblioteca.emprestarLivroPorNome(nomeLivroIndisponivel);
    expect(emprestouComSucesso).toBe(false);
  });

  it("deve adicionar um autor com livros associados", () => {
    const novoAutor = new Autor("Novo Autor", new Date(), "Nacionalidade", []);
    biblioteca.adicionarAutor(novoAutor);
    const autorEncontrado = biblioteca.autoresCadastrados.find(autor => autor.nome === "Novo Autor");
    expect(autorEncontrado).toBeDefined();
  });

  it("não deve adicionar um autor sem livros associados", () => {
    const autorSemLivros = new Autor("Autor Sem Livros", new Date(), "Nacionalidade");
    biblioteca.adicionarAutor(autorSemLivros);
    const autorEncontrado = biblioteca.autoresCadastrados.find(autor => autor.nome === "Autor Sem Livros");
    expect(autorEncontrado).toBeUndefined();
  });

});
