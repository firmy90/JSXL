class Vehicle {
    constructor(private whellCount: number) {

    }
    showNumberOfWheels() {
        console.log(`moved ${this.whellCount} wheels`);
    }
}

export class Motorcycle extends Vehicle {
    constructor(private czyMaKfuer: boolean) {
        super(2)
    }
}
class Automobile extends Vehicle {
    public marka: string;

    showID() {
        console.log(`IDs ${this.marka} car`)
    }
}


const motor = new Motorcycle(true)
motor.showNumberOfWheels();

const auto = new Automobile(4);
auto.marka = "Renault"
auto.showID()
auto.showNumberOfWheels();



