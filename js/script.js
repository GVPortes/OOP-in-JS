//metodos

const animal = {
    name: "Bob",
    age: 5,
    latir: function() {
        console.log("Woof! Woof!");
    }
};

console.log(`"Dogs name is ${animal.name}`);
console.log(`"Dogs age is ${animal.age}"`);
// Calling the method       
console.log(`"Calling the method: ${animal.latir()}"`)
animal.latir();

