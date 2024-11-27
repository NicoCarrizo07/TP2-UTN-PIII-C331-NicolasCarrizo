const equipoModel = require("../models/equipoModel.js")
const equiposModel = require("../models/equipoModel.js")


//controladores

//funcion para traer todos los equipos. READ -> GET . Es asyncrona pq pueda dar distintas respuestas,
//por el ejemplo si la base de datos esta caida
const traerEquipos = async(req,res) => {
    try {
        const equipos =await equiposModel.findAll()//Guarda en la variable equipos todo lo que esta en la tabla postModel
        res.json(equipos) // lo guarda y lo pasa a json
    } catch (error) {
        res.json({message:error.message}) // mensaje de error si lo hay
    }
}


//funcion para traer un posteo. READ -> GET . Es asyncrona pq pueda dar distintas respuestas,
//por el ejemplo si la base de datos esta caida
const traerEquipo = async(req,res) => { //en el req viaja el numero de id de la url que ponga
    try {
        const equipo =await equiposModel.findByPk(req.params.id) //req.params.nombre_variable -> router.get("/:nombre_variable",traerEquipo);
        
            if (!equipo) {
                return res.status(404).json({ message: "El equipo no existe" });
            }
            res.json(equipo)               //findByPk lo uso pq id en mi bdd es PK

    } catch (error) {
        res.json({message:error.message})
    }
}

//funcion para crear posteo(registro). create -> post
const crearEquipo = async(req,res) => {
    try {

        await equiposModel.create(req.body) //el formulario viene en el body del request
        res.json("Equipo creado correctamente");
        
    } catch (error) {
        res.json({message:error.message})
    }
}

//funcion para actualizar yn posteo(registro). UPDATE -> PUT
const actualizarEquipo = async(req,res) => {
    try {
                        //req.body donde esta el registro para actulizar
    await equiposModel.update(req.body,{where:{id:req.params.id}})    
                    //{where:{id:req.params.id} = hago match con el id de la base de datos y con el que le paso por parametro
    
    res.json("Equipo actualizado correctamente")

    } catch (error) {
        res.json({message:error.message})
    }

}

const borrarEquipo = async (req, res) => {
    try {
        // Verificar si el equipo existe antes de intentar borrarlo
        const equipo = await equipoModel.findByPk(req.params.id);

        if (!equipo) {
            return res.status(404).json({ message: "El equipo no se puede borrar porque no existe" });
        }

        // Si el equipo existe, proceder con la eliminación
        await equipoModel.destroy({ where: { id: req.params.id } });
        res.json("Equipo borrado correctamente");
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {traerEquipos,traerEquipo,crearEquipo,actualizarEquipo,borrarEquipo}