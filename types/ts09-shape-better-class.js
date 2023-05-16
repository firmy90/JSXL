var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    // private msg: string;
    Person.prototype.speak = function () {
        console.log(this.msg);
    };
    return Person;
}());
var anna = new Person('Hello');
var alex = new Person('Hi');
var aneta = new Person("Witaj!");
anna.speak();
alex.speak();
aneta.speak();
