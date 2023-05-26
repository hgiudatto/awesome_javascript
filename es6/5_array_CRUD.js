// ! En esta seccion veremos metodos que podremos usar para:
// * Crear un nuevo array
// * Remover elementos para vaciar un array
// * Updetear elementos
// * Deletear elementos
// * ...y mucho más

// concat() => Mergea uno o más arrays sin cambiar los originales.
// join() => Junta todos los elementos usando un separator y devuelve un string. (default: ',')
const inicioDeSemana = ["lunes", "martes"];
const mitadDeSemana = ["miercoles", "jueves"];
const finDeSemana = ["viernes", "sabado", "domingo"];

const semana = inicioDeSemana.concat(mitadDeSemana).concat(finDeSemana);
// const semana = inicioDeSemana.concat(mitadDeSemana, finDeSemana);
// ! Podemos mergear n arrays con esta sintaxis
console.log(`semana: ${semana.join(" - ")}`);
console.log(`inicioDeSemana: ${inicioDeSemana.join(" - ")}`);
console.log(`mitadDeSemana: ${mitadDeSemana.join(" - ")}`);
console.log(`finDeSemana: ${finDeSemana.join(" - ")}`);

// fill() => Rellena un array con un valor estático; podemos cambiar algunos elementos o todos; muta el array original
/* const sitiosPopulares = ["Amazon", "Facebook", "Twitter", "Wikipedia"];
sitiosPopulares.fill("Stackoverflow");
console.log(`Sitios Populares: ${sitiosPopulares}`); */
// sitiosPopulares.fill("Stackoverflow", 2, 4); // Cambiamos solo los últimos dos
// console.log(`Sitios Populares: ${sitiosPopulares}`);

// includes() => Determina la existencia o inexistencia de un elemento.
/* const autos = ["Ferrari", "Audi", "McLaren", "Lamborghini"];
autos.includes("BMW")
  ? console.log("BMW figura en la serie")
  : console.log("La segunda etapa incluirá a BMW"); */

// indexOf() => Permite conocer el indice de la primer ocurrencia de un elemento.
/* const browsers = ["Mozilla Firefox", "Chrome", "Opera"];
console.log(`Browsers: ${browsers}`);
console.log(
  `Chrome se encuentra en la posicion: ${browsers.indexOf("Chrome")} - ${
    browsers.indexOf("IE") >= 0 ? `IE persiste` : `IE ya no existe para React`
  }`
); */

// lastIndexOf() => Retorna el indice de la última ocurrencia de un elemento.
/* browsers.push("Mozilla Firefox");
browsers.push("Safari");
console.log(`Browsers: ${browsers}`);
console.log(
  `primer posicion para Firefox: ${browsers.indexOf(
    "Mozilla Firefox"
  )} - última posicion para Firefox: ${browsers.lastIndexOf("Mozilla Firefox")}`
); */

// reverse() => Invierte las posiciones de los elementos. Modifica el array original.
/* const frutas = ["banana", "frutilla", "manzana"];
console.log(`frutas al reves: ${frutas.reverse()}`); */

// ! sort() => Convierte los tipos de elementos en string y luego los ordena. Muta.
/* const pruebas = ["desarrollo", "certificacion", "homologacion", "produccion"];
console.log(`pruebas: ${pruebas.sort()}`);

const numeros = [34, 99, 166, 21, 107, 84, 109, 55, 39, 60, 59];

const cmpAsc = (a, b) => {
  return a - b;
};
console.log(`numeros ascendente: ${numeros.sort(cmpAsc)}`);

console.log(`numeros descendente: ${numeros.sort((a, b) => b - a)}`); */

// splice() => Permite agregar, actualizar y REMOVER elementos. Cambia el array original.
// for...of
/* const cortes = ["cuadril", "asado", "vacio", "entraña"];
for (const corte of cortes) {
  console.log(`${corte}`);
}

cortes.splice(0, 0, "matambre");
console.log(`cortes agregado: ${cortes}`);

cortes.splice(2, 1, "marucha");
console.log(`cortes reemplazado: ${cortes}`);

cortes.splice(0, cortes.length); */

// cortes.length = 0;

// cortes = [];

// console.log(`cortes vacio: ${cortes}`);

// Static Array Methods in JavaScript
// Array.isArray(); Array.from();

/* const nuevoArreglo = Array.of(true, [5, 6, 7], "Static Array Methods", {
  color: "azul",
});
console.log(`nuevoArreglo: `, nuevoArreglo); */
