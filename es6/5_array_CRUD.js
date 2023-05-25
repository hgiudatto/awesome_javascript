// ! En esta seccion veremos metodos que podremos usar para:
// * Crear un nuevo array
// * Remover elementos para vaciar un array
// * Accesar elementos
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
const sitiosPopulares = ["Amazon", "Facebook", "Twitter", "Wikipedia"];
sitiosPopulares.fill("Stackoverflow");
console.log(`Sitios Populares: ${sitiosPopulares}`);
// sitiosPopulares.fill("Stackoverflow", 2, 4); // Cambiamos solo los últimos dos
// console.log(`Sitios Populares: ${sitiosPopulares}`);

// includes() => Determina la existencia o inexistencia de un elemento.
const autos = ["Ferrari", "Audi", "McLaren", "Lamborghini"];
autos.includes("BMW")
  ? console.log("BMW figura en la serie")
  : console.log("La segunda etapa incluirá a BMW");

// indexOf() => Permite conocer el indice de la primer ocurrencia de un elemento.
const browsers = ["Mozilla Firefox", "Chrome", "Opera"];
console.log(`Browsers: ${browsers}`);
console.log(
  `Chrome se encuentra en la posicion: ${browsers.indexOf("Chrome")} - ${
    browsers.indexOf("IE") >= 0 ? `IE persiste` : `IE ya no existe para React`
  }`
);

// lastIndexOf() => Retorna el indice de la última ocurrencia de un elemento.
browsers.push("Mozilla Firefox");
browsers.push("Safari");
console.log(`Browsers: ${browsers}`);
console.log(
  `primer posicion para Firefox: ${browsers.indexOf(
    "Mozilla Firefox"
  )} - última posicion para Firefox: ${browsers.lastIndexOf("Mozilla Firefox")}`
);

// https://www.freecodecamp.org/news/the-javascript-array-handbook/
// reverse()
// sort()
// splice()

// Static Array Methods in JavaScript
