const foo = (age) =>{
    if(age >18){
        return 'adulte';
    }else{
        return 'enfant';
    }
}

const fooTer = (age) =>{
    return age >18 ? 'adulte' : 'enfant';
}

let sex = 'autre';
// console.log(sex=='autre' ? '0' : sex == 'femme' ? 'F' : 'H')

const printSum = (...values) =>{
    // console.log(x1+x2+x3)
    let sum = 0;
    values.forEach(val=>sum += val);
    console.log(sum)
}

// let array = [1,2,3,4,5];

// printSum(...array)

// console.log("Hello" , 1,2,3,4,5,6)

let set = new Set([1,2,3,1]);
console.log(set)