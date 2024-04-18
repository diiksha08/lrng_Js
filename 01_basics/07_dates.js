//let myDate= new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2024, 3, 17)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

//let myCreatedDate=new Date(2024, 3, 17,5,4)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate=new Date("2024-04-17")
let myCreatedDate=new Date("04-17-2024")
console.log(myCreatedDate.toLocaleString());

//timestamp-----------------------------------------------------------------------------
let myTimeStamp=Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

//convert ms into seconds
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default'){
    weekday: 'long'
    
}