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

document.getElementById("desplegable1").addEventListener("change", function() {
    var desplegable2 = document.getElementById("desplegable2");
    var desplegable3 = document.getElementById("desplegable3");
    if (this.value !== "") {
        desplegable2.disabled = false;
        desplegable3.disabled = false;
    } else {
        desplegable2.disabled = true;
        desplegable3.disabled = true;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const selectorHuerto = document.getElementById('huerto');
    const selectorSensor = document.getElementById('sensor');
    const sensorLabel = document.getElementById('sensorLabel');

    // Ocultar el selector de sensor y su etiqueta por defecto
    selectorSensor.style.display = 'none';
    sensorLabel.style.display = 'none';

    // Evento para activar el selector de sensor cuando se seleccione un huerto
    selectorHuerto.addEventListener('change', function() {
        // Mostrar el selector de sensor y su etiqueta cuando se seleccione un huerto
        selectorSensor.style.display = 'block';
        sensorLabel.style.display = 'block';
    });

    // Resto del código para manejar el selector de tiempo y los controles de alerta
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Carga el JSON de usuarios
    fetch("data/usuarios.json")
        .then(response => response.json())
        .then(data => {
            // Obtén el primer usuario del JSON
            const usuario = data.usuarios[0];
            
            // Crea un elemento de texto con el nombre de usuario y su rol
            const usuarioTexto = document.createElement("p");
            usuarioTexto.textContent = `Bienvenido, ${usuario.nombre} (${usuario.rol})`;
            
            // Agrega el texto del usuario al menú
            const menu = document.getElementById("menu");
            const botonCerrar = document.getElementById("boton-cerrar");
            menu.insertBefore(usuarioTexto, botonCerrar);
        })
        .catch(error => console.error("Error al cargar el JSON de usuarios:", error));
});
