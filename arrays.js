const numeros = [10, 3, 5, 8]

numeros[10] = 2
numeros.push(36)
numeros.unshift("Começo")

console.log(numeros)

let valor = numeros.pop()
numeros.shift()

console.log(numeros)

numeros.splice(4,6)

console.log(numeros)
console.log(valor)

let novoArray = numeros.slice(1,3)

console.log("Novo array >>> " + novoArray)

numeros.sort((a,b) => a - b)

console.log(numeros)