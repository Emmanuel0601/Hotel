$(document).ready(function() {
    $("#diaEntrada").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0,
        onSelect: function(selectedDate) {
            $("#diaSalida").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#diaSalida").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0,
        onSelect: function(selectedDate) {
            $("#diaEntrada").datepicker("option", "maxDate", selectedDate);
        }
    });
});

    document.getElementById('hospedajeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

            // Obtiene los valores de los campos
            var cliente = document.getElementById('Cliente').value;
            var diaEntrada = document.getElementById('diaEntrada').value;
            var diaSalida = document.getElementById('diaSalida').value;
            var cantidadAdultos = parseInt(document.getElementById('cantidadAdultos').value);
            var cantidadNinos = parseInt(document.getElementById('cantidadNinos').value);

            var fechaEntrada = new Date(diaEntrada);
            var fechaSalida = new Date(diaSalida);
            var unDia = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
            var diffDias = Math.round(Math.abs((fechaSalida - fechaEntrada) / unDia));
            var precioAdultos = 2500;
            var precioNinos = 1800;
            var subtotalAdultos = cantidadAdultos * precioAdultos * diffDias;
            var subtotalNinos = cantidadNinos * precioNinos * diffDias;
            var subtotalTotal = subtotalAdultos + subtotalNinos;
            var descuento = subtotalTotal > 15000 ? subtotalTotal * 0.30 : 0;
            var total_con_descu = subtotalTotal - descuento;
            var itbis = subtotalTotal * 0.18;
            var totalGeneral = subtotalTotal + itbis - descuento;

            // Muestra los resultados en la página
            var resultadoHTML = `
                <h2>Resultado del cálculo:</h2>
                <p>Nombre de la pagina: Hospeda Fácil</p>
                <p>Nombre del Huesped: ${cliente}</P>
                <p>Cantidad de noches: ${diffDias}</p>
                <p>Cantidad de adultos: ${cantidadAdultos}</p>
                <p>Precio por adultos: $${precioAdultos}</p>
            `;
            if (cantidadNinos > 0) {
                resultadoHTML += `
                    <p>Cantidad de niños: ${cantidadNinos}</p>
                    <p>Precio por niños: $${precioNinos}</p>
                    <p>Subtotal en pesos de niños: $${subtotalNinos}</p>
                `;
            }
            resultadoHTML += `
                <p>Subtotal en pesos de adultos: $${subtotalAdultos}</p>
                <p>Subtotal por noche de toda la habitación: $${subtotalTotal}</p>
                <p>Total por la habitación en las noches seleccionadas: $${subtotalTotal}</p>
            `;
            if (descuento > 0) {
                resultadoHTML += `
                    <p>Descuento (30%): $${descuento}</p>
                    <p>Subtotal con descuento: $${total_con_descu}</p>
                `;
            }
            resultadoHTML += `
                <p>ITBIS (18%): $${itbis}</p>
                <p>Total general: $${totalGeneral}</p>
            `;
            document.getElementById('resultado').innerHTML = resultadoHTML;
        });