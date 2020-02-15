//Declaración de variables
var nombreUsuario = prompt(`Ingrese su nombre de usuario`)
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
var codigoAcceso = "abc123";


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
iniciarSesion();
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}



//Funciones que tenes que completar

function sumarALaCuenta(valor){
        saldoCuenta = saldoCuenta + valor;
        actualizarSaldoEnPantalla();
}

function restarALaCuenta(valor){
        saldoCuenta = saldoCuenta - valor;
        actualizarSaldoEnPantalla();
}
function validacionTipoDeDato(valorUsuario){
    var valorUsuario;
        if (valorUsuario === NaN || valorUsuario === undefined || valorUsuario <= 0){
            alert(`Has ingresado un valor incorrecto. Intenta nuevamente.`)
        }
        else {
            return true;
        }
}

function cambiarLimiteDeExtraccion() {
    var usuario = prompt(`Por favor ingrese su nuevo límite de extracción:`);
    limiteExtraccion = parseInt(usuario);
    validacionTipoDeDato(usuario);
        if (limiteExtraccion > 0){
        alert(`Su nuevo límite de extracción es: $${usuario}`);
        actualizarLimiteEnPantalla();
        }
        else {
            return false;
        }
}

function extraerDinero() {
    var extraccionUsuario = parseInt(prompt(`Ingrese el valor que desea extraer`));
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta - extraccionUsuario;
        if (extraccionUsuario > saldoCuenta){
            alert(`No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.`);
        }
        else if(extraccionUsuario > limiteExtraccion){
             alert(`La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.`);
        }
        else if (extraccionUsuario%100 !== 0){
            alert(`Has ingresado un valor incorrecto. Sólo puedes extraer billetes de $100.`);
        }
        else{
            restarALaCuenta(extraccionUsuario);
            alert(`Has retirado: $${extraccionUsuario}.\nSaldo anterior: $${saldoAnterior}\nSaldo actual: $${saldoActual}`);
        }
}

function depositarDinero() {
    var depositoUsuario = parseInt(prompt(`Ingrese el valor a depositar`));
    var saldoAnterior = saldoCuenta;
    var saldoActual = saldoCuenta + depositoUsuario;
        if (depositoUsuario > 0){
            sumarALaCuenta(depositoUsuario);
            alert(`Has depositado: $${depositoUsuario}.\nSaldo anterior: $${saldoAnterior}\nSaldo actual: $${saldoActual}`);
        }
        else{
            validacionTipoDeDato();
        }
}

function pagarServicio() {
    var usuario = prompt(`Ingrese el número que corresponda con el servicio que queres pagar:\n1-Agua.\n2-Luz.\n3-Teléfono.\n4-Internet.`);
    switch (usuario){
            case "1":
                if (agua < saldoCuenta){
                    alert(`Has pagado el servicio Agua.\nSaldo anterior: $${saldoCuenta}\nDinero descontado: $${agua}\nSaldo actual: $${saldoCuenta-agua} `);
                    saldoCuenta = saldoCuenta - agua;
                    actualizarSaldoEnPantalla();
                }
                else {
                    alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`)
                }
                break;
            case "2":
                    if (telefono < saldoCuenta){
                        alert(`Has pagado el servicio Teléfono.\nSaldo anterior: $${saldoCuenta}\nDinero descontado: $${telefono}\nSaldo actual: $${saldoCuenta-telefono} `);
                        saldoCuenta = saldoCuenta - telefono;
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`)
                    }
                    break;
            case "3":
                    if (luz < saldoCuenta){
                        alert(`Has pagado el servicio Agua.\nSaldo anterior: $${saldoCuenta}\nDinero descontado: $${luz}\nSaldo actual: $${saldoCuenta-luz} `);
                        saldoCuenta = saldoCuenta - luz;
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`)
                    }
                    break;
            case "4":
                    if (internet < saldoCuenta){
                        alert(`Has pagado el servicio Agua.\nSaldo anterior: $${saldoCuenta}\nDinero descontado: $${internet}\nSaldo actual: $${saldoCuenta-internet} `);
                        saldoCuenta = saldoCuenta - internet;
                        actualizarSaldoEnPantalla();
                    }
                    else {
                        alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`);
                    }
                    break;
            default:
                validacionTipoDeDato();
        }
}

function transferirDinero() {
    var usuario = parseInt(prompt(`Ingrese el monto que desea transferir.`));
    var saldoActual = saldoCuenta - usuario;
        if (usuario > saldoCuenta){
            alert(`No posee saldo suficiente para realizar esta operación.`)
        }
        else if (validacionTipoDeDato()){
            return true;
        }
        else{
            var cuenta = prompt(`Ingrese el número de cuenta al que desea transferir el dinero`);
                if (cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2){
                    restarALaCuenta(usuario);
                    alert(`Ha transferido $${usuario} a la cuenta ${cuenta}.\nSu saldo actual es: $${saldoActual}.`);
                }
                else {
                    alert(`Sólo puede transferir dinero a cuentas amigas.`);
                }
        }
}


function iniciarSesion() {
   var usuario = prompt(`Bienvenid@ ${nombreUsuario}, ingrese su clave de acceso personal:`);
    if (validacionTipoDeDato(usuario === codigoAcceso)){
        alert(`Bienvenid@ ${nombreUsuario}! Ya puedes comenzar a operar.`);
    }
    else {
        alert(`Código incorrecto. Tu dinero ha sido retenido por razones de seguridad.`);
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}