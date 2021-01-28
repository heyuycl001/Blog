class User {
    fullName: string
    lastName: string
    firstName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}
interface Person {
    lastName: string
    firstName: string
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new User('zz', 'xx')

// console.log(greeter(user))