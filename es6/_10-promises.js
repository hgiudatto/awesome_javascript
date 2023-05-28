// Promise => MDN Web Docs: El objeto Promise representa la eventual culminación
// (o falla) de una operación asincrona y su valor resultante.

// Objeto que que retorna un valor el cual esperamos recibir en el futuro pero no ahora.
// ticket - lapso de tiempo - pedido en mano => Pending, Rejected, Fulfilled
// console
const promise1 = new Promise((resolve, reject) => {});
console.log(promise);

/* let stocks = {
  Frutas: ["frutilla", "uva", "banana", "manzana"],
  liquidos: ["agua", "hielo", "crema"],
  contenedor: ["cucurucho", "vaso", "palito"],
  adicionales: ["chocolate", "mani"],
};

let tiendaAbierta = true;

const orden = (tiempo, trabajo) => {
  return new Promise((resolve, reject) => {
    if (tiendaAbierta) {
      setTimeout(() => {
        resolve(trabajo());
      }, tiempo);
    } else {
      reject(console.log("la tienda esta cerrada"));
    }
  });
};

orden(2000, () => console.log(`fruta elegida: ${stocks.Frutas[0]}`))
  .then(() => {
    return orden(0, () => console.log("Comenzó la producción"));
  })
  .then(() => {
    return orden(2000, () => console.log("fruta cortada"));
  })
  .then(() => {
    return orden(1000, () => {
      console.log(
        `base elegida: ${stocks.liquidos[0]} y ${stocks.liquidos[1]}`
      );
    });
  })
  .then(() => {
    return orden(1000, () => {
      console.log("encender la maquina");
    });
  })
  .then(() => {
    return orden(2000, () => {
      console.log(`colocar helado en ${stocks.contenedor[0]}`);
    });
  })
  .then(() => {
    return orden(3000, () => {
      console.log(`añadir topping elegido: ${stocks.adicionales[0]}`);
    });
  })
  .then(() => {
    return orden(1000, () => {
      console.log(`el helado ha sido servido.`);
    });
  })
  .catch(() => {
    console.log("El cliente se retira.");
  })
  .finally(() => {
    console.log(`finalizó el día, tienda cerrada.`);
  }); */
