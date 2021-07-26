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
    if(email=="root" && pass=="Root"){
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
  if (email=="" || nombre=="" || edad=="" || comuna=="" || vacunas==""){
    swal({
      title: "Error!",
      text: "Verifica si los Campos estan llenos y vuelve a intentarlo.!",
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