const alumnos = ['Dario'];
let nombre = "";
let nombre_eliminar = "";
let opcion = "";
let voto = "";

const agregarAlumno = (nombreAlumno) => {
    alumnos.push(nombreAlumno);
    console.log("Alumno agregado: "+nombreAlumno);
}

const mostrarAlumnos = () => {
    alert(alumnos.toString());
}

const eliminarAlumno = (nombre) => {
    const indexToSplice = alumnos.indexOf(nombre_eliminar);
    const nombreEliminarLength = nombre_eliminar.length;
    if (indexToSplice > -1) {
        alumnos.splice(indexToSplice, 1);
    } else {
        alert("El nombre ingresado no corresponde a ningun alumno del curso");
    }    
}

alert("Bienvenido al ABM de Alumnos!!");

for (let index = 0; index < 10; index++) {
    opcion = prompt("Deseas agregar = A, mostrar = M, eliminar = E o salir = S ?");

    if (opcion == "A") {
        nombre = prompt("Ingresa el nombre del alumno a agregar al curso:");
        agregarAlumno(nombre);
        opcion = prompt("Por favor ingresa una de: A, M, E o S");
        if (opcion == "A") {
            agregarAlumno(prompt("Ingresa el nombre del alumno a eliminar"));
            opcion = prompt("Por favor ingresa una de: A, M, E o S");
        } else if(opcion == "M") {
            mostrarAlumnos();
            opcion = prompt("Por favor ingresa una de: A, M, E o S");
        } else if(opcion == "E") {
            eliminarAlumno(prompt("Ingresa el nombre del alumno a eliminar"));
            opcion = prompt("Por favor ingresa una de: A, M, E o S");
        }
    } else if(opcion == "M") {
        if (alumnos.length == 0) {
            alert("Aun no hay alumnos en el curso.");
        } else {
            alert("Los alumnos del curso: "+alumnos.toString());
        }
    } else if(opcion == "E") {
        nombre_eliminar = prompt("Ingresa el nombre del alumno a eliminar del curso:");
        const indexToSplice = alumnos.indexOf(nombre_eliminar);
        const continua = "N";
        if(Object.keys(alumnos).length == 1) {
            alert("Si eliminas el alumno indicado el curso quedara vacío");
            continua = prompt("Elimino = S, No elimino = N");
            if (continua == "S") {
                alumnos.splice(indexToSplice, 1);        
            } else {
                alert("Los alumnos del curso: "+alumnos.toString());
            }
        } else if (indexToSplice > -1) {
            alumnos.splice(indexToSplice, 1);
        } else {
            alert("El nombre ingresado no corresponde a ningun alumno del curso");
            opcion = prompt("Por favor ingresa una de: A, M, E o S");
        }
    } else if(opcion == "S") {
        alert("Muchas gracias por haber participado!!");
        voto = prompt("Solo 1 minuto más de tu atencion! Por favor indica cuan satisfecho te encuentras con la app: (10 = Muy satisfecho, 5 = Satisfecho, 0 = Nada satisfecho) ");
        console.log("Voto: "+voto);    
    } else {
        opcion = prompt("La opcion ingresada no es correcta. Por favor ingresa una de: A, M, E o S");
    }
}

