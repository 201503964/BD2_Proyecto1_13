use practica2;
##### cantidad pacientes por categorio#####
select 'Pediatrico' as categoria, count(*) from paciente
where edad < 18
union
select 'Mediana Edad' as categoria, count(*) from paciente
where edad >= 18 and edad <= 60
union
select 'Geriatrico' as categoria, count(*) from paciente
where edad > 60;
#########MONGO##########
##db.Paciente.find({edad:{$lte:17}}).count()
##db.Paciente.find({edad:{$gte:18,$lte:60}}).count()
##db.Paciente.find({edad:{$gte:61}}).count()
########################################################################
####### CANTIDAD DE PACIENTES POR HABITACION ########
SELECT distinct hab.idHabitacion,hab.Habitacion,
(select count(*) from log_actividad lac1 where lac1.HABITACION_idHabitacion=hab.idHabitacion) cant_pacientes
 from log_actividad lac
inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion
order by hab.idHabitacion asc;
########################################################################
####### CANTIDAD DE PACIENTES POR GENERO ########
select pac.genero,count(*) as cant_pacientes
from log_actividad lac
inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente
 group by genero;
########################################################################
####### TOP 5 edades mas atendidas ########
select pac.edad,count(*) as cant_pacientes
from log_actividad lac
inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente
 group by edad
 order by cant_pacientes desc
 limit 5;
########################################################################

####### TOP 5 edades mas atendidas ########
select pac.edad,count(*) as cant_pacientes
from log_actividad lac
inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente
 group by edad
 order by cant_pacientes asc
 limit 5;
########################################################################
#######TOP 5 HABITACIONES MAS USADAS ########
SELECT distinct hab.idHabitacion,hab.Habitacion, count(*) as cant_pacientes
from log_actividad lac
inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion
group by idHabitacion
order by cant_pacientes DESC
LIMIT 5;
########################################################################
#######TOP 5 HABITACIONES MENOS USADAS ########
SELECT distinct hab.idHabitacion,hab.Habitacion, count(*) as cant_pacientes
from log_actividad lac
inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion
group by idHabitacion
order by cant_pacientes asc
LIMIT 5;
########################################################################
#######dias con mas pacientes########
SELECT distinct lac.timestampx, count(*) as cant_pacientes
from log_actividad lac
inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion
group by timestampx
order by cant_pacientes desc
LIMIT 1;
########################################################################