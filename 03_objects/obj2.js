//singleton object
//const tinderUser= new Object();

//non- singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="simsim"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        UserFullname:{
            firstname:"deeksha",
            lastname: "lodhi"
        }
    }
}
// console.log(regularUser.fullname.UserFullname) //regularUser.fullname?.UserFullname: if fullname do not

// combining objects
const objA={1: 'a', 2: 'b'}
const objB={3: 'a', 4: 'b'}

// const obj3={objA, objB}
// const obj3= Object.assign(objA, objB) // or Object.assign( {}, objA, objB) 

const obj3={...objA, ...objB}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

