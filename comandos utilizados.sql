LOAD DATA 
LOCAL INFILE 'C:/Users/luiss/OneDrive/Escritorio/ArchivosPractica2/Pacientes.csv' 
INTO TABLE paciente
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES;

SELECT * FROM paciente LIMIT 20;
SELECT * FROM habitacion LIMIT 20;
SELECT * FROM log_actividad LIMIT 20;
SELECT * FROM log_habitacion LIMIT 20;

SELECT * FROM paciente ORDER BY idPaciente DESC LIMIT 20;
SELECT * FROM habitacion ORDER BY idHabitacion DESC LIMIT 20;
SELECT * FROM log_actividad ORDER BY id_log_actividad DESC LIMIT 20;
SELECT * FROM log_habitacion ORDER BY timestampx DESC LIMIT 20;

SELECT COUNT(*) FROM paciente;
SELECT COUNT(*) FROM habitacion;
SELECT COUNT(*) FROM log_actividad;
SELECT COUNT(*) FROM log_habitacion;


