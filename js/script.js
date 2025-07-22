//metodos

// Defining an object with properties and a method
// This object represents an animal with a name, age, and a method to bark
const animal = {
    name: "Bob",
    age: 5,
    latir: function() {
        console.log("Woof! Woof!");
    }
};


// Accessing the properties of the object

console.log(`"Dogs name is ${animal.name}`);
console.log(`"Dogs age is ${animal.age}"`);
// Calling the method       
console.log(`"Calling the method: ${animal.latir()}"`)
animal.latir();

