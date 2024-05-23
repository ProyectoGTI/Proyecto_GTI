function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var nombreUsuario = document.getElementById("nombre_de_usuario").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repetirPassword = document.getElementById("repetir_password").value;

    if (nombre === "" || apellidos === "" || nombreUsuario === "" || email === "" || password === "" || repetirPassword === "") {
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
        window.location.href = "producto.html";
    }
}