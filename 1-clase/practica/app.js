//1. Check
let subject = 'Hola mundo'
let year = 2023

subject = 'Nos vemo en Disney'
year = 2025

//console.log(subject)
//console.log(year)

//2. Check
let favoriteSites = [
    'HBO',
    'Youtube',
    'Playground',
    'Facebook',
    'Hi5'
]

//console.log(favoriteSites[3])
favoriteSites.pop()
favoriteSites.push('Instagram')
//console.log(favoriteSites)

//3. check
let person = {
    name: 'Pedro',
    lastName: 'Picapiedra',
    age: 45,
}

//console.log('Hola, me llamo '+ person.name + ' ' + person.lastName + ' y tengo '+ person.age + ' años')

//4. Check
person.site = favoriteSites

//console.log(person.site)
//console.log(person.site[1])

//5. Check
let cursos = [
    {
        nombre:"Programacion",
        descripcion:"Hola",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    },
    {
        nombre:"Matematicas",
        descripcion:"Hola",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    },
    {
        nombre:"Tercero",
        descripcion:"dfdf",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    },
    {
        nombre:"Cuarto",
        descripcion:"dfdfd",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    },
    {
        nombre:"Quinto",
        descripcion:"xsffsdd",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    },
    {
        nombre:"Sexto",
        descripcion:"sdsdsd",
        cantAlumnos:35,
        cursada:[
            'Lunes',
            'Jueves'
        ],
    }
]

//console.log(cursos[2])
//console.log(cursos[3].nombre)

cursos[1].cursada.push('Sabado')
//console.log(cursos[1])

for(let i = 0; i < cursos.length ; i++){
    cursos[i].alumnos = [
        {
            name: 'Pepe',
            apellido: 'Perez'
        },
        {
            name: 'Oscar',
            apellido: 'Perez'
        },
        {
            name: 'Ana',
            apellido: 'Perez'
        },
    ]
}

//console.log(cursos[2].alumnos[0])

let saludar = () => 'Hola'
console.log(saludar())

let multiplicar = (param1, param2) => param1 * param2

console.log(multiplicar(2, 3))