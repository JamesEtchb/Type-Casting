
// function sum(x,y){
const sum = (x,y) => {     // ES6 arrow function
    if (typeof(x) != 'number'){
        return 'no, no, no'
    }
    if (y == undefined){
        return x
    } else {
        return x + y
    }
}

const results = sum(3,4)

console.log(results)
console.log(sum(5,6))