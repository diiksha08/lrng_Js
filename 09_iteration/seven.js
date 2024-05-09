const myNum=[1,2,3,4,5,6,7,8,9,10]
//map() is another kind of method that can be used in-place of filter and for each
//map() is also a callback function, it automatically returns the value
/* const newNums=myNum.map((num)=>num+10)
console.log(newNums) */

//using forEach()
// myNum.forEach((item)=>{ 
//     console.log(item+10);
// })

//CHAINING-> using more than two methods together
const newNums= myNum
                    .map((num)=> num*10)
                    .map((num)=> num+1)
                    .filter((num)=> num>=40)
console.log(newNums);