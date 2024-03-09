// Función para mostrar la imagen correspondiente al botón presionado
function mostrarImagen(nombreImagen, texto) {
  var imagen = document.getElementById('imagen');
  imagen.src = 'img/' + nombreImagen + '.jpeg';

  // Mostrar el texto correspondiente
  var textoImagen = document.getElementById('texto-imagen');
  textoImagen.textContent = texto;

  // Cambiar el cursor cuando se coloca sobre la imagen
  imagen.addEventListener('mouseover', function() {
    document.body.style.cursor = 'url("img/cursor-imagen.png"), auto';
  });

  // Restablecer el cursor cuando se mueve fuera de la imagen
  imagen.addEventListener('mouseout', function() {
    document.body.style.cursor = 'default';
  });
}







