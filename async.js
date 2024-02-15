const fun1 =() => {
    console.log("Iam in function 1")
}
const fun2 = () => {
    console.log("Iam in function 2")
}
const fun3 = () => {
    console.log("Iam in function 3")
}

//closure function 
//callback function
//async-await
//.then().catch()

const login = () => {
    username = "Test"
}
let username;
let password;
login()
console.log(username)

const login1 = () => {
    const display1 = (param1) => {
        return "something"
    }
    return display1("test")

}
let res = login1()
console.log(res);

const login2 = () => {
    const display1 = (param1) => {
        return "something"
    }
 return display1 //scope
 
}
let func1 = login2()("test")
console.log(func1);