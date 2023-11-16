interface FormaGeometrica{
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Circulo implements FormaGeometrica{
    private raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularArea(): number {
        return this.raio * this.raio * Math.PI;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

class Quadrado implements FormaGeometrica{
    private lado: number;

    constructor(lado: number){
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado
    }

    calcularPerimetro(): number {
        return this.lado * 4;
    }
}

const Resultados = () => {
    const circulo1 = new Circulo(3);
    console.log(Math.round(circulo1.calcularArea()));
    console.log(Math.round(circulo1.calcularPerimetro()));

    const quadrado1 = new Quadrado(3);
    console.log(Math.round(quadrado1.calcularArea()));
    console.log(Math.round(quadrado1.calcularPerimetro()));
}

export { Resultados };