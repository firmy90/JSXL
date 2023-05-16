// class Person {
//     name: string
// }

// const anna: { name: string } = {
//     name: 'Anna'
// }

// const person: Person = anna;

// console.log(person)

class Person {
    constructor() { }
    msg: string;
    speak() {
        console.log(this.msg);
    }
}

const anna = new Person();
const alex = new Person();
const aneta = new Person();

anna.msg = 'Hello';
alex.msg = 'Hi';
aneta.msg = "Witaj!"

anna.speak();
alex.speak();
aneta.speak();