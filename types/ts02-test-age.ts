interface User {
    name: String,
    age: number
}

function canDriveByCar(user:User) {
    console.log(`Kierowca: ${user.name}`)
    if (user.age >= 16) {
        console.log("Możesz prowadzić")
    }
    else {
        console.log("Nie możesz prowadzić")
    }
}


const me:User = {
    name: "Anna",
    age: 20,
}

canDriveByCar(me)