function mostrarImagen(nombreImagen, texto) {
  var imagen = document.getElementById('imagen');
  imagen.src = 'img/' + nombreImagen + '.jpeg';

  var textoImagen = document.getElementById('texto-imagen');
  textoImagen.textContent = texto;
  textoImagen.style.display = 'block'; // Mostrar el texto directamente
}
