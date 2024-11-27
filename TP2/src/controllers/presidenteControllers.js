const presidenteModel = require("../models/presidentesModel.js");
const equipoModel = require("../models/equipoModel.js");

const crearPresidente = async (req, res) => {
    try {

        //crea un nuevo presidente con los datos enviados en el cuerpo de la solicitud (req.body)
        const nuevoPresindente = await presidenteModel.create(req.body);

        //devuelve el nuevo presidente en formato JSON
        res.json(nuevoPresindente);
        

    } catch (error) {
        res.json({ message: error.message });
    }
};

const traerPresidentes = async (req, res) => {
    try {
        //obtengo todos los presidentes de la base de datos
        const presidentes = await presidenteModel.findAll();
        res.json(presidentes);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const traerPresidentePorId = async (req, res) => {
    try {
        //busca un presidente por su id e incluye los equipos asociados a este presidente
        const presidente = await presidenteModel.findByPk(req.params.id, {
        include: { model: equipoModel, as: "equipos" } // Incluye los equipos asociados al presidente
        
        });

        if (!presidente) {
            return res.status(404).json({ message: "Presidente no encontrado" });
        }

        res.json(presidente);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const borrarPresidente = async (req, res) => {
    try {
        await presidenteModel.destroy({ where: { id: req.params.id } });
        res.json("Presidente eliminado correctamente");
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { crearPresidente, traerPresidentes, traerPresidentePorId, borrarPresidente };
