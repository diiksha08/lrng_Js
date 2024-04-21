//signleton
// Object.create

//object literals
const mySym=Symbol("key1")

const JsUser={
    name: "deeksha",
    "fullName":"deeksha lodhi",
    
    //use symbol as key in objects
    [mySym]:"mykey1",  //referring to const mySym=Symbol("key1")

    age: 21,
    email: "deeksh@gmail.com",
    islogged: false,
    lastLoginsDays: ['monday', 'saturday']
}

console.log(JsUser.email); //not a good practice
console.log(JsUser["email"]); //good practice

// "fullName":"deeksha lodhi", <- cannot be accessed by using . but by [] it can be.
console.log(JsUser["fullName"]);

console.log(JsUser[mySym]);

//changing values
JsUser.email="deee@gmail.com"

//freezing objects so that no one can change it
//Object.freeze(JsUser)
JsUser.email="dl@gmail.com"
console.log(JsUser);


//greeting
JsUser.greetings= function(){
    console.log('heylo JS user');
}
console.log(JsUser.greetings());

JsUser.greetings1= function(){
    console.log(`heylo JS user ${this.name}`);
}
console.log(JsUser.greetings1());