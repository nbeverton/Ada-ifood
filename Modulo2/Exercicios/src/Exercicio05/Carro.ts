import { Motor } from "./Motor";

class Carro{
    private motor: Motor;

    constructor(){
        this.motor = new Motor();
    }

    ligarCarro(): string {
        return this.motor.ligar();
    }

    desligarCarro(): string{
        return this.motor.desligar();
    }
}

export { Carro };