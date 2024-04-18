// const myArr=[0,1,2,3,4,5, 'mango']
// console.log(myArr[1]);

// const heroes=["shaktiman", "naagraj"]

//other way to declare array
const arr1= new Array(1,2,3,4);

//array methods
// arr1.push(6);
// arr1.pop();
// arr1.unshift(9); // ele gets inseerted at the beginning
// arr1.shift();  //ele gets removed
// console.log(arr1.includes(9));
// console.log(arr1.includes(4));

// const newA= arr1.join();
// console.log(newA);
// console.log(arr1);
// console.log(typeof newA);
// console.log(typeof arr1);

//SLICE, SPLICE= manipulates the original array
console.log("A", arr1);

const myn1= arr1.slice(1,3);
console.log(myn1);
console.log("B", arr1);

const myn2=arr1.splice(1,3)
console.log("C", arr1);
console.log(myn2);