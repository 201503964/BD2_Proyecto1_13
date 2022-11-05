create database 
use Practica2;
CREATE TABLE `HABITACION` (
  `idHabitacion` int not null,
  `Habitacion` varchar(50),
  PRIMARY KEY (`idHabitacion`)
);
CREATE TABLE `LOG_Habitacion` (
`idHabitacion` int not NULL,
  `timestampx` varchar(100),
  `statusx` varchar(45),
  `Habitacion` varchar(100),
  FOREIGN KEY(`idHabitacion`) REFERENCES  `HABITACION`(`idHabitacion`)
);

drop table LOG_Habitacion
CREATE TABLE `PACIENTE` (
  `idPaciente` int not null,
  `edad` int not null,
  `genero` varchar(20),
  PRIMARY KEY (`idPaciente`)
);
CREATE TABLE `LOG_ACTIVIDAD` (
  `id_log_actividad` int AUTO_INCREMENT,
  `timestampx` varchar(100),
  `actividad` varchar(500),
  `PACIENTE_idPaciente` int not null,
  `HABITACION_idHabitacion` int not null,
  PRIMARY KEY (`id_log_actividad`),
  FOREIGN KEY(`PACIENTE_idPaciente`) REFERENCES  `PACIENTE`(`idPaciente`),
  FOREIGN KEY(`HABITACION_idHabitacion`) REFERENCES  `HABITACION`(`idHabitacion`)
);
 INSERT INTO LOG_ACTIVIDAD (timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion)
 SELECT timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion
 FROM LOG_ACTIVIDAD_Temporal           
 
CREATE TABLE `LOG_ACTIVIDAD_Temporal` (
  `timestampx` varchar(100),
  `actividad` varchar(500),
  `PACIENTE_idPaciente` int not null,
  `HABITACION_idHabitacion` int not null,
  `edad` int not null,
  `genero` varchar(20),
  `Habitacion` varchar(100)
);
CREATE TABLE `LOG_ACTIVIDAD_Temporal2` (
  `timestampx` varchar(100),
  `actividad` varchar(500),
  `PACIENTE_idPaciente` int not null,
  `HABITACION_idHabitacion` int not null
);
drop table LOG_ACTIVIDAD

select * from paciente
where idpaciente=111459
LOAD DATA INFILE 'C:\\Program Files\\MySQL\\Practica2\\Habitaciones.csv' 
INTO TABLE HABITACION
CHARACTER SET UTF8
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES;

LOAD DATA INFILE 'C:\\Program Files\\MySQL\\Practica2\\Pacientes.csv'
INTO TABLE PACIENTE
CHARACTER SET UTF8
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:\\Program Files\\MySQL\\Practica2\\LogHabitaciones.csv'
INTO TABLE log_Habitacion
CHARACTER SET UTF8
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:\\Program Files\\MySQL\\Practica2\\Logactividades1.csv'
INTO TABLE LOG_ACTIVIDAD_Temporal
CHARACTER SET UTF8
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
INSERT INTO LOG_ACTIVIDAD (timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion)
 SELECT timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion
 FROM LOG_ACTIVIDAD_Temporal;
LOAD DATA INFILE 'C:\\Program Files\\MySQL\\Practica2\\Logactividades2.csv'
INTO TABLE LOG_ACTIVIDAD_Temporal2
CHARACTER SET UTF8
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
INSERT INTO LOG_ACTIVIDAD (timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion)
 SELECT timestampx, actividad, PACIENTE_idPaciente, HABITACION_idHabitacion
 FROM LOG_ACTIVIDAD_Temporal2;
 
 
show variables like "secure_file_priv"
show variables like 'innodb_lock_wait_timeout';
SHOW GLOBAL VARIABLES LIKE 'local_infile';

set innodb_lock_wait_timeout=6000;
SET GLOBAL local_infile = true;
SET FOREIGN_KEY_CHECKS=0;
SET GLOBAL FOREIGN_KEY_CHECKS=0;
