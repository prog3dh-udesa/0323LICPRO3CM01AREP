//MAP
let numeros = [2,4,6,8,10]
let dobleNumeros = numeros.map((numero) => numero * 2)

let numerosAString = numeros.map((numero) => numero.toString())

let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];
let nombresEnMayuscula = nombres.map((nombre) => nombre.toUpperCase())

let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];
let soloNombres = personas.map(persona => persona.nombre)

let accesoMatrix = personas.map(persona => persona.edad > 60
    ? `${persona.nombre} puede entrar a la Matrix`
    : `${persona.nombre} es demasiado peque`)
let usandoHtml = personas.map((persona) => `<h2>${persona.nombre}</h2><p>${persona.edad}</p>`)
    

//FILTER
let numerosDos = [66, 3, 2, 5, 26, 101];
let mayoresACinco = numerosDos.filter(numero => numero > 5)

let pares = numerosDos.filter(numero => numero % 2 === 0)

let words = ["dog", "wolf", "by", "family", "eaten", "camping"];
let menosDeCinco = words.filter(palabra => palabra.length < 5)

let listaPersonas = [
    { nombre: "Angelina Jolie", afiliado: true },
    { nombre: "Eric Jones", afiliado: false },
    { nombre: "Paris Hilton", afiliado: true },
    { nombre: "Kayne West", afiliado: false },
    { nombre: "Bob Ziroll", afiliado: true }
];
let miembroIlluminati = listaPersonas.filter(persona => persona.afiliado)

let arr = [1, 3 , 4, 5]
    