let numeros = ['Lucas', 'Romina', 'Gabriela']

let ascensorDeNumeros = numeros.map((nombre) => 'Buen dia ' + nombre)

//console.log(ascensorDeNumeros)

let grupoDeAmigos = [
    {
        nombre:'Ale',
        edad:18
    },
    {
        nombre:'Pedro',
        edad:25
    },
    {
        nombre:'Ana',
        edad:19
    },
]

let mayoresDeVeinte = grupoDeAmigos.filter((amigo) => amigo.edad < 20)
//console.log(mayoresDeVeinte)

let profe = {
    nombre: 'Nelson',
    herramientaFavorita: 'Taza de cafe',
    edad: 22
}

let {nombre: pepe, herramientaFavorita} = profe
console.log(pepe)
console.log(herramientaFavorita)

function saludar (){
    console.log(this)
}

console.log(saludar())