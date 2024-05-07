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

// // Suponiendo que aquí se realiza el proceso de inicio de sesión y se guarda el estado de inicio de sesión en una variable
// let isLoggedIn = false; // Variable que indica si el usuario ha iniciado sesión

// // Evento para iniciar sesión
// document.getElementById("iniciar-sesion-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evitar que el formulario se envíe
//     // Aquí se podría realizar la autenticación, y si es exitosa, cambiar el valor de isLoggedIn a true
//     isLoggedIn = true; // Cambiar el estado de inicio de sesión
//     actualizarMenu(); // Llamar a la función para actualizar el menú
// });

// // Función para actualizar el contenido del menú según el estado de inicio de sesión
// function actualizarMenu() {
//     const menuItemsContainer = document.getElementById("menu-items");
//     if (isLoggedIn) { // Si el usuario ha iniciado sesión
//         // Cambiar el contenido del menú
//         menuItemsContainer.innerHTML = `
//             <li><a href="#">Mi Perfil</a></li>
//             <li><a href="#">Mis Pedidos</a></li>
//             <li><a href="#">Configuración</a></li>
//             <li><a href="#">Cerrar Sesión</a></li>
//         `;
//     } else { // Si el usuario no ha iniciado sesión
//         // Restaurar el contenido del menú por defecto
//         menuItemsContainer.innerHTML = `
//             <li><a href="#">Iniciar Sesión/Registrarse</a></li>
//             <li><a href="#">Producto</a></li>
//             <li><a href="#">Acerca de Nosotros</a></li>
//             <li><a href="#">Contacto</a></li>
//         `;
//     }
// }

// // Llamar a la función para actualizar el menú al cargar la página
// actualizarMenu();
