const fetch = require('node-fetch');

// console.log("avant");
// console.log("--------------AVANT-----------------")

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("ok")
//         let value = "hello World"
//         resolve(value)
//     },1000)
// })
// console.log("--------------NEW PROMISE-----------------")

// promise.then((value)=>{
//     console.log(value)
// })
// console.log("-------------PROMISE------------------")

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

// console.log("--------------APRES-----------------")
// console.log("après")


const main = async() =>{
    let result = fetch("http://www.google.com", {
    method: "GET"
    // method: "POST"
});
//console.log(result);

    let txt = await result.then(async data =>{
        return await data.text();
    })
    console.log(txt)
}
main();


 /*
const asyncFoo = async () =>{
    console.log("in");
    return "ADMIN";
}
let res = asyncFoo();
console.log(res);
console.log("après");
*/