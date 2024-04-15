//PRIMITIVE: call by value

//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const userId= Symbol('123')
const anotherId= Symbol('123')

console.log(userId==anotherId);

const bigNum=3440643789783921364n;
console.log(typeof bigNum);

// REFERENCE (Non- primitive)
// Array, Objects, Functions

const heros=["Shaktimaan", "Naagraj", "Doga"]
let myObj={
    name: 'diksha',
    age: 21,
}

const myFunc = function(){
    console.log('helloooooo there!')
}


console.log(typeof null); //object
console.log(typeof undefined); //undefined