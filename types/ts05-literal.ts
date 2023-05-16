let literal: "Jan" | "Tomek" | "Aneta" | "Kowalski" = "Jan";

literal = "Kowalski"
// literal= "Krzysztof" //Type "Krzysztof" is not assignable to type '"Jan"|"Tomek"|"Aneta"| "Kowalski"'

console.log(literal)

literal = "Jan"
console.log(literal)

type Points = 1 | 2 | 3 | 4 | 5;
let score: Points = 1;
console.log(score)

type ComplexPerson = {
    name: string,
    age: number,
    birth: Date,
    married: boolean,
    address: string
}

let person: ComplexPerson = {
    name: "Bill",
    age: 25,
    birth: new Date(),
    married: false,
    address: "ul.Kolorowa 12"
}

console.log(person)