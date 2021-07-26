<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- estilos css -->
    <link rel="stylesheet" href="assets/css/Estilos_registro.css">
    <!-- animation.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <!-- libreria alerts -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <title>Registro</title>
</head>

<body>
   <!--Inicio Formulario-Registro-->
   <div class="container animate__animated animate__bounceIn">
        <div class="container__img">
            <img src="assets/img/Img_logo.png" alt="logo vacly">
        </div>
        <!-- <div class="container__BotonAtras">
        <a href="indice.php"><img src="assets/img/Boton_atras.png" alt="img_botonAtras"></a>
        </div> -->
        <form action="" class="container__form">
            <input type="Email" placeholder="Email" id="email">
            <input type="text" placeholder="Nombre" id="nombre">
            <input type="number" min="1" max="20" placeholder ="Edad" id="edad">
            <input type="number" min="1" max="20" placeholder ="Comuna" id="comuna">
            <select id="vacunas">
                <option disabled selected class="selected">Vacuna</option>
                <option id="V1" >BioNTech, Pfizer</option>
                <option id="V2">CoronaVac, Sinovac </option>
                <option id="V3">Johnson & Johnson, Janssen </option>
                <option id="V4">Moderna, NIAID </option>
                <option id="V5">Oxford, AstraZeneca</option>
                
            </select>

            <input type="button" value="ENTRAR" onclick="validarUsuario()">
            <span class="container__form-span">¿Eres administrador? <a href="loginAdministrador.php">Iniciar sesion</a></span>
        </form>
        
        </div>
        
    <!--Fin Formulario-Registro--->

</body>
<!-- codigo js -->
<script src="assets/js/verificacion.js"></script>

</html>