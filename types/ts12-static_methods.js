var ClassA = /** @class */ (function () {
    function ClassA(lastName) {
        this.lastName = lastName;
    }
    ClassA.prototype.run = function () {
        ClassA.lastTypeName = this.lastName;
    };
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    return ClassA;
}());
var a = new ClassA("B");
console.log(ClassA.getFullName());
console.log(a.run());
