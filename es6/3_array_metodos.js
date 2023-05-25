let grupoChat = ["Marta", "Francisco", "Carlos", "Federico", "Leonor"];
console.log(`Grupo chat original: ${grupoChat}, miembros: ${grupoChat.length}`);

// push
let nuevaLongitud = grupoChat.push("Silvio");
console.log(
  `Grupo chat actualizado: ${grupoChat}, miembros: ${grupoChat.length}`
);

let deportes = ["🏊‍♂️", "🛶", "🏀", "⛳", "🥊"];

// isArray
// Operador ternario
Array.isArray(deportes)
  ? console.log(`deportes es un array`)
  : console.log(`deportes no es un array`);

// shift
console.log(`${deportes.length} deportes disponibles: ${deportes}`);
const res2 = deportes.shift();
console.log(
  `Deporte eliminado: ${res2} - ${deportes.length} - deportes disponibles: ${deportes}`
);

// unshift
const res0 = deportes.unshift("🎾");
console.log(
  `Deporte agregado; ${deportes.length} deportes disponibles: ${deportes}`
);

// pop
const res1 = deportes.pop();
console.log(
  `Deporte eliminado: ${res1} - ${deportes.length} - deportes disponibles: ${deportes}`
);

// push
deportes.push("🏄‍♂️");
console.log(
  `Deporte agregado; ${deportes.length} - deportes disponibles: ${deportes}`
);

// forEach
deportes.forEach((num, ind) => console.log(`index: ${ind} - value: ${num}`));
