const calculate = (a,b, operation)=> {
    return operation(a,b);
};
//Method 1
const result =calculate (3,4, function (num1, num2){
    return num1 + num2;
});
console.log(result);

//Method 2
const subtraction = (a , b) => a - b;
const subResult = calculate (8 , 3, subtraction);
console.log(subResult);


function greet  (name , callback){
    console.log ("hello," + name + "!");
    callback();
}
function callme () {
    console.log ("I'm called back !");
}
greet ("Brand", callme);



const login =(cb)=> {
    //fun
    //return
    //logic
    const response = "I am in login"
    cb(response)
}

const display = (arg)=>{
    console.log(arg)
}
login(display)

//time related
//setTimeout()
//setInterval()
//clearInterval()

let timer = "";
const displayClock = () => {
    const today = new Date()
    let hour = today.getHours()
        let minutes = today.getMinutes()
        let secs = today.getSeconds()
        timer = hour+":"+minutes+":"+secs
document.getElementById("clock").innerHTML = timer
}
setInterval(displayClock, 1000)

