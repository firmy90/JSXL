interface hasLength {
    length: number;
}

function getLength<T extends hasLength>(arg: T): number {
    if ('length' in arg) {
        return arg['length']
    }
    return 123


}

console.log(getLength<string>('Hello world'))
// console.log(getLength<number>(123))