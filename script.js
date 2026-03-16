function FormatearNombre() {
    let nombre = document.getElementById("NombreReset").value;
    let Corregido = (nombre.slice(0, 1).toUpperCase()) + (nombre.slice(1).toLowerCase());
    let Respuesta = document.getElementById("NombreFormateado");
    Respuesta.innerHTML = Corregido;
}

function ContarLetras() {
    let ContarLetras = document.getElementById("ContarLetras").value;
    let letrasSinEspacios = ContarLetras.replace(" ", "");
    let cantidadLetras = letrasSinEspacios.length;
    let Respuesta = document.getElementById("ContadorLetras");
    Respuesta.innerHTML = cantidadLetras;
}

function NumeroMayor(numeros) {
    if (numeros === null) {
        let numeros = document.getElementById("NumeroMayor").value;
    }
    let listaNumeros = (numeros.split(","));
    let numeroMayor = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > numeroMayor) {
            numeroMayor = listaNumeros[i];
        }

    }
    console.log("El número mayor es: " + numeroMayor);
    return numeroMayor;
}

function ValidarPassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres.");
        return false;
    } else if (/\d/.test(password) === false) {
        console.log("La contraseña debe contener al menos un número.");
        return false;
    } else {
        console.log("Contraseña válida.");
        return true;
    }
}

function SumarArray() {
    let numeros = document.getElementById("array").value;
    let array = numeros.split(',')
    let sum = 0;
    array.forEach(num => sum += parseFloat(num) || 0);
    let Respuesta = document.getElementById("SumarArray");
    Respuesta.innerHTML = sum;

}

function MayorNumero() {
    let numeros = document.getElementById("numeros").value;
    let numeroMayor = NumeroMayor(numeros);
    console.log(numeroMayor);
    Respuesta.innerHTML = numeroMayor;
}

function FiltrarPares() {
    let numeros = document.getElementById("arrayPares").value;
    let array = numeros.split(',')
    let pares = array.filter(num => parseInt(num) % 2 === 0);
    let Respuesta = document.getElementById("FiltrarPares");
    Respuesta.innerHTML = pares;
}
function MostrarDescripcion() {
    const usuario = {
        nombre: "Ana",
        edad: 20,
        activo: false
    }
    let frase = "";
    frase = usuario.nombre + " tiene " + usuario.edad + " años";
    let Respuesta = document.getElementById("DescripcionUsuario");
    Respuesta.innerHTML = frase;
}

function ActivarUsuario(usuario) {
    if (usuario === null) {
        let nombre = document.getElementById("usuario");

    }
    usuario.activo = true;
    console.log(usuario.activo);
}

function CalcularPrecio() {
    const productos = [

        { nombre: "Mouse", precio: 10 },

        { nombre: "Teclado", precio: 25 },

        { nombre: "Monitor", precio: 200 }

    ]
    let total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let Respuesta = document.getElementById("CalcularPrecio");
    Respuesta.innerHTML = total;
}

function MostrarNombres() {
    const usuarios = [

        { nombre: "Ana", edad: 17 },

        { nombre: "Juan", edad: 25 },

        { nombre: "Pedro", edad: 30 }

    ]
    const resultadoEsperado = usuarios.map(usua => usua.nombre);
    let Respuesta = document.getElementById("MostrarNombres");
    Respuesta.innerHTML = resultadoEsperado;
}

function FiltrarMayores() {
 const usuarios = [

        { nombre: "Ana", edad: 17 },

        { nombre: "Juan", edad: 25 },

        { nombre: "Pedro", edad: 30 }

    ]
    let usuariosMayores = usuarios.filter(usua => usua.edad >= 18);
    const resultadoEsperado = usuariosMayores.map(usua => usua.nombre);                 
    let Respuesta = document.getElementById("FiltrarMayores");
    Respuesta.innerHTML = resultadoEsperado;
}

function reduceEdad() {
    const usuarios = [

        { nombre: "Ana", edad: 17 },

        { nombre: "Juan", edad: 25 },

        { nombre: "Pedro", edad: 30 }

    ]
    const resultadoEsperado = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);
    let Respuesta = document.getElementById("reduceEdad");
    Respuesta.innerHTML = resultadoEsperado;
}