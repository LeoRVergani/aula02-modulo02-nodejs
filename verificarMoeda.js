const prompt = require("prompt-sync")()

function converteMoeda(valorEmReal, taxaConversao) {
    return valorEmReal * taxaConversao;
}

let valorEmReal = Number(prompt("Digite o valor em dólar: "));
let taxaConversao = 4.80;

let resultado = converteMoeda(valorEmReal, taxaConversao);

console.log(`R$${resultado.toFixed(2)}`)