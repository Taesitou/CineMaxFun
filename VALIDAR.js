var form = document.getElementById("formulario");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var mensajesError = [];

        if(nombre.value === null || nombre.value === ""){
            mensajesError.push("Ingresa tu nombre");
        }

        if(contraseña.value === null || contraseña.value === ""){
            mensajesError.push("Ingresa tu contrasena");
        }

        error.innerHTML = mensajesError.join(",");

    });