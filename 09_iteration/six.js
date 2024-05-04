// const coding=['js', 'rb', 'py', 'cpp', 'java']

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10]
//filter operation
// const newNums=myNum.filter((num) => num>4 )  //filter returns the values while for each does not.
// console.log(newNums);

//or
// const newNums=myNum.filter( (num) => {
//     return num>4
// } )

// console.log(newNums);

//want to use forEach instead of filter() method
// const newNums=[]

// myNum.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    {title: 'book1', genre: 'fiction', publish: '1981'},
    {title: 'book2', genre: 'history', publish: '2009'},
    {title: 'book3', genre: 'non-fiction', publish: '2011'},
    {title: 'book4', genre: 'history', publish: '1987'}   
]
let userBooks= books.filter((bk)=>bk.genre==='history')
 userBooks= books.filter((bk)=>bk.publish>=2000)
//or userBooks= books.filter((bk)=>{ return bk.publish>=2000})
userBooks= books.filter((bk)=>bk.publish>=2000 && bk.genre==='history')
console.log(userBooks);

