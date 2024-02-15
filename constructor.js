class User {
    name;
    #email;
    constructor(_name, _email){
        //always executes
        this.name = _name
        this.#email = _email
    }
    //setEmail(_email){
       // this.#email = _email
    //}
    getEmail(){
        return this.#email;
    }
}

const userObj =new User("Ravindra Joshi", "joshiravindra58@gmail.com")
console.log(userObj.name)
console.log(userObj.getEmail)
