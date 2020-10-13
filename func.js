function oldfoo(msg) {
    // console.log(this);
    console.log("Mon message:", msg)
}
oldfoo("Salut le monde!")

console.log("-------------------------------")
//fonction flêchés
const newFoo = (msg) => {
    console.log(this);
    console.log("Mon message:", msg)
}
newFoo("Goodbye")

console.log("-------------------------------")

let varFoo = newFoo;
varFoo("toto");


let array = ["a", "b", "c", "d"];
array.forEach((val, id) => {
    console.log(id, val)
});
console.log("-------------------------------")

console.log("Filtre:::")

array.filter((val, i) => i % 2)
    .forEach((val) => console.log(val))

console.log("-------------------------------")

array.filter((val, i) => {
    return i % 2
})
    .map((val) => val + "!")
    .forEach((val) => console.log(val));

console.log("-------------------------------")