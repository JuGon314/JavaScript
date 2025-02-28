// What is a function?
// It's an indepent code that can be called when we need to use it

function gravity() {
    gravity = 9.8
    console.log(`The planet's gravity is: ${gravity}`)
}

gravity()

// Functions with params
function sum (a, b) {
    result = a + b
    console.log(`The sum result is: ${result}`)
}

sum(1,2)

function fullName(name, surname) {
    console.log(`Your name is ${name} ${surname}`)
}

fullName("Juliana", "Gonçalves")

// Functions with return
function fullName2(name, surname) {
    return `Your name is ${name} ${surname} - v2`
}

let saveFullName = fullName2("Juliana", "Gonçalves")
console.log(saveFullName)

// Function with conditional return
function isRed(color) {
    if(color == "red") {
        return true
    } else {
        return false
    }
}

console.log(isRed("red"))

function isAdult(age) {
    if(age >= 18) {
        return true
    } else {
        return false
    }
}

let age3 = 18
let check = isAdult(age3)

if(check) {
    console.log("Adult")
} else {
    console.log("Kid")
}

// Exercise 1
function calcPct(x, y) {
    return (x / y) * 100
}

let x = 40
let y = 10
let pct = calcPct(y, x)
console.log(`${pct}% de ${x} é ${y}`)

// Exercise 2
function calcularImovel(metragem, quartos) {
    m2 = 3000
    umQuarto = 1
    doisQuartos = 1.2
    tresQuartos = 1.5

    calcularMetragem = metragem * m2

    if(quartos == 1) {
        return calcularMetragem * umQuarto
    } else if(quartos == 2) {
        return calcularMetragem * doisQuartos
    } else {
        return calcularMetragem * tresQuartos
    }
}

let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$${preco}`)

// Exercise 3
function validar(usuario, senha) {
    return usuario === 'pedro' && senha === '123' ? true : false
}

let usuario = 'bonieky'
let senha = '1234'
let validacao = validar(usuario, senha)

if(validacao) {
    console.log('Aceso concedido.')
} else {
    console.log('Acesso negado!')
}

//Arrow functions - anonymous function (same thing the traditional function)
// function sum2(a, b) {
//     return a+b
// }

// const sum2 = (a,b) => {return a+b}
const sum2 = (a,b) =>  a + b

console.log(sum2(1,99))

// Variables inside functions
let count = 0; //Global scope

function add() {
    let count = 0 //Local scope
    count++
}

add()
add()

console.log(count)

// Functions inside functions
function addSquares(a, b) {
    let square = (x) => {return x * x}
    return square(a) + square(b)
}

console.log(addSquares(2, 3))

// Array - how to create and access
let colors = ["Blue", "Red", "Green"]
console.log(colors[0])

let list = [
    "blabla",
    ["xx", "yy"]
]

let xx = () => {return list[1]}
console.log(xx()[0])

// Operations with arrays
let array = [
    'this',
    'is',
    'an',
    'array'
]

array.push('now I did a push') //How to add an item to an array

array.pop() //How to remove tha last item in an array

array.shift() //How to remove the first item in an array

console.log(`Total of words: ${array.length}`) //How to count how many items have in the array

console.log(array)