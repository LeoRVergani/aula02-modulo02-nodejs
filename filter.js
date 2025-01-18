const numeros = [10, 3, 5, 9, 3, 2, 8];

const numerosPares = numeros.filter((numAtual, indice, arrayTotal)=> { // O filter precisa criar um novo array.
    return numAtual % 2 == 0 // O filter precisa retornar alguma coisa. Só retorna se for TRUE
})

console.log(numerosPares)

const pessoas = [
    {nome: "Tiago", idade: 22},
    {nome: "Gustavo", idade: 65},
    {nome: "Monica", idade: 20},
    {nome: "João", idade: 15}
]

const pessoasVotantes = pessoas.filter((pessoaAtual) => {
    if(pessoaAtual.idade < 16 || pessoaAtual.idade > 70) {
        return false
    } else {
        return true
    }
})

console.log(pessoasVotantes)