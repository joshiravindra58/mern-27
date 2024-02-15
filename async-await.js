const anyfun =() => {
    return new Promise((res, rej) => {
        const success = true;
        if(success) {
            res("Hello")
        } else {
            rej("Sorry")
        }
    })
}
const anyfun2 = async () => { //Promise.resolve()
    //return "Hello"
    let success= true;
    if(success) {
        return "Hello"  // resolve
    } else {
        throw "Sorry"  // reject
    }
}



//anyFun2()
//     .then()
//     .catch()

const main =async () => {
    try {
        let resolve = await anyfun2()  //resolve
    }catch(exception){
        console.log(exception)
    }
}
main()