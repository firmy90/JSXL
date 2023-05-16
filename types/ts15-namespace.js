import { Motorcycle } from './ts14-heritage';
var AbsractNamespace;
(function (AbsractNamespace) {
    class Vehicle {
        constructor(whellCount) {
            this.whellCount = whellCount;
        }
        showNumberofWhells() {
            console.log(`moved ${this.whellCount} wheels`);
        }
    }
})(AbsractNamespace || (AbsractNamespace = {}));
const motor2 = new Motorcycle(false);
