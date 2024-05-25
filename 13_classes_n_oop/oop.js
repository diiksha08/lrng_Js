const user={
    username: "hitesh",
    loginCount: "8",
    isLoggedIn: true,

    getUserDetils: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`); //or console.log(`username: ${user.username}`)
        console.log(this);
    }
}
// console.log(user.username);
// // console.log(user.getUserDetils());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    
    this.greeting = function(){
        console.log(`welcome${this.username}`);
    }
    return this;
}

// const UserOne= new User("hitesh", 12, true)
// const UserTwo=  new User("chaiAURcode", 12, false)  //values override ho jayengi userOne ki userTwo se
const UserOne= new User("hitesh", 12, true)
const UserTwo=  new User("chaiAURcode", 12, false)
console.log(UserOne);
console.log(UserTwo);

//new use kerne pr - empty object create hota jisko we call instance

