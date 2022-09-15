
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

//
function cargarBase(){
    let fila = ""
    tabla.innerHTML=""
        basePersonas.forEach(persona => {
            fila = 
                `<tr>
                    <td>${persona.id}</td>
                    <td>${persona.nombre}</td>
                    <td>${persona.apellido}</td>
                    <td>${persona.edad}</td>
                    <td>${persona.mail}</td>
                </tr>`
                tabla.innerHTML += fila
        });
}

cargarBase()

//Agregar persona de manera dinámica
function agregarPersona(){
    let idpersonanueva= nuevoID()
    let nombrepersonanueva= prompt("Ingrese su nombre:").toLocaleUpperCase()
    let apellidopersonanueva= prompt("Ingrese su apellido:").toLocaleUpperCase()
    let edadpersonanueva =Number(prompt("Ingrese su edad:"))
    let mailpersonanueva =(prompt("Ingrese su mail")).toLocaleLowerCase()
        const EXISTE = basePersonas.some((personas) => personas.mail == mailpersonanueva)
            if(EXISTE == true){
            alert("El mail ingresado ya se encuentra en nuestra base de datos")
            }else{
            let personanueva = new persona(idpersonanueva, nombrepersonanueva, apellidopersonanueva,edadpersonanueva,mailpersonanueva)
            basePersonas.push(personanueva)
            cargarBase()
            }
}
function suscribirPersona(){
    debugger
    let suscribir = confirm("¿Desea suscribirse a nuestro Newsletter?")
    if(suscribir == true){
        agregarPersona()
        }else{
        alert("Muchas gracias!")
    }
} 

const buttonSuscribir = document.querySelector('#buttonSuscribite');
    buttonSuscribir.addEventListener("click", suscribirPersona)

