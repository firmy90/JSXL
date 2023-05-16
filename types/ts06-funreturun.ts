function runMore(distance: number): number {    // zwracany number
    return distance + 10;
}

function eat(calories: number): void {          // zwracany void
    console.log(`I ate ${calories} calories`)
}

function eat2(calories: number) {
    console.log(`I ate ${calories} calories`)
}


let e = eat(100);
let e2 = eat2(200);
let ran = runMore(3);

console.log(e)
console.log(e2)
console.log(ran)
//I ate 100 calories
// I ate 200 calories
// undefined
// undefined
// 13
