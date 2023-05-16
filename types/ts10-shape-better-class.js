var Person = /** @class */ (function () {
    function Person(msg, age) {
        this.msg = msg;
        this.age = age;
    } //readonly - tylko do odczytu po jednokrotnym ustawieniu w konstruktorze
    // private msg: string;
    Person.prototype.speak = function () {
        console.log(this.msg, this.age);
    };
    return Person;
}());
var anna = new Person('Hello', 11);
var alex = new Person('Hi', 22);
var aneta = new Person("Witaj!", 33);
anna.speak();
alex.speak();
aneta.speak();
