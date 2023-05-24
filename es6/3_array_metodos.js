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

// Destructuring en arrays es posicional
let [hamburger, hotDog, waffle] = ["🍔", "🌭", "🧇"];
console.log(hamburger);

// Destructuring en objetos es nominal
// Accesando objetos anidados
let menu = {
  nombre: "rapido",
  barrios: ["Microcentro", "Barracas", "Castelar"],
  sucursales: {
    centro: "diag. Norte y Florida",
    bcas: "Montes de Oca y California",
    oeste: "Almafuerte y Gregorio de Laferrere",
  },
  estacion: "otoño",
  opciones: ["🍔", "🌭", "🧇"],
  kcal: 5500,
  aptoVegano: false,
  petFriendly: true,
};
const {
  nombre,
  barrios,
  sucursales,
  estacion,
  opciones,
  kcal,
  aptoVegano,
  petFriendly,
} = menu;
const [m, b, c] = barrios;
console.log(
  `El menu: ${nombre} está recomendado para: ${estacion}; consta de ${
    opciones.length
  } opciones: ${opciones} - ${
    kcal >= 3500 ? `No es reducido en calorias` : `Apto dieta`
  } - ${aptoVegano ? `Es recomendable para veganos` : `No es apto vegano`}; ${
    petFriendly
      ? `Podés venir con gaturro`
      : `El can hoy se queda con tía Estela.`
  } - En ${b} lo encontrás en ${sucursales.bcas} `
);

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
