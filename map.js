const numeros = [10, 3, 5, 8, 2]

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

numeros.forEach(item => console.log(item))

numeros.map((valorAtual, indice, arrayInteiro)=> {
    console.log(`O número atual é ${valorAtual} e o seu índice é ${indice}. O array inteiro é ${arrayInteiro}`)
})

const dobroArray = numeros.map((valorAtual) => {
    return valorAtual * 2
})

console.log(numeros)
console.log(dobroArray)