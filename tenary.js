const date = new Date()
console.log(date)

const hour = date.getHours()
console.log(hour)

// let message = 'good morning class'
let message = `good ${hour > 12 ? 'afternon' : 'morning'} class` // good way to do ternary
// let message = `good ${hour > 12 ? 'afternon' : hour > 20 ? 'night' : 'morning'} class` //starts to be too long probably better to use if statement

let greeting
 
if (hour > 12) {
    greeting = 'afteernoon'
} else {
    greeting = 'morning'
}

let message1 = `good ${greeting} class`
console.log(message1)

//same as

let message2 = `good ${hour > 12 ? 'afternoon' : 'morning'} class`
console.log(message2)

// let message = `good ${hour > 12 ? greeting : greeting} class` 


console.log(message)