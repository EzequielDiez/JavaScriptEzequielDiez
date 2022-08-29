debugger
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
alert("Bienvenido/a" + " " + nombre + " " + apellido)

/* TABLA MULTIPLICACIóN

let numero = parseInt(prompt("Ingrese un número para conocer su multiplicación:"))
let multiplicador = parseInt(prompt("Ingrese el máximo multiplicador deseado"))

for (let i = 1; i <= multiplicador; i++) {
    let resultado = numero * i;
    console.log (numero +" X "+ i + "="+ resultado)
}
 */


// Simulador plazo fijo tradicional

//Ingreso datos

let capitalinicial = parseInt(prompt("Ingrese el capital a invertir (solo números)"))
    console.log ("Capital Inicial: ", capitalinicial)
let tna = 69.5/100
    console.log ("Tasa: ", tna*100 + "%")
let duracion = parseInt(prompt("Ingrese duración de la inversión (mayor a 30 días)"))
    console.log ("Duración: ", duracion + " días")

//Calculo Plazo Fijo

function calcularPlazofijo() {
    if(capitalinicial !== " " && tna !== " " && duracion >= 30){
    let capitalfinal = capitalinicial * (1 + tna * (duracion / 365))
        console.log ("Intereses ganados: ", capitalfinal - capitalinicial)
        console.log ("Capital final: ", capitalfinal)
    } else
        console.error ("Usted ingreso una duracion menor a 30 días")
}

calcularPlazofijo();