function canDriveByCar(user) {
    console.log("Kierowca: " + user.name);
    if (user.age >= 16) {
        console.log("Możesz prowadzić");
    }
    else {
        console.log("Nie możesz prowadzić");
    }
}
var me = {
    name: "Anna",
    age: 20
};
canDriveByCar(me);
