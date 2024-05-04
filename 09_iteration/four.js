//for in loop
//loop on object

const myObj={
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObj) {
    // console.log(key); //prints keys: js, cpp, rb, swift
    // console.log(myObj[key]); //gives values of the key pair, 
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

//for in loop on arrays : the iterator prints keys
const languages=['js', 'cpp', 'py', 'rb', 'java']
for (const key in languages) {
    // console.log(key); // 0 1 2 3 4 
    // console.log(languages[key]); // js cpp py rb java
}

//for of on array : the iterator prints values
const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num); // 1 2 3 4 5
}

