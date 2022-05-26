const {Alumno} = require("../models/model")
const validarId = async (req, res, next) => {
    const alumno = await Alumno.findById(req.params.id)
    if (alumno.name !== null) {
        next ();
    } else {
        res.json({msg: "el id es incorrecto"})
    }
}

module.exports = {validarId}