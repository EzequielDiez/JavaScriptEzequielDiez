
/* //BIENVENIDA
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
alert("Bienvenido/a" + " " + nombre + " " + apellido)
 */

/* TABLA MULTIPLICACIóN

let numero = parseInt(prompt("Ingrese un número para conocer su multiplicación:"))
let multiplicador = parseInt(prompt("Ingrese el máximo multiplicador deseado"))

for (let i = 1; i <= multiplicador; i++) {
    let resultado = numero * i;
    console.log (numero +" X "+ i + "="+ resultado)
}
 */


/* // SIMULADOR PLAZO FIJO TRADICIONAL

Ingreso datos

let capitalinicial = parseInt(prompt("Ingrese el capital a invertir (solo números)"))
    console.log ("Capital Inicial: ", capitalinicial)
let tna = 69.5/100
    console.log ("Tasa: ", tna*100 + "%")
let duracion = parseInt(prompt("Ingrese duración de la inversión (mayor a 30 días)"))
    console.log ("Duración: ", duracion + " días")

Calculo Plazo Fijo

function calcularPlazofijo() {
    if(capitalinicial !== " " && tna !== " " && duracion >= 30){
    let capitalfinal = capitalinicial * (1 + tna * (duracion / 365))
        console.log ("Intereses ganados: ", capitalfinal - capitalinicial)
        console.log ("Capital final: ", capitalfinal)
    } else
        console.error ("Usted ingreso una duracion menor a 30 días")
}

calcularPlazofijo(); */


//------------------------------------------------------------------------------------------------


//BASE DE DATOS NEWSLETTER

const nuevoID = ()=> parseInt(Math.random() * 100000) //Fórmula para crear ID aleatorio

//Creación Objeto
class persona{
    constructor(id,nombre,apellido,edad,mail){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.mail=mail
    }
}

const basePersonas= [] //Declaración Array

//Creando nuevos objetos
let persona1 = new persona(12345,"EZEQUIEL","DIEZ",29,"ezequieldiez.emd@gmail.com")
let persona2 = new persona(23456,"FELICITAS","MONTES DE OCA",24,"montes.felicitas@gmail.com")
let persona3 = new persona(34567,"JULIAN","ALVAREZ",22,"julian.alvarez@gmail.com")

//Ingresando objetos al array
basePersonas.push(persona1,persona2,persona3)

//Muestra base de datos inicial
console.table(basePersonas)

/* //Filtro de personas con menos de 25 años

let menores25 = basePersonas.filter(persona=>persona.edad <= 25)
console.log(menores25) */

//Agregar persona de manera dinámica
function agregarPersona(){
    let idpersonanueva= nuevoID()
    let nombrepersonanueva= prompt("Ingrese su nombre:").toLocaleUpperCase()
    let apellidopersonanueva= prompt("Ingrese su apellido:").toLocaleUpperCase()
    let edadpersonanueva =Number(prompt("Ingrese su edad:"))
    let mailpersonanueva =(prompt("Ingrese su mail")).toLocaleLowerCase()
        const EXISTE = basePersonas.some((personas) => personas.mail == mailpersonanueva)
            if(EXISTE == true){
            console.error("El mail ingresado ya se encuentra en nuestra base de datos")
            }else{
            let personanueva = new persona(idpersonanueva, nombrepersonanueva, apellidopersonanueva,edadpersonanueva,mailpersonanueva)
            basePersonas.push(personanueva)
            console.table(basePersonas)
            }
}
let cargarPersona = confirm("¿Desea suscribirse a nuestro Newsletter?")

while(cargarPersona == true){
    agregarPersona()
    cargarPersona = confirm("¿Desea suscribir a otra persona?")
}
