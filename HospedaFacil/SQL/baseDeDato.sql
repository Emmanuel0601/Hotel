-- Active: 1708669982119@@127.0.0.1@3306@hoteles
-- Crear la base de datos

DROP DATABASE IF EXISTS `hoteles`;
CREATE DATABASE hoteles;
-- Seleccionar la base de datos
USE hoteles;

-- Crear la tabla de hoteles

-- DROP TABLE IF EXISTS `hoteles`;
-- CREATE TABLE hoteles (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   nombre VARCHAR(255) NOT NULL,
--   descripcion TEXT NOT NULL,
--   imagen MEDIUMBLOB NOT NULL,
--   estrellas INT NOT NULL,
--   ubicacion VARCHAR(255) NOT NULL,
--   telefono VARCHAR(20) NOT NULL,
--   email VARCHAR(255) NOT NULL
-- );

-- Crear la tabla de habitaciones

DROP TABLE IF EXISTS `habitaciones`;
CREATE TABLE habitaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipoHabitacion VARCHAR(50) NOT NULL,
    numeroHabitacion VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    imagen MEDIUMBLOB NOT NULL
);

-- Crear la tabla de reservas
-- DROP TABLE IF EXISTS `reservas`;
-- CREATE TABLE reservas (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   id_hotel INT NOT NULL,
--   id_habitacion INT NOT NULL,
--   fecha_llegada DATE NOT NULL,
--   fecha_salida DATE NOT NULL,
--   nombre VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   FOREIGN KEY (id_hotel) REFERENCES hoteles(id),
--   FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id)
-- );

-- Crear la tabla de usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `pregunta_seguridad` varchar(100) NOT NULL,
  `respuesta_seguridad` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Crear la tabla de usuadmin
DROP TABLE IF EXISTS `usuadmin`;
CREATE TABLE usuadmin(
  id INT PRIMARY KEY AUTO_INCREMENT,
  correo VARCHAR(100) NOT NULL,
  contrasena varchar(50) NOT NULL
);