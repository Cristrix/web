$(function () {
    $(".draggable").draggable({
        revert: "invalid"
    });

    $(".draggable").droppable({
        drop: function (event, ui) {
            var dragId = $(ui.draggable).attr("data-num");
            var dropId = $(this).attr("data-num");
            if ((dragId === "1" && dropId === "2") || (dragId === "2" && dropId === "1")) {
                // Ocultar todas las imágenes con data-num="1"
                $("[data-num='1']").hide();
                // Mostrar la tercera imagen
                $("#imagen3").show();
                // Ocultar la imagen 2 cuando cualquier imagen 1 la choque
                $("#imagen2").hide();
                // Mostrar el botón solo cuando se cumple la condición
                $("#miBoton").show();
            }
        }
    });

    // Manejar el clic del botón
    $("#miBoton").click(function() {
        // Redirigir a otra página
        window.location.href = "fcigoto.html";
    });
});






