/*function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400))//only log out 200, to solve this prob we use rest operator (...) 
rest operator also called spread operator, based on their uses we call spread and rest */

function calculateCartPrice(...nums1){
    return nums1
}
//console.log(calculateCartPrice(200, 300, 400, 5000));

function cartPrice(val1, val2, ...num1){
    return num1
}
console.log(cartPrice(200, 300, 400, 5000, 6000, 700)); // val1=200, val2=300, rest will be in array

//OBJECT KO FUNCTION ME KESE PASS AND USE KIYA JAATA HAI
const user={
    username:"hitesh",
    price:199
}

function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObj(user)

//other way:
handleObj({
    username: "simm",
    price: 399
})

//CAN ALSO PASS ARRAYS IN FUNCTIONS
const myNewArr=[200, 400, 600]

function returnSecondValue(getArr){
    return getArr[1]
}
//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 300, 500]));