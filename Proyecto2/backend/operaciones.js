const mysql=require("mysql");

function seleccionarpacientes(connection,callback){
    connection. query("select * from Paciente",function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function seleccionarhabitaciones(connection,callback){
    connection. query("select * from Habitacion",function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function pacientesporcat(connection,callback){
    let querycompleta="select 'Pediatrico' as categoria, count(*) as cant_pacientes from paciente"+
   " where edad < 18"+
    " union"+
    " select 'Mediana Edad' as categoria, count(*)as cant_pacientes from paciente"+
   " where edad >= 18 and edad <= 60"+
    " union"+
   " select 'Geriatrico' as categoria, count(*)as cant_pacientes from paciente"+
   " where edad > 60";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function pacientesporhabit(connection,callback){
    let querycompleta="SELECT distinct hab.idHabitacion,hab.Habitacion,"+
    " (select count(*) from log_actividad lac1 where lac1.HABITACION_idHabitacion=hab.idHabitacion) cant_pacientes"+ 
    " from log_actividad lac"+
    " inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion"+
    " order by hab.idHabitacion asc;"
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function pacientesporGenero(connection,callback){
    let querycompleta="select pac.genero,count(*) as cant_pacientes" +
    " from log_actividad lac"+
    " inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente"+
    " group by genero";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function edadesmasatendidas(connection,callback){
    let querycompleta="select pac.edad,count(*) as cant_pacientes"+
    " from log_actividad lac"+
    " inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente"+
    " group by edad"+
    " order by cant_pacientes desc"+
    " limit 5";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function edadesmenosatendidas(connection,callback){
    let querycompleta="select pac.edad,count(*) as cant_pacientes"+
    " from log_actividad lac"+
    " inner join paciente pac on pac.idPaciente=lac.PACIENTE_idPaciente"+
    " group by edad"+
    " order by cant_pacientes asc"+
    " limit 5";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function HabitacionesMasUsadas(connection,callback){
    let querycompleta="SELECT distinct hab.idHabitacion,hab.Habitacion, count(*) as cant_pacientes"+
    " from log_actividad lac"+
    " inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion"+
    " group by idHabitacion"+
    " order by cant_pacientes DESC"+
    " LIMIT 5";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}
function HabitacionesMenosUsadas(connection,callback){
    let querycompleta="SELECT distinct hab.idHabitacion,hab.Habitacion, count(*) as cant_pacientes"+
    " from log_actividad lac"+
    " inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion"+
    " group by idHabitacion"+
    " order by cant_pacientes asc"+
    " LIMIT 5";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}

function diaconmasPacientes(connection,callback){
    let querycompleta="SELECT distinct lac.timestampx, count(*) as cant_pacientes"+
    " from log_actividad lac"+
    " inner join habitacion hab on hab.idHabitacion=lac.HABITACION_idHabitacion"+
    " group by timestampx"+
    " order by cant_pacientes desc"+
    " LIMIT 1";
    connection. query(querycompleta,function(err,result){
        if(err) throw err;
        callback(result);
    });
}
module.exports={seleccionarpacientes,seleccionarhabitaciones,pacientesporcat,pacientesporhabit,pacientesporGenero,edadesmasatendidas,edadesmenosatendidas,HabitacionesMasUsadas,HabitacionesMenosUsadas,diaconmasPacientes};