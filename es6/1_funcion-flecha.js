// TL;DR
// ES6 representa ECMAScript 6;
// ECMAScript es el nombre oficial para JavaScript desde que la organizacion
// internacional ECMA creo el standard.
// JavaScript ES6 es la version de JavaScript lanzada en 2015. Informalmente muchos
// desarrolladores llaman a cualquier version de JavaScript lanzada despues de 2015 "ES6"
// debido a las varias caracteristicas que la actualizacion de 2015 agregó al lenguaje
// convirtiendola en un "hito" en la evolución del mismo.

// Funciones de Flecha - Arrow Functions
function soup2UpperCase(text) {
  const nameUpper = text.toUpperCase();
  console.log(nameUpper);
}

/* const soup2UpperCase = (text) => {
  const nameUpper = text.toUpperCase();
  console.log(nameUpper);
}; */

soup2UpperCase("sopa");

// Immediately Invoked Function Expression (IIFE)
// Sentencia en la cual la funcion es creada como una expresion
// y es ejecutada inmediatamente.

const calcula = (a, b, c) => {
  return b - c + a;
};
const resultado = calcula("23", 20 + 45, 35 + 10);
console.log(resultado);

// IIFE
/* ((a, b, c) => {
  console.log(b - c + a);
})("23", 20 + 45, 35 + 10); */
