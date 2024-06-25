<?php
include 'conexion.php';

// Recibir datos del formulario
$tipoHabitacion = $_POST['tipoHabitacion'];
$numeroHabitacion = $_POST['numeroHabitacion'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];

// Procesar la imagen y convertirla a formato base64
$imagenTmp = $_FILES['imagen']['tmp_name'];
$imagenData = base64_encode(file_get_contents($imagenTmp));

// Insertar datos en la base de datos
$sql = "INSERT INTO habitaciones (tipoHabitacion, numeroHabitacion, descripcion, precio, imagen) VALUES ('$tipoHabitacion', '$numeroHabitacion', '$descripcion', '$precio', '$imagenData')";

if ($conn->query($sql) === TRUE) {
    echo '<script>';
    echo 'alert("Producto agregado con éxito");
              setTimeout((alert) => {
              window.location = "../HTML/admin.html";
              }, 0);';
    echo '</script>';
} else {
    echo "Error al agregar el producto: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
