const doSomething = () => {
    return new Promise((res, rej) => {
        let  success = true; //true false
        if (success) {
            res("I am resolve from Dosomething")
        } else {
            rej("I am reject from DoSomething")
        }
    })
}
const doNothing = (value) => {
    return new Promise ((res, rej) => {
        let success = true; // true false
        if(success) {
            console.log("I am from DoSomething:", value)
            res("I am resolve from DoNothing")
        } else {
            rej("I am reject from DoNothing")
        }
    })
}
const doEverything = () => {
    return new Promise((res, rej) => {
        let success = true; //true false
        if(success) {
            res("I am resolve from DoEverything")
        } else {
            rej("I am reject from DoEverything")
        }
    })
}
//Promise Nesting
//doSomething()
//.then((resData) => {
    //doNothing(resData)
    //.then((res) => {
       // console.log(res)
       // doEverything()
       // .then()
       // .catch()
    //})
    //.catch((rej) => {

    //})
//})
//.catch((rejData) => {

//})

doSomething()
.then((resData) => {
//handler
return doNothing(resData)
})
.then((resNothing) => {
    console.log(resNothing)
    return doEverything()
})
.then((resEverything) => {
    console.log(resEverything)
})
.catch((exception) => {
    console.log(exception)
})




const allPromises = [doSomething(), doNothing(1), doEverything()]
//either all or none
Promise.all(allPromises)
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject) =>{
    console.log(reject)
})
//Promise.allSelected()
//either some


// always fullfill
const func1 = () => {
    //return new Promise ((res, rej) => {
        //res("Always resolve")
    //})
    return Promise.resolve()
}
const func2 = () => {
    return Promise.reject()
}
func1().then(() => {})
func2().catch(() => {})
