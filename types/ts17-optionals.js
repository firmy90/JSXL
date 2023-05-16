var Optional;
(function (Optional) {
    class Automobile {
        constructor(wheels) {
            this.wheels = wheels;
        }
    }
    const bmw = new Automobile({ count: 4 });
    console.log(bmw);
    console.log(bmw.wheels);
    console.log(bmw.wheels.count);
})(Optional || (Optional = {}));
