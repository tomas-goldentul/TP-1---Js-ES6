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

function NumeroMayor() {
    let numeros = document.getElementById("NumeroMayor").value;
    let listaNumeros = (numeros.split(","));
    let numeroMayor=0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > numeroMayor) {
            numeroMayor = listaNumeros[i];
        }
       
    }
    console.log("El número mayor es: " + numeroMayor);
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

function SumarArray(){
    let numeros = document.getElementById("array").value;
   let array =  numeros.split(',')
    let sum = 0;
     array.forEach(num => sum += parseFloat(num) || 0);
    console.log("La suma total es: " + sum);
}