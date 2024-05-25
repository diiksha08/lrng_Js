const promiseOne= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved')
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=true;
       if (!error) {
        resolve({username: "hitesh", password: "1234"})
       }
       else{
        reject("ERROR: Something went wrong")
       }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{console.log('the promise is either resolved or rejected')})

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if (!error) {
         resolve({username: "Js", password: "1234"})
        }
        else{
         reject("ERROR: Js went wrong")
        }  
}, 1000)
})

//zaruri nahi promise hamesha .then() .catch se karo, 
//jab database ka connection krte tb discuss hota

async function consumePromiseFive(){
    try {
    const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async 
