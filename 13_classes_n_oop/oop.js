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
    
    return this;
}

const userOne= User("hitesh", 12, true)
const UserTwo=  User("chaiAURcode", 12, false)  //values override ho jayengi userOne ki userTwo se
console.log(userOne);