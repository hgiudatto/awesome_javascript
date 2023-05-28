// async / await

// ! async debe estar presente; SIEMPRE devuelve una promesa
// await espera hasta que la promesa sea resuelta
// error handling - bloque try/catch

const ejemplo = async () => {
  return "Hola async/await";
};
//console.log(ejemplo);

const unaFuncion = async () => {
  const resultado = await ejemplo();
  console.log(`resultado: ${resultado}`);
};
unaFuncion();

// https://youtu.be/iHrVo5fvmzE?t=281
// Javascript Nuggets - Async / Await => Coding Addict
const usuarios = [
  { id: 1, nombre: "pedro" },
  { id: 2, nombre: "susana" },
  { id: 3, nombre: "lara" },
];

const articulos = [
  { usId: 1, articulos: ["uno", "dos", "tres"] },
  { usId: 2, articulos: ["cuatro", "cinco"] },
  { usId: 3, articulos: ["seis", "siete", "ocho", "nueve"] },
];

const getUsuario = (nombre) => {
  return new Promise((resolve, reject) => {
    const usuario = usuarios.find((u) => {
      return u.nombre === nombre;
    });

    if (usuario) {
      return resolve(usuario);
    } else {
      reject(`No existe el usuario con nombre: ${nombre}`);
    }
  });
};

const getArticulos = (idUsuario) => {
  return new Promise((resolve, reject) => {
    const artsUsuario = articulos.find((u) => u.usId === idUsuario);

    if (artsUsuario) {
      return resolve(artsUsuario.articulos);
    } else {
      reject(`ID equivocado: ${idUsuario}`);
    }
  });
};

getUsuario("susana")
  .then((usuario) => getArticulos(usuario.id)) // Cuando tenemos muchas operaciones async
  .then((arts) => console.log(`articulos: `, arts)) // tenemos que empezar a encadenar los "thens"...
  .catch((err) => console.log(`ocurrió un error: ${err}`));

// ! es en este escenario donde aparece async/await
/* const getData = async () => {
  const usuario = await getUsuario("pedro"); // espera que se cumpla la promesa
  console.log(`usuario hallado al termino de la busqueda: `, usuario);
  if (usuario) {
    const articulos = await getArticulos(usuario.id); // espera que se cumpla la promesa
    console.log(`articulos: `, articulos);
  }
};
getData(); */

// try/catch => evitamos validaciones
