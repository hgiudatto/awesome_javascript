let nombre = prompt("Hola y bienvenido. Por favor ingresa tu primer nombre:");
let apellido = prompt("Por favor ingresa tu apellido:");
let anios = prompt("Cuántos años tienes?");
let estatura = prompt("Ingresa tu estatura en cms:");
let mascota = prompt("Ingresa el nombre de tu mascota:");
alert("Muchas gracias por la información");

if ((nombre.charAt(0) == 'j') && 
    (apellido.charAt(0) == 'j') && 
    (anios >= 20 && anios <= 30) &&
    (estatura >= 170) &&
    (mascota.endsWith('a'))) {
    console.log(nombre.toString() + " " + apellido.toString() + " " + anios.toString() + " " + estatura.toString() + " " + mascota.toString());
        console.log("Continua");
        alert("Bienvenido camarada!  Has superado la prueba de espionaje");
} else {
    console.log(nombre.toString() + " " + apellido.toString() + " " + anios.toString() + " " + estatura.toString() + " " + mascota.toString());
    console.log("No continua");
    alert("No has dado con la clave");
}

// El espía tiene la misma primera letra en su nombre y apellido
// El espía tiene entre 20 y 30 años de edad
// El espía tiene al menos 170 cms de alto
// El espía tiene una mascota que su nombre termina con  la letra "a"
