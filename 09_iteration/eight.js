// reduce() method

// const arr=[1,2,3,4,5]
// const initialVal=0;
// const sumWithInitial = arr.reduce(
//     (accumulator, currentValue)=> accumulator + currentValue,
//     initialVal
// );
// console.log(sumWithInitial)

const myNums=[1,2,3]

// const myTotal=myNums.reduce( function (acc,currVal){ 
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
//  }, 0)

const myTotal= myNums.reduce((acc,currVal)=>(acc+currVal),0)
console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price:9999
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>(acc + item.price), 0)
console.log(priceToPay);