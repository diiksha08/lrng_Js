// const userEmail= "h@hiesh.ai"

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }

// const userEmail= ""  // empty, else part will be executed

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }

const userEmail= [] // if part is executed

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

//FALSY VALUES:  false, 0, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES: "0", 'false', " ", [], {}, function(){}

// if(userEmail.length===0){
//     console.log("array is empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// NULLISH COALESCING OPERATOR (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1= null ?? 10
// val1 = undefined ?? 15
val1= null ?? 10 ?? 20
console.log(val1);

//TERNIARY OPERATOR
// condition ? true : false
const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80"); 
