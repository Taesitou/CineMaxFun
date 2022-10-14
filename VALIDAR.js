
const Letra_mayus = /[A-Z]/; //expresion regular mayusculas
const Num = /[0-9]/; // expresion regular numeros
const soloNum = /^[0-9]*$/; // expresion regular de SOLO numeros de principio a fin
const soloLetras = /^[a-zA-Z]+$/; // expresion regular de SOLO letras
const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // expresion regular mail

function validacionLogIn(){ // valida que la contraseña tenga por lo menos una mayuscula y un numero.
    let res = true;
    let x = document.forms["LogIn"]["password01"].value; // levanta el value de la contraseña
    let w = document.forms["LogIn"]["email"].value; // levanta el value del mail
    let z = x.match(Letra_mayus); // busca mayusculas
    let c = x.match(Num); // busca numero
    let r = w.match(mail); // busca formato mail

    if(z == null) { // si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("La contraseña debe tener al menos una letra mayuscula");
        res = false;
    }

    if (c == null) {// si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("La contraseña debe tener al menos un numero");
        res = false;
    }

    if (r == null){ // si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("El formato del mail no es correcto");
        res = false;
    }

    return res;
}

function validacionReg(){ // valida que la contraseña tenga por lo meons una mayuscula y un numero.Valida que las contraseñas sean iguales.Valida el num de telefono
    let res = true;
    let x = document.forms["Regis"]["password01"].value; // levanta el value de la contraseña
    let q = document.forms["Regis"]["passwordR"].value; // levanta el value de la contraseña repetida
    let w = document.forms["Regis"]["email"].value; // levanta el value del mail
    let z = x.match(Letra_mayus); // busca mayusculas
    let c = x.match(Num); // busca numero
    let r = w.match(mail); // busca formato mail
    let nombre = document.getElementById("nombre").value
    
    if (soloLetras.test(nombre) == false)  {
        alert("El nombre y apellido debe de ser unicamente letras");
        res = false;
    }

    if(z == null) { // si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("La contraseña debe tener al menos una letra mayuscula");
        res = false;
    }

    if (c == null) {// si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("La contraseña debe tener al menos un numero");
        res = false;
    }

    if(x != q){  // valida que las contraseñas coincidan
        alert("Las contraseñas no coinciden");
        res = false;
    }

    if (r == null){ // si .match retorna null(no encuentra), sale el msj y se retorna false
        alert("El formato del mail no es correcto");
        res = false;
    }
    return res;
}


function validarCheckout(){
    let res = true;
    let nombreApellido = document.getElementById("fname").value;
    let email = document.getElementById("email")

    if (soloLetras.test(nombreApellido) == false){
        alert("El nombre y apellido deben ser unicamente letras.");
        res = false;
    }

    return res;
}

function validar(){
    let res = true;
    let fnombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    if (soloLetras.test(fnombre) == false)  {
        alert("El nombre y apellido debe de ser unicamente letras");
        res = false;
    }
    return res;
}