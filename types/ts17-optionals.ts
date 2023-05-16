namespace Optional{
    export interface Wheels {
        count?: number;
    }
    export interface Vehicle{
        wheels: Wheels;
    }


class Automobile implements Optional.Vehicle{
    constructor (public wheels: Optional.Wheels){}
}

const bmw: Automobile = new Automobile({count:4});
console.log(bmw)
console.log(bmw.wheels)
console.log(bmw.wheels.count)

}