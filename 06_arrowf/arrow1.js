const user={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
    }
}

//user.welcomeMessage()

// user.username="simm"
// user.welcomeMessage()
// console.log(this)

//function chai(){
    // let username="hitesh"
    // console.log(this.username); //undefined
// }
//chai()


/*const chai=function(){
    let username="hitesh"
    console.log(this.username);
}
chai() //undefined  */


// DECLARE FUNCTIONS USING ARROW FUNCTION

const chai=  () => {   // arrow function ( => )
    let username="hitesh"
    //console.log(this.username); //undefined    || console.log(this) output-> {}
}

chai()

//what is arrow function:  () => {}
/*
const addTwo = (num1,num2) => {
    return num1+num2  //explicit return
}
console.log(addTwo(3,4)); //7 
*/

//IMPLICIT RETURN 
// const addTwo = (num1,num2) => num1+num2
//console.log(addTwo(3,4)); //7

//OR
// const addTwo= (num1, num2)=>(num1+num2)  //this technique mostly used in react
const addTwo= (num1, num2)=>({username:"hitesh"}) //returning object isliye used ({})
console.log(addTwo(3,4));

//arrow funct () => {}  also used in loops
const myArr=[2,5,3,7,8]

myArr.forEach(()=>{} //or function(){}) //classic func: function(){} ; arrow func: () => {}
