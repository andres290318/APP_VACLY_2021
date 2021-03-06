//funcion para pasar de pagina "solo se activa cuando se llena el formulario"
//usuario
function timeUser() {
  window.open("introduccion1.html",'_top')
}

function timeAdmit() {
  window.open("indiceAdministrador.html",'_top')
}

function validar(){
    let email=document.getElementById("emailAdmit").value;
    let pass=document.getElementById("passWordAdmit").value;

    //validamos
    if(email=="UserRoot" && pass=="UserRoot"){
        swal({
            title: "Bienvenido!",
            text: "Usuario correcto!",
            icon: "success"
          });
          setTimeout("timeAdmit()",1300);
        

    } else if (email=="" || pass==""){
          swal({
            title: "Error!",
            text: "Verifica si los Campos estan llenos y vuelve a intentarlo.!",
            icon: "warning",
            button: "Ok",
          });
        

    }else{
        swal({
            title: "Acceso denegado!",
            text: "Comprueba el Email o la Contraseña y vuelve a intentarlo.!",
            icon: "error",
            button: "Ok",
          });
        
    }
}
//verificamos los datos del usuario
function validarUsuario(){
  let email = document.getElementById("email").value;
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let comuna = document.getElementById("comuna").value;
  let vacunas = document.getElementById("vacunas").value;
  
  //verificamos que los campos esten llenos 
  if (email=="" || nombre=="" || edad=="" || comuna=="Comuna" || vacunas=="Vacuna"){
    swal({
      title: "Error!",
      text: "Verifica que todos los Campos esten llenos y vuelve a intentarlo!",
      icon: "warning",
      button: "Ok",
    });
    
   
    
  } 
  else{
    swal({
      title: "Bienvenido!",
      text: "Gracias por tu ayuda!",
      icon: "success"
    });
    setTimeout("timeUser()",1300);

  }

}

// creamos una funcion para la barra de navegacion admitmapa
function navbarAdmitMapa(){
  swal({
    title: "Mapa!",
    text: "En esta sección podras ver las zonas donde hay mas gente vacunada de una vacuna en específico.",
    icon: "info",
    button: "Ok",
  });
}
// creamos una funcion para la barra de navegacion del indice del admit
function navbarAdmitIndice(){
  swal({
    title: "ADMINISTRADOR",
    text: "Como administrador podras hacer un seguimiento mucho mas preciso acerca de los sintomas mas comunes despues de las diferentes vacunas, el rango de edad de las personas ya vacunadas y podras consultar un mapa donde se mostraran las zonas donde se encuentran mas personas vacunadas en la ciudad de Medellin.",
    icon: "info",
    button: "Ok",
  });
}
