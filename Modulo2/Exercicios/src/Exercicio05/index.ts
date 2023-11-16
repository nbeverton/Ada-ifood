import { Carro } from "./Carro";
import { Motor } from "./Motor";

const Resultados = () => {
    const meuCarro = new Carro();
    console.log(meuCarro.ligarCarro());
    console.log(meuCarro.desligarCarro())
}

export { Resultados };