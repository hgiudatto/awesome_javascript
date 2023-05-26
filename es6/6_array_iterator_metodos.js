const estudiantes = [
  {
    id: 001,
    nombre: "Alejo",
    apellido: "B",
    genero: "M",
    casado: false,
    gana: 250,
    cursos: ["JavaScript", "React"],
  },
  {
    id: 002,
    nombre: "Pablo",
    apellido: "M",
    genero: "M",
    casado: true,
    gana: 150,
    cursos: ["JavaScript", "Node JS"],
  },
  {
    id: 003,
    nombre: "Clara",
    apellido: "S",
    genero: "F",
    casado: false,
    gana: 350,
    cursos: ["SVN", "React", "UX"],
  },
  {
    id: 004,
    nombre: "Mario",
    apellido: "F",
    genero: "M",
    casado: true,
    gana: 250,
    cursos: ["Git", "React", "Mongo DB"],
  },
];

// Recordemos los callbacks...
// filter()

const estudiantesCasados = estudiantes.filter((e) => {
  return e.casado; // truthy
});
console.log(`estudiantes casados: `, estudiantesCasados);

// ! map()

const nombresCompletos = estudiantes.map((e) => {
  return `${e.nombre} ${e.apellido}`;
});
console.log(`nombres completos: ${nombresCompletos}`);

// reduce()
const pagaTotal = estudiantes.reduce((ac, e) => {
  ac = ac + e.gana;
  return ac;
}, 0);
console.log(`el curso gana en total: `, pagaTotal);

// some()
const gananMenosDe300 = estudiantes.some((e) => {
  return e.gana < 300;
});
console.log(
  gananMenosDe300
    ? `en el curso hay estudiantes que ganan menos de 300`
    : `todos los estudiantes ganan bastante.`
);

// find()
const comienzaConA = estudiantes.find((e) => {
  return e.nombre.indexOf("A") === 0;
});
console.log(`estudiante cuyo nombre comienza con 'A': `, comienzaConA);

// every()
const alMenosTomo2Cursos = estudiantes.every((e) => {
  return e.cursos.length >= 2;
});
console.log(
  alMenosTomo2Cursos
    ? `todos los estudiantes tomaron al menos dos cursos.`
    : `hay estudiantes que no tomaron menos de dos cursos.`
);

//at() => Aparece en la actualizacion ES2022 junto con Await nivel superior (como veremos),
// Object.hasOwn(), Propiedades/métodos privados y error.cause
const comidaChatarraAmada = [
  "🥝",
  "🍔",
  "🥦",
  "🍟",
  "🥤",
  "🍎",
  "🥞",
  "🌭",
  "🥪",
  "🍮",
  "🍒",
  "🍝",
  "🥨",
  "🍙",
  "🍋",
  "🍕",
  "🥕",
];
console.log(comidaChatarraAmada.at(1));
console.log(comidaChatarraAmada.at(3));
console.log(comidaChatarraAmada.at(4));
console.log(comidaChatarraAmada.at(-2));
console.log(comidaChatarraAmada.at(-10));
console.log(comidaChatarraAmada.at(-11));
console.log(comidaChatarraAmada.at(18));
