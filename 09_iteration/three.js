//for of  (array specific loop)

// ["", "", ""] strings in array
// [{}, {}, {}] objects in array

const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings= "hello world!"
for(const greet of greetings){

       // console.log(`each char is ${greet}`);
}

//MAPS : it holds key-value pair, remembers original order of the keys
const map= new Map()
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('Fr', 'France')
map.set('IN', 'India')
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':', value);
}

//for loop on object?

const myObj={
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for (const [key,value] of myObj) {
//      console.log(key, ':', value); //myObj is not iterable //there's another way to iterate objects!
// }


 