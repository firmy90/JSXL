var runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    return false;
};
function oldEnough(age) {
    if (age > 60) {
        throw Error('too old');
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
console.log(runner(9));
console.log(runner(19));
console.log(oldEnough(62));
console.log(oldEnough(12));
