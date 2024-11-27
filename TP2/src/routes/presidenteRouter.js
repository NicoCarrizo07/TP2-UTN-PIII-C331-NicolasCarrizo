const express = require('express');

//controladores
const {
    crearPresidente,
    traerPresidentes,
    traerPresidentePorId,
    borrarPresidente
} = require("../controllers/presidenteControllers.js");

const router = express.Router();

// rutas y controladores
router.post("/", crearPresidente);
router.get("/", traerPresidentes);
router.get("/:id", traerPresidentePorId);
router.delete("/:id", borrarPresidente);

module.exports = router;
