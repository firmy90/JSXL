var literal = "Jan";
literal = "Kowalski";
// literal= "Krzysztof" //Type "Krzysztof" is not assignable to type '"Jan"|"Tomek"|"Aneta"| "Kowalski"'
console.log(literal);
literal = "Jan";
console.log(literal);
var score = 1;
console.log(score);
var person = {
    name: "Bill",
    age: 25,
    birth: new Date(),
    married: false,
    address: "ul.Kolorowa 12"
};
console.log(person);
