const resultado = soma(10, 20) // Função nomeada dá para chamar antes.

function soma(a, b){
    return a + b;
}

console.log(resultado)

// Função anonima - Não dá para acessar antes da inicialização.

const somar = function (a, b) {
    return a + b;
}

const resultados2 = somar(20,20)

console.log(resultados2)

// Arrow Function - Funcão declarada que depende de uma variavel.

const subtrair = (a, b) => {
    return a - b;
}

// Se ela for só uma linha dá para reduzir

const multiplicar = (a, b) => a * b; // Reduziada por ser apenas uma linha mas é a mesma função arrow function de cima.

// Quando é arrow function tem que importar o react, quando tem componente.

const resultado3 = subtrair(10, 5);
const resultado4 = multiplicar(10, 5);

console.log(resultado3)
console.log(resultado4)