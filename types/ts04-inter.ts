let obj: { name: string, age: number } = {
    name: "Bill",
    age: 25
}

// let obj: { name: string}& {age: number } = {
//     name: "Bill",
//     age: 25
// }
console.log(obj)



let union: null | { name: string } = null;
let union2: null | { name: string } = null;
let union3: null | { name: string } = null;

union = { name: "Bill" }


console.log(union)
console.log(union2)
union3 = null
console.log(union3)









