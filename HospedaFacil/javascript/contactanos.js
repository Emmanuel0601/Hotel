$(document).ready(function() {
    $("#contactoForm").submit(function(event) {
        event.preventDefault();
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var mensaje = $("#mensaje").val();

        if(nombre && email && mensaje) {
            $("#resultado").html("<p>Gracias por contactarnos, " + nombre + ". Te responderemos a la brevedad.</p>");
        } else {
            $("#resultado").html("<p>Por favor, completa todos los campos.</p>");
        }
    });
});
