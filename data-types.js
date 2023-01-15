//*  DATA TYPES : 1. Primitive Types 2. Reference Types */

/**
 * * 1. Primitive Types
 *
 * *  String
 * *  Number
 * *  Boolean
 *
 * *  Undefined
 * *  Null
 *    Symbol
 *
 * *  Bigint ( A New Primitive Types in 2020)
 *
 */

const name = 'Kitty' // String
let height = 120 // Number
let isFemale = true // Boolean

let country // undefined
let city = null // null

let bigNumber = 10n // bigint
console.log(bigNumber)

/**
 * * 2. Reference Types
 *
 * *  Object
 * *  Array
 * *  Function
 */

// * Object

const person = {
  name: 'Ken',
  isMale: true,
  age: 8
}

console.log(person)
console.log(person.name)

person.age = 12
console.log(person)

person.nationality = 'british'
console.log(person)

// * Array

const numbers = [5, 10, 15, 20]
console.log(numbers[2])

// Add new element at the end of the array
numbers.push(25)
console.log(numbers)

// Add new element to the beginning of the array

numbers.unshift(0)
console.log(numbers)

// Delete the lastest element of the array

numbers.pop()
console.log(numbers)

// Delete the first element of the array

numbers.shift()
console.log(numbers)
