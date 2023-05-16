import {Motorcycle} from './ts14-heritage';

namespace AbsractNamespace {
    abstract class Vehicle {
        constructor(private whellCount: number) { }

        abstract updateWhellCount(newWhellCount: number): void;

        showNumberofWhells() {
            console.log(`moved ${this.whellCount} wheels`)
        }
    }
}

const motor2 = new Motorcycle(false);