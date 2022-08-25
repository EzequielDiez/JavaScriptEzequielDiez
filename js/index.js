debugger
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
alert("Bienvenido/a" + " " + nombre + " " + apellido)

//TABLA MULTIPLICACIóN

let numero = parseInt(prompt("Ingrese un número para conocer su multiplicación:"))
let multiplicador = parseInt(prompt("Ingrese el máximo multiplicador deseado"))

for (let i = 1; i <= multiplicador; i++) {
    let resultado = numero * i;
    console.log (numero +" X "+ i + "="+ resultado)
}
