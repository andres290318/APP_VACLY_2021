<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/Estilos_registro.css">
    <!-- animaciones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <!-- libreria alerts -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <title>Login</title>
</head>

<body>
    <!--Inicio Formulario-login-->
    <div class="container animate__animated animate__bounceIn">
        <div class="container__img">
            <img src="assets/img/Img_logo.png" alt="logo vacly">
        </div>
        <!-- <div class="container__BotonAtras">
        <a href="indice.php"><img src="assets/img/Boton_atras.png" alt="img_botonAtras"></a>
        </div> -->
        <form action="" class="container__form">
        <input type="Email" placeholder="Email" id="emailAdmit">
            <input type="password" placeholder="Contraseña" id="passWordAdmit">
            <input type="button" value="Iniciar sesion" onclick="validar()">
            <span class="container__form-span">¿Eres un usuario? <a href="loginUsuario.php">Ingresar</a></span>
        </form>
        </div>
    
    <!--Fin Formulario-login-->

   
</body>
<!-- codigo js -->
<script src="assets/js/verificacion.js"></script>


</html>