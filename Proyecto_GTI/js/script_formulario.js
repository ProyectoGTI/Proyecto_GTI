document.getElementById("opciones").addEventListener("change", function() {
    var seleccion = document.getElementById("opciones").value;
    document.getElementById("resultado").innerHTML = "Seleccionaste: " + seleccion;
  });
  