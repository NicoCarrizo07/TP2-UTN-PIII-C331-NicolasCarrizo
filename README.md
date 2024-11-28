Descripción de la API:
Esta API permite gestionar equipos de fútbol y presidentes de clubes. Con ella, puedes realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre dos modelos principales: equipos y presidentes .

Funcionalidades:
Equipos : Permite registrar y gestionar información sobre equipos de fútbol, ​​incluyendo su nombre, categoría, país, estadio y estado.
Presidentes : Gestiona los presidentes de los equipos, permitiéndole almacenar su nombre y apellido.
La API utiliza Node.js , Express.js , Sequelize y MySQL para proporcionar un acceso rapido y sencillo a los datos de los equipos y presidentes en una base de datos MySQL.

Pasos para iniciar e instalar dependecias de Node.js (se debe instalar Node.js previamente): 
npm init -y
npm install express cors sequelize mysql2

Base de datos:

crear base de datos:
CREATE DATABASE equiposdefutbol;

create e inserts de la tabla equipos:

CREATE TABLE `equipos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `estadio` varchar(240) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3

INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('1', 'Lanus', 'Primera', 'Arg', 'La Fortaleza', 'A');
INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('2', 'Liverpool', 'Primera', 'Eng', 'Anfield', 'A');
INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('3', 'Quilmes', 'Segunda', 'Arg', 'Centenario Ciudad de Quilmes', 'A');
INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('4', 'Manchester United', 'Primera', 'Eng', 'Old Trafford', 'A');
INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('5', 'Estudiantes', 'Primera', 'Arg', 'Uno', 'A');
INSERT INTO `equiposdefutbol`.`equipos` (`id`, `nombre`, `categoria`, `pais`, `estadio`, `estado`) VALUES ('6', 'River', 'Primera', 'Arg', 'Mas Monumental', 'A');

create e inserts de la tabla presidentes:

CREATE TABLE `presidentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3

INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('1', 'Luis', 'Chebel');
INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('2', 'José', 'Palma');
INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('3', 'Mateo', 'Magadán');
INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('4', 'Joel', 'Glazer');
INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('5', 'Sebastián', 'Verón');
INSERT INTO `equiposdefutbol`.`presidentes` (`id`, `name`, `surname`) VALUES ('6', 'Jorge', 'Brito');
