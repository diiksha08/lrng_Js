//for

for (let index = 0; index <=10; index++) {
    const element = index;
    //console.log(element);

    if(element==5){
        // console.log("5 is the best no. ?");
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop value ${j} and outer loop value ${i}`);
    //    console.log(`${i} * ${j} = ${i*j}`); 
    }

let myArr=["flash", "superman", "spiderman"]
console.log(myArr.length);

for(let i=0; i<myArr.length; i++){
    const ele= myArr[i]
    console.log(ele);
}

}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("5 detected");
//         break;  // it breaks the control flow, loop se bahar, sab stop!
//     }
//     console.log(`value of index is${index}`);

    
// }
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("5 detected");
        continue; //performing a continue means no operation and control will go back to the loop.
    }
    console.log(`value of index is${index}`);

    
}