import { Animal } from "./Animal";

class Cachorro extends Animal {
    emitirSom(): string {
     return "Au Au";
    }

    mover(): string {
        return "Correndo (e abanando o rabo)!"
    }
}

const Doguinho = () => {
    const cachorro1 = new Cachorro;
    const latido: string = cachorro1.emitirSom();
    const correr: string = cachorro1.mover();
    console.log(latido);
    console.log(correr);
}

export { Doguinho };