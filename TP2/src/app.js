const express = require('express');
const cors = require('cors');
const db = require('./data/db.js'); // Conexión a la base de datos

const app = express();
const port = 3030;

const equipoRouter = require("./routes/equipoRouter.js")
const presidenteRouter = require("./routes/presidenteRouter.js");

//Middlewares
app.use(cors());
app.use(express.json());

// Ruta de pagina principal
app.get('/', (req, res) => {
    res.send('Pagina principal de mi API de futbol');
});

//modulo equipos
app.use('/equipos', equipoRouter)

//modulo presidentes
app.use("/presidentes", presidenteRouter);

//middleware para manejar error 404, agrego codigo html para agrandar el mensaje de error
app.use((req, res, next) => {
    res.status(404).send('<h1>404 - Página no encontrada </h1>');
});

//middleware para manejar errores generales
app.use((err, req, res, next) => {
    console.error(err.stack); // Muestra el error en la consola
    res.status(500).send('<h1>500 - Error del servidor</h1>');
});

//conexion a la base de datos
const conectarDB = async () => {
    try {
        await db.authenticate();
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};

// Servidor escuchando
app.listen(port, () => {
    conectarDB();
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
