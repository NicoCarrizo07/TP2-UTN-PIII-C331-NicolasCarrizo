//manejo de la tabla dentro de este archivo equipoModel.js 
//importo la bdd
const db= require("../data/db.js");

//DataTypes para llevarlo a lenguaje codigo
const {DataTypes} = require("sequelize")

const presidenteModel = require("./presidentesModel.js");

//define = para reprensar la tabla dentro de la bdd
/* nombre de la tabla y defino sus columnas y tipos de datos */
const equipoModel = db.define("equipos",{
    nombre : {type:DataTypes.STRING},
    categoria : {type:DataTypes.STRING},
    pais : {type:DataTypes.STRING},
    estadio : {type:DataTypes.STRING},
    estado : {type:DataTypes.STRING}
})

equipoModel.belongsTo(presidenteModel, { foreignKey: "id", as: "presidentes" });
presidenteModel.hasMany(equipoModel, { foreignKey: "id", as: "equipos" });

module.exports = equipoModel



