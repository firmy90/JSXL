interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const anna: Employee = {
    name: "Anna",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let uniqueId = `${anna.name} - ${anna.id}`;
        if (!anna.isManager) {
            return `emp = ${uniqueId}`
        }
        return uniqueId;
    }
}

console.log(anna.getUniqueId())

const peter: Employee = {
    name: "Peter",
    id: 2,
    isManager: true,
    getUniqueId: (): string => {
        let uniqueId = `${peter.name} - ${peter.id}`;
        if (peter.isManager) {
            return `manager = ${uniqueId}`
        }
        return uniqueId;
    }
}

console.log(peter.getUniqueId())