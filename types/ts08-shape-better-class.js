// class Person {
//     name: string
// }
// const anna: { name: string } = {
//     name: 'Anna'
// }
// const person: Person = anna;
// console.log(person)
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var anna = new Person();
var alex = new Person();
var aneta = new Person();
anna.msg = 'Hello';
alex.msg = 'Hi';
aneta.msg = "Witaj!";
anna.speak();
alex.speak();
aneta.speak();
