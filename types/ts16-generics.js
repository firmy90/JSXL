function getLength(arg) {
    if ('length' in arg) {
        return arg['length'];
    }
    return 123;
}
console.log(getLength('Hello world'));
console.log(getLength(123));
