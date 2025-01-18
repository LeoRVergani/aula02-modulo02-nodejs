console.log("Linha 1")

function esperar3segundos() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Linha 6")
            resolve("Os 3 segundos acabaram.")
        },3000)
    })
}

console.log("Linha 12")

async function lerFuncao3segundos(){
    try {
        let resultado = await esperar3segundos()
        console.log("Linha 17")
        console.log(resultado)

    } catch (erro) {
        console.error(erro)
    }
    
}

lerFuncao3segundos()

console.log("Linha 18")

// Tratamento de erros.

// .then(resultado => console.log(resultado)) // Do resolve
// .catch(erro => console.error(erro)) // Do reject