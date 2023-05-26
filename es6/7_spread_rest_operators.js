// sintaxis spread (operador untar)
// Toma un iterable, ej. un arreglo y lo expande a elementos y individuales.
const bancoFrances = {
  fiid: "BBVA",
  nombre: "Frances",
  pagoDirecto: false,
  orden: 11,
};

const clonBcoFrances = { ...bancoFrances }; // shallow copy (o superficial)
console.log(
  bancoFrances === clonBcoFrances
    ? `bancoFrances y clonBcoFrances son iguales`
    : `bancoFrances y clonBcoFrances son distintos`
);

// update
const bcoUpdated1 = { ...bancoFrances, requiereLogo: true }; // la nueva propiedad SOLO se agrega al clon.
console.log(`banco actualizado: `, bcoUpdated1);

const bcoUpdated2 = { ...bancoFrances, nombre: "Bco. Frances" };
console.log(`banco actualizado: `, bcoUpdated2);

// * Para actualizar propiedades anidadas (dentro de otros objetos)
// * expandimos el objeto cuya propiedad necesitamos actualizar
// * y asignamos el nuevo valor de la misma.

// ! Merge => React champion!
const usuario = {
  nombre: "Alex",
  direccion: "Catamarca 189",
  telefono: "011-25705514",
};

const departamento = { id: "01", sector: "ventas" };

const detalles = { ...usuario, ...departamento };
console.log(`Detalles: `, detalles);

// ! ATENCION => shallow merge
// const departamento = { nombre: "V1", sector: "ventas" };

// const detalles = { ...usuario, ...departamento };
// console.log(`Detalles: `, detalles);

// Si necesitamos una copia profunda (deep-merge) usaremos lodash por ej.

// Parametro: REST
// Recogerá los elementos y propiedades.
const { nombre, ...rest } = usuario; // Podría haber sido ...demasPropiedades
console.log(`Empleado: `, nombre, rest);

// Nullish Coalescing (??)
const depto = { id: "", sector: "ventas" };
let { id, sector } = depto;
const deptoDescrip = undefined ?? ""; // o null
console.log(`depto: `, depto, `descripcion: `, deptoDescrip);
