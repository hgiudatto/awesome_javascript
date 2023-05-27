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
