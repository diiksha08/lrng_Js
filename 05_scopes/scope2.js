function one(){
    const username="deeksha"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); // website not defined; out of scope
    
    two()
}
// one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++++++++INTERESTING+++++++++++++++++++++

console.log(addOne(5)) // can be accessed before and after initialization
function addOne(num){  //function
    return num+1 
}

/* 
const addTwo= function(num){ // also a function; it's called expression
    return num +2
}
console.log(addTwo(7)) 
*/

//console.log(addTwo(7)) //cannot access addTwo before initialization
const addTwo= function(num){ // also a function; it's called expression
    return num +2
}

