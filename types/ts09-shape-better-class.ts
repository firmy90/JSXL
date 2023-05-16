class Person {
    constructor(private  readonly msg: string) {} //readonly - tylko do odczytu po jednokrotnym ustawieniu w konstruktorze
    // private msg: string;
    speak() {
        console.log(this.msg);
    }
}

const anna = new Person('Hello');
const alex = new Person('Hi');
const aneta = new Person("Witaj!");

anna.speak();
alex.speak();
aneta.speak();