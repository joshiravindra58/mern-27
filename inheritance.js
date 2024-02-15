
//parent class 
class User{
    name;
    email;
    address;
    getName(){
        return this.name;
    }
}
//derive or child class

 class Admin extends User{
    name;
    email;
    address;
    role;
    organization;
    position;
 }
 const adminObj = new Admin()
 adminObj.name = "Ravindra Joshi";
 adminObj.role = "Admin";
 console.log(adminObj)
 
 //A,B,C ===> D ===> Multiple inheritance
 //A ===> B ===> C ===> D===> Multilevel inheritance
 //A,B ===> C ===> D ====> Hybrid inheritance

class Subject {
    constructor(){ 
        console.log("I am always called from Subject Class")
    }
}
class Test extends Subject {
    constructor() {
        super(); // parent constructor
        console.log("i am always called from Test Class")
    }
   
}

const testObj = new Test(); // I am always called from Subject Class 