const animais = [
    { tipo: "gato", idade: 2 },
    { tipo: "cão", idade: 4 },
    { tipo: "gato", idade: 3 },
    { tipo: "cão", idade: 1 }
]

const converterIdade = animais.map((idadeHumana) => {
    console.log(`O ${idadeHumana.tipo} tem ${idadeHumana.idade} anos de idade e ${idadeHumana.idade * 9} anos de idade humana.`)
})

