'use strict';

// ! Object oriented programing Section - 1 creating Constructor and using this keyword 

const Person = function(firstName, birthYear){
    this.firstName = firstName,
    this.Year = birthYear
    // this.calcAge = function(){
    //     console.log(2024 - this.Year);
    //^ }-> : Bad practice to work with thats why protoType is used in the below code
}

const Karthik = new Person('Karthik',2003);
console.log(Karthik);
console.log(Karthik instanceof Person);

Person.prototype.calcAge = function(){
    return 2024 - this.Year;
}
// ^-> We can assign values to the Person which contains all methods such as all names in it 
// ^ But not get the original values in the object itself as sen in the cosole itself


console.log(Karthik.calcAge());

console.log(Karthik.__proto__);
console.log(Karthik.hasOwnProperty('firstName'));
console.log(Karthik.hasOwnProperty('calcAge')); // -> Because it is the propertie of the prototype



const Car = function(make , speed){
    this.make = make,
    this.speed = speed
}
const BMW = new Car('BMW',120);

Car.prototype.Accelerate = function(){
    this.speed+=10;
    console.log(`Accelation increased ${this.speed}`);
}
Car.prototype.Break = function(){
    this.speed-=5;
    console.log(`Accelation increased ${this.speed}`);
}
BMW.Accelerate();
BMW.Break();
BMW.Accelerate();
BMW.Break();

// Accelation increased 130
// Accelation increased 125
// Accelation increased 135
// Accelation increased 130


const arr = [1,2,3,4];

Array.prototype.col = function(){
    console.log(this);
}
// [ 1, 2, 3, 4 ]

arr.col();