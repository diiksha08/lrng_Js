//for each loop - HIGH ORDER FUNCTION;

const coding=['js', 'rb', 'py', 'cpp', 'java']
// coding.forEach( function (val)  // a callback func doesn't have any name: function(){}
// {
//     console.log(val);
// } )

//or 

// coding.forEach((item)=>{
//     console.log(item);
// })

//or
// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


//array containing different objs
const myCoding=[
{
    languageName: 'javascript',
    languageFileName: 'js'
},
{
    languageName: 'java',
    languageFileName: 'java'
},
{
    languageName: 'python',
    languageFileName: 'py'
}
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )