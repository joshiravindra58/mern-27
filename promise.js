//pending stage
//fulfilled/reject stage
//settlement stage
const promiseObj = new Promise((resolve, reject) =>{
    //logic
    //success, failed
    resolve("")
    //reject();
})
//promise Create pending
const login = () => {
    //codes execute time consume
    return new Promise((resolve, reject) =>{
        //logic
        //login logic correct
        resolve({msg: "I am loggedin"})
        //resolve()
        //error
        reject()
    })
}
//from build ===> {React }
//Be API ===> Payload ===>{username, password}
let username = "admin"
let password = "password"
login(username, password)
.then((data) =>{
    //data
})
.catch((execption) => {
    //
})

const result = login()
console.log(result); //Promise {"I am loggedin"}



// Question   develop a js function to calculate the discount given in the product
//the function should provide you the discount value as a resolve
//or the function should return you reject if discount is less than 0 or greater than 100
//consider discount is a percentage

const getDiscount = (price, disPer) => {
    return new Promise((res, rej) => {
        if(disPer < 0) {
            rej("Discount cannot be less than 0")
        } else if(disPer > 100) {
            rej("Discount cannot be greater than 100")
        } else if (price <= 0) {
            rej("Price cannot be negative value or 0")
        } else{
            res((price - price * disPer/100))
        }
        })
    }


getDiscount(100, 10) //resolve ===> 90
.then((data) => {
    console.log(data)
})
getDiscount(100, -10) //reject ===> Discount cannot be less than 0 
.catch((rej) => {
    console.log(rej)
})
getDiscount(100, 101) //reject ===> Discount cannot be greater than 100
.catch((rej) => {
    console.log(rej)
})
getDiscount(-100, 10) //reject ===> Price cannot be negative value or 0
.catch((rej) => {
    console.log(rej)
})
getDiscount(0, 10) //reject ===> Price cannot be negative value or 0
.catch((rej) => {
    console.log(rej)
})
