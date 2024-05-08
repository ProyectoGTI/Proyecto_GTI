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

