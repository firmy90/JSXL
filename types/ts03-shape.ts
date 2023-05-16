class Person {
    name: string
}

const anna: { name: string } = {
    name: 'Anna'
}

const person: Person = anna;

console.log(person)

