import { Biblioteca } from "./Library/Biblioteca";
import { Autor } from "./Library/Autor";
import { Livro } from "./Library/Livro";
import { Usuario } from "./Library/Usuario";
import { dataBase } from "./Library/DB";

const biblioteca = new Biblioteca();
dataBase(biblioteca);


//Adicionar um novo usuário:
const usuario3 = new Usuario("Maria", "maria@email.com");
biblioteca.adicionarUsuario(usuario3);

//Remover usuario:
biblioteca.removerUsuario(usuario3);


biblioteca.imprimirLivrosDisponiveis();