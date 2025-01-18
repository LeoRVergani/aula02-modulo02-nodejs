const prompt = require("prompt-sync")()

const despesas = [
    { nome: "Aluguel", valor: 1200},
    { nome: "Mercado", valor: 450},
    { nome: "Internet", valor: 100},
    { nome: "Restaurante", valor: 200},
    { nome: "Transporte", valor: 150},
    { nome: "Cinema", valor: 50},
    { nome: "Academia", valor: 90}
]

let limite = prompt("Digite o valor limite: ")

const despesasAltas = despesas.filter((despesasDoMes) => {
    if (despesasDoMes.valor > limite) {
        return true
    } else {
        return false
    }
})

console.log(despesasAltas)