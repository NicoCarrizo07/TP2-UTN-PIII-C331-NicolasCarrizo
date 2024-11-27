const express = require('express');

//controladores
const {traerEquipos,traerEquipo,crearEquipo,actualizarEquipo,borrarEquipo}= require("../controllers/equipoControllers.js");

//confirgurar las rutas express, metodos http
const router = express.Router();

// rutas y controladores
router.get("/",traerEquipos);
router.get("/:id",traerEquipo);
router.post("/",crearEquipo);
router.put("/:id",actualizarEquipo);
router.delete("/:id",borrarEquipo);


module.exports = router