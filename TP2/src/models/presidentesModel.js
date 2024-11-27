const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const presidenteModel = db.define("presidentes", {
    name: {type:DataTypes.STRING},
    surname: {type:DataTypes.STRING}
});

module.exports = presidenteModel;
