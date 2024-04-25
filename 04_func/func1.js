function sayMyname(){
    // console.log("D");
    // console.log("E");
    // console.log("E");
    // console.log("K");
    // console.log("S");
    // console.log("H");
    // console.log("A");
}

//call a function
sayMyname() //sayMyname <- reference, sayMyname() <- execution


//function to add two numbers
function addTwoNum(num1, num2){ //function ki definition banate hain, uske ander jo bhi input lete hain usko we call parameters
    let result= num1+num2;
   // console.log(result);
    return result;
    // console.log(num1+num2)
}

// addTwoNum(3,"4") //function ko call karate time, jo value usme pass karte hain use we call arguments
// addTwoNum(3, "a") //3a
//addTwoNum(3,null)  //3 

const result = addTwoNum(3,4)


// function loginUser(username){

    // return `${username} just logged in`
// }

// console.log(loginUser("deeksha"))
// console.log(loginUser("")) // just logged in 


function loginUser(username // or can pass a default value username= "simsim"){
    if(username===undefined){  //in js using empty string->false, undefined->false considered in if else conditions  
       //if(!username) or if(username===undefined)
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUser()) // undefined 

