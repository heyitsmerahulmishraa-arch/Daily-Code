// let a = 10;

// function fun(){
//     let b = 43;

//     console.log(a + b)
// }

// fun()
// console.time()
// function fun1(){
//     let x = 32;
//     function inFun(){
//         let a = 24;
//         console.log(a + x)
//         console.trace()
//     }
//     inFun()
// }
// fun1()



// console.table([{name:"mark",role:"developer"},{name:"joie",role:"developer"}])

// console.timeEnd()

// (function fun(){
//     let a = 10
//     console.log(a)
// })()
// console.log("start")
// function fun1(name,callback){
//     console.log(name)
//     callback()
// }

// function fun2(){
//     console.log("Callback called")
// }
// console.log("end")

// fun1("mark",fun2)

// function calc(a,b,callback){
//     return callback(a,b)
// }

// function add(x,y){
//     return x + y
// }

// function mul(x,y){
//     return x * y
// }

// console.log(calc(4,5,add))
// console.log(calc(4,5,mul))

// function step1(callback){
//     setTimeout(() => {
//         console.log("Step 1 Completed")
//         callback();
//     },1000)
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("Step 2 completed")
//         callback()
//     },1000)
// }

// function step3(callback){
//     setTimeout(() => {
//         console.log("Step 3 completed")
//         callback();
//     },1000)
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed")
//         })
//     })
// })

function step1(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed")
            resolve();
        },1000)
    })
}

function step2(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed")
            resolve();
        },1000)
    })
}

function step3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Step 3 completed")
            resolve();
        },1000)
    })
}


// step1()
// .then(step2)
// .then(step3)
// .then(() => console.log("All steps completed"))

// async function processSteps() {
//     await step1();
//     await step2();
//     await step3();
//     console.log("All set")
// }

// processSteps()


// let checkEven = new Promise((resolve,reject) => {
//     let number = 5;
//     if(number % 2 === 0){
//         resolve({name:"mark",pass:true})
//     }else{
//         reject("No number is not even")
//     }
// })

// checkEven
// .then((data) => console.log(data))
// .catch((err) => console.error(err))