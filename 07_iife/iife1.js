//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)  :  global scope k pollution se problem hoti hai kayibar 
//toh uss global scope k variables hain jo bhi declarations hai uske pollution ko hatane k liye we used iife 

//syntax: (func definition)(execution);

(function chai(){
    //named IIFE
    console.log(`DB connnected`);
})();

//arrow function can also be written
((name)=>{
    //unnamed IIFE
    console.log(`db connected 2 ${name}`);
})('hitesh');

