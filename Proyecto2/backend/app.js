const express = require("express");
const app= express();
const mysql=require("mysql");
const cors=require("cors");
require("dotenv").config();

const{seleccionarpacientes,seleccionarhabitaciones,pacientesporcat,pacientesporhabit,pacientesporGenero,edadesmasatendidas,edadesmenosatendidas,HabitacionesMasUsadas,HabitacionesMenosUsadas,diaconmasPacientes}=require('./operaciones');

app.use(express.json());

const connection = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
});
app.use(cors());
connection.connect((err) =>{
if(err)throw err;
console.log("conexion establecida con la base de datos")
});

app.get("/",(req,res) =>{
    res.send("hello world");
});

app.get("/pacientes",(req,res) =>{
    seleccionarpacientes(connection,(result)=>{
        res.json(result);
    });
});

app.get("/Habitaciones",(req,res) =>{
    seleccionarhabitaciones(connection,(result)=>{
        res.json(result);
    });
});

app.get("/pacientesporcat",(req,res) =>{
    pacientesporcat(connection,(result)=>{
        res.json(result);
    });
});

app.get("/pacientesporhabit",(req,res) =>{
    pacientesporhabit(connection,(result)=>{
        res.json(result);
    });
});


app.get("/pacientesporGenero",(req,res) =>{
    pacientesporGenero(connection,(result)=>{
        res.json(result);
    });
});

app.get("/edadesmasatendidas",(req,res) =>{
    edadesmasatendidas(connection,(result)=>{
        res.json(result);
    });
});

app.get("/edadesmenosatendidas",(req,res) =>{
    edadesmenosatendidas(connection,(result)=>{
        res.json(result);
    });
});
app.get("/HabitacionesMasUsadas",(req,res) =>{
    HabitacionesMasUsadas(connection,(result)=>{
        res.json(result);
    });
});
app.get("/HabitacionesMenosUsadas",(req,res) =>{
    HabitacionesMenosUsadas(connection,(result)=>{
        res.json(result);
    });
});

app.get("/diaconmasPacientes",(req,res) =>{
    diaconmasPacientes(connection,(result)=>{
        res.json(result);
    });
});

app.listen(3000,() =>{
    console.log("servidor en puerto 3000...");
});