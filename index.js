let num = 23
num = 45
// console.log(num + 2)


const toText = String(num)
// console.log(toText + 'text')

//convert string to numbers
const myString = "24"
const toNum = Number(myString)
//console.log(toNum)

//change booleans to numbers
// console.log(Number(false))
// console.log(Number(true))

// booleans to string
const falseStr = String(false)
const trueStr = String(true)
const num2 = 2345
const numToString = num2.toString()
// console.log(`first str ${falseStr} & second str ${trueStr} & ${numToString}`, true)

// check type
const str = '23'
const strType = typeof(str)
// console.log(strType)

const num1 = 234
const numType = typeof(num1)
// console.log(numType)

/*Booleans*/
// console.log(true == true) //exact equals
// console.log(true == '1')
// console.log('true' == true)

// console.log('true' === true)
// console.log(true === 'true')

const checkNum = 100
// console.log(checkNum == true * 100)

const checkNum2 = 7 + 1 + 2.34
// console.log(checkNum2 == true)

// console.log(checkNum2 && true) // true
// console.log(checkNum2 && false) // false
// console.log(checkNum2 && false && true) // false doesnt even check after first false

// console.log(checkNum2 || false) // returns  10.34
// console.log(undefined || false) // returns  false both need to be false for it to return false
// console.log(3 || false) // returns  true
// console.log(null || 578) // returns  578
const nullNum = -0 // -0 is a false
// console.log(null || 578 || 'test' || true) // returns  578 because its first one thats true


// cComparissons

let isEqual = 78 < 90
isEqual = 78 >= 100
isEqual = 78 != 100
// console.log(isEqual)

