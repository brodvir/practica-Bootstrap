
function validar(event){
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email")
    const email_verification = document.getElementById("email_verification")
    const edad = document.getElementById("edad")
    const password = document.getElementById("password")
    const provincia = document.getElementById("provincia")
    const terminos = document.getElementById("terminos")
    let mayus = 0
    let min = 0
    let num = 0
    let signo = 0
    let correcto =true
    
    if (nombre.value.length==0) {
        event.preventDefault();
        correcto=false;
        nombre.style.borderColor="red";
        document.getElementById("errorNombre").style.visibility="visible";
        event.preventDefault();
    }
    if (provincia.value.length==0) {
        event.preventDefault();
        correcto=false;
        provincia.style.borderColor="red";
        document.getElementById("errorProvincia").style.visibility="visible";
        event.preventDefault();
    }

    if (email.validity.typeMismatch) {
        correcto=false;
        email.style.borderColor="red";
        document.getElementById("errorEmail").style.visibility="visible";
      }
    if (email_verification.value!= email.value) {
        correcto=false;
        email_verification.style.borderColor="red";
        document.getElementById("errorSegundoEmail").style.visibility="visible";
    }

    if (isNaN(edad.value) || edad.value<18 || edad.value>120 ) {
        correcto=false;
        edad.style.borderColor="red";
        document.getElementById("errorEdad").style.visibility="visible";
    }

   
    for(var i = 0; i < password.value.length; i++){
        console.log(password.value[i])
        if(password.value[i]>= "A" && password.value[i]<= "Z"){
            mayus=1
        }
        if(password.value[i]>= "a" && password.value[i]<= "z"){
            min=1
        }
        if(password.value[i]>= 0 && password.value[i]<= 9){
            num=1
        }
        if(password.value[i]== "." || password.value[i]== "," || password.value[i]== ":" ){
            signo=1
        }
    }

    if (mayus < 1 || min < 1 || num < 1 || signo < 1 ) {
        correcto=false;
        edad.style.borderColor="red";
        document.getElementById("errorPassword").style.visibility="visible";
    }

    if (!terminos.checked) {
        correcto=false;
        terminos.style.borderColor="red";
        document.getElementById("errorTerminos").style.visibility="visible";
    }


    if (!correcto){
        document.getElementById("mensajeError").innerHTML="datos erróneos en el formulario";
     }

     return correcto


}

function quitarError(nodo,id){
    nodo.style.borderColor="lightgray";
    document.getElementById(id).style.visibility="hidden";
}




