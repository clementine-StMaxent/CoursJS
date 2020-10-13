console.log("avant");
console.log("--------------AVANT-----------------")

let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("ok")
        let value = "hello World"
        resolve(value)
    },1000)
})
console.log("--------------NEW PROMISE-----------------")

promise.then((value)=>{
    console.log(value)
})
console.log("-------------PROMISE------------------")

// const foo = () =>{
//     console.log("hello", new Date());
// }
// // console.log("avant");
// // setTimeout(foo,1000);

// // console.log("après");
// let si = setInterval(foo,1000);
// setTimeout(()=>{
//     clearInterval(si)
// },4000);

console.log("--------------APRES-----------------")
console.log("après")
