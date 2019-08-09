function person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }


}

let thePerson = new person("Andrew", "Schueler");
console.log( thePerson.getFullName() );