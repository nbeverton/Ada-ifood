import { Animal } from "./Animal";

class Passaro extends Animal {
    emitirSom(): string {
        return "Piu Piu";
    }
    mover(): string {
        return "Batendo asas... Voando!";
    }
}

const Passarinho = () => {
    const passaro1 = new Passaro();
    const piado: string = passaro1.emitirSom();
    const voar: string = passaro1.mover();
    console.log(piado);
    console.log(voar);
}


export { Passarinho };