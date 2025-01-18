const usuario = {
    nome: "Bruno",
    senha: 1234
}

usuario.nome = "Breno"
usuario.email = "bruno@email.com"
usuario.endereco = "Rua: José Senna, 321"

const usuario2 = {
    nome: usuario.nome,
    senha: usuario.senha
}

const usuario3 = {...usuario}

console.log(usuario)
console.log(usuario2)
console.log(usuario3)