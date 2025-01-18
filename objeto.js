const pessoas = [
    {nome: "Tiago", idade: 22},
    {nome: "Gustavo", idade: 65},
    {nome: "Monica", idade: 20},
    {nome: "João", idade: 15}
]

pessoas.map((pessoaAtual)=>{
    if(pessoaAtual.idade < 16){
        console.log(`${pessoaAtual.nome} não vota!`)
    } else if (pessoaAtual.idade > 70) {
        console.log(`${pessoaAtual.nome} não vota!!`)
    } else {
        console.log(`${pessoaAtual.nome} vota!!!`)
    }
})