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
    petFriendly ? `Podés venir con gaturro` : `El can en la cucha.`
  } - En ${b} lo encontrás en ${sucursales.bcas} `
);
