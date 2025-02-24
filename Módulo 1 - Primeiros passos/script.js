// Types of data
// "something" is not defined = there is a variable without value

let string = "This is a string" //string
let number = 10 //number
let boolean = true //boolean
let array = ["This is", 1, "list of items"] //array
let fullName = {name: "Juliana", age: 22} //object

// How to use the typeof
console.log(typeof fullName)

/*
 This is a multiple line comment
*/

// ; is optional, but it helps you to have less problems with the code

// let (context of functions) / var (global scope) - variables always can be changed

// const can't be changed

// sum between strings and numbers always will concatenate them
let stringTest = "1"; let numberTest = 2; let sumTest = stringTest+numberTest
console.log(sumTest)

// Template string: `blablabla ${variable} blablabla`
let a = 1; let b = 3; let sum = a + b
console.log(`The sum between 1 and 3 is ${sum}`)

// if / else conditionals - checks if things are true or false
age = 17

if(age >= 18) {
    console.log("You're an adult")
} else {
    console.log("You're stil a teenager")
}

// Conditionals == and ===
/*
 ==: equal - it checks just the value
 ===: exactly - it checks the value and the type
*/
let ageTest = "20"

if(ageTest == 20) {
    console.log("Great! You're 20.")
} else {
    console.log("Please, enter with a number, not a string.")
}

// Multi conditionals
/*
 && : add - both of the options available need to be true
 || : or - just one of the options need to be true
*/

// let newAge = 15

// if(newAge >= 18) {
//     if(newAge < 60) {
//         console.log("You're an adult!")
//     } else {
//         console.log("You are older.")
//     }
// } else {
//     console.log("You are a kid.")
// }

let newAge = 60

if(newAge >= 18 && newAge < 60) {
    console.log("You are and adult!")
} else if (newAge >= 60) {
    console.log("You're older!")
} else {
    console.log("You're a kid!")
}

// Ternary conditional - if in just one line
let isMember = false
let shipping = isMember ? 'You are member' : 'You are not a member'; // ? - if  |  : - else
console.log(shipping)

let newAgeTest = 17
let isAdult = ((newAgeTest >= 18) ? "Adult" : "Kid")
console.log(isAdult)

// Switch - conditional with several results
let profession = "Doctor"

switch(profession){
    case 'Doctor':
        console.log("White")
        break

    case 'Police man':
        console.log("Dark blue")
        break

    case 'Nurse':
        console.log("Light blue")
        break

    default:
        console.log("Black")
        break
}