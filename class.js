//4 pillar
//abstraction
//encapsulation
//polymorphism   poly=multi   morph=form 
//inheritance


class User{
    name = "";
    #email = "" // within
// function /method
setEmail =(email) => {
    this.#email =email
};

getEmail(){
    return this.#email;
}
}
const userObj = new User()
userObj.name = "Ravindra Joshi"
userObj.setEmail("joshiravindra58@gmail.com")
console.log(userObj.getEmail)
console.log(userObj)
// class Tag{
  //  name;  //smartphone
//}
//class Product{
    //tag;   //link to Tag
//}
//class Category {
    //tag;  // link to Tag
//}


