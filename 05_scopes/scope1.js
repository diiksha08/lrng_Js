let a =300
if(true){
    let a=10
    const b=20
    console.log("INNER: ", a);
    var c=30 // not good practice to use var, so avoid using var
}

//console.log(a); // not defined ->out of scope
//console.log(b); //b is not defined -> out of scope
//console.log(c);
console.log(a)

