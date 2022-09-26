create database proyecto1_grupo13;
use proyecto1_grupo13;


CREATE TABLE `HABITACION` (
  `idHabitacion` int not null,
  `Habitacion` varchar(50),
  PRIMARY KEY (`idHabitacion`)
);
CREATE TABLE `LOG_Habitacion` (
  `timestampx` varchar(100),
  `statusx` varchar(45),
  `idHabitacion` int not NULL,
  PRIMARY KEY (`timestampx`),
  FOREIGN KEY(`idHabitacion`) REFERENCES  `HABITACION`(`idHabitacion`)
);
CREATE TABLE `PACIENTE` (
  `idPaciente` int not null,
  `edad` int not null,
  `genero` varchar(20),
  PRIMARY KEY (`idPaciente`)
);
CREATE TABLE `LOG_ACTIVIDAD` (
  `id_log_actividad` int not null,
  `timestampx` varchar(100),
  `actividad` varchar(500),
  `PACIENTE_idPaciente` int not null,
  `HABITACION_idHabitacion` int not null,
  PRIMARY KEY (`id_log_actividad`),
  FOREIGN KEY(`PACIENTE_idPaciente`) REFERENCES  `PACIENTE`(`idPaciente`),
  FOREIGN KEY(`HABITACION_idHabitacion`) REFERENCES  `HABITACION`(`idHabitacion`)
);



