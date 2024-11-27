//conexion a la base de datos en este archivo , me permite escribir en lenguaje js y no bdd
const { Sequelize } = require('sequelize');

                    /* (nombre de la db ,  user ,contraseña , {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize("equiposdefutbol", "root", "2411", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

//bd contiene mis credenciales y la conexion a la bdd hasta llegar a las consultas
module.exports = db;
