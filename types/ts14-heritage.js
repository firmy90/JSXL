class Vehicle {
    constructor(whellCount) {
        this.whellCount = whellCount;
    }
    showNumberOfWheels() {
        console.log(`moved ${this.whellCount} wheels`);
    }
}
export class Motorcycle extends Vehicle {
    constructor(czyMaKfuer) {
        super(2);
        this.czyMaKfuer = czyMaKfuer;
    }
}
class Automobile extends Vehicle {
    showID() {
        console.log(`IDs ${this.marka} car`);
    }
}
const motor = new Motorcycle(true);
motor.showNumberOfWheels();
const auto = new Automobile(4);
auto.marka = "Renault";
auto.showID();
auto.showNumberOfWheels();
