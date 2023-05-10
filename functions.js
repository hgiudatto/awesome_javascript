alert("HOLA NUEVO SCRIPT!!");

// expresion
const cuadrado = function (n) {
    /* console.log("el cuadrado de: "+n+" = "+n*n); */
    return n * n;
}

let rtn_value = cuadrado(3);
console.log("Qué valor tiene la variable "+rtn_value);

// declaracion
function cubo (x) {
    return x*x*x;
}

console.log("El cubo de cinco: "+cubo(5));

const cuadradoArrow = (x) => { return x * x; }

console.log("Cuadrado con funcion flecha: "+cuadradoArrow(prompt("Ingrese un valor")));
