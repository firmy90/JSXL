class ClassA {
    static typeName: string;
    static lastTypeName: string;
    constructor(private lastName: string) { }

    run() {
        ClassA.lastTypeName = this.lastName
    }

    static getFullName() {
        return `ClassA ${ClassA.typeName}`
    }
}

const a = new ClassA("B");
console.log(ClassA.getFullName())
console.log(a.run())