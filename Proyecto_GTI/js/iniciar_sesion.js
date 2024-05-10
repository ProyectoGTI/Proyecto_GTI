const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');

botonMenu.addEventListener('click', function() {
    menu.style.right = (menu.style.right === '0px') ? '-310px' : '0px';
});

  document.getElementById("boton-cerrar").addEventListener("click", function() {
    document.getElementById("menu").style.right = "-310px";
  });

  document.getElementById("logo").addEventListener("click", function () {
    location.reload();
});


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      fetch("data/usuarios.json")
      .then(response => response.json())
      .then(data => {
          const usuarios = data.usuarios; // Accede al arreglo de usuarios dentro del objeto JSON
          const user = usuarios.find(user => user.email === email && user.password === password);
          if (user) {
              // Redirigir al usuario a otra página
              window.location.href = "monitorizacion.html";
          } else {
              alert("Correo electrónico o contraseña incorrectos");
          }
      })
      .catch(error => console.error("Error al cargar los usuarios:", error));
  });
});



