//metodos

// Defining an object with properties and a method
// This object represents an animal with a name, age, and a method to bark
const animal = {
    name: "Bob",
    age: 5,
    bark: function() {
        console.log("Woof! Woof!");
    }
};


// Accessing the properties of the object

console.log(`"Dogs name is ${animal.name}`);
console.log(`"Dogs age is ${animal.age}"`);
// Calling the method       
console.log(`"Calling the method: ${animal.bark()}"`)
animal.bark();

// Defining a person object with methods to get and set the name
// This object represents a person with a name and methods to get and set the name

const person = {
    name: "John",

    getName: function() {
        return this.name;
    },
    setName: function(newName) {
        this.name = newName;
    }
};

console.log(`"Person's name is ${person.getName()}"`);
console.log(`"Person's name is ${person.name}"`);
person.setName("Jane");
console.log(`"Person's name is now ${person.getName()}"`);


//Prototypes

