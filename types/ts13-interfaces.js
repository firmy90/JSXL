var anna = {
    name: "Anna",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = anna.name + " - " + anna.id;
        if (!anna.isManager) {
            return "emp = " + uniqueId;
        }
        return uniqueId;
    }
};
console.log(anna.getUniqueId());
var peter = {
    name: "Peter",
    id: 2,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = peter.name + " - " + peter.id;
        if (peter.isManager) {
            return "emanager = " + uniqueId;
        }
        return uniqueId;
    }
};
console.log(peter.getUniqueId());
