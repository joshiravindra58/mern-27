// class, object
// class => data, method
// oop acheive
// Prototype or Class Based

// prototype based
//class
function User() {
    this.name = "";
    this.email = "";
}
// method
User.prototype.getUserName = function(){
    //limit of arrow function
    // this // scope is only within function getUserName
// this has global scope of the class
return this.name
}

// object
const user = new User()
user.name = "Ravindra Joshi"  // value assign 
user.email = "joshiravindra58@gmail.com" // value assign

console.log(user.getUserName())


