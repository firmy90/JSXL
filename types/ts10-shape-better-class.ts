class Person {
    constructor(private  readonly msg: string,
        private age:number) {} //readonly - tylko do odczytu po jednokrotnym ustawieniu w konstruktorze
    // private msg: string;
    speak() {
        console.log(this.msg, this.age);
    }
}

const anna = new Person('Hello',11);
const alex = new Person('Hi',22);
const aneta = new Person("Witaj!",33);

anna.speak();
alex.speak();
aneta.speak();