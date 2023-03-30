class Person {
    constructor(name){
        this.name = name

    }
}
function sayMyName() {
    return `My name is ${this.name}`
}

module.exports = {
    Person,
}