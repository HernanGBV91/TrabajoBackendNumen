const express = require('express');
const router = express.Router(); 
const {vistaAlumnos, crearAlumno, vistaAlumnosPorEscuela, editarNombreAlumno, eliminarAlumno} = require('../controller/controller.js')
const { check, validationResult, body } = require ("express-validator")
const {validarId} = require("../middleware/validarId")

/* GET users listing. */
router.get('/ver', vistaAlumnos);
router.get('/ver/:school', vistaAlumnosPorEscuela);
router.post('/crear', [
            check("name").not().isEmpty().withMessage("se debe ingresar el nombre del alumno"),
            check("surname").not().isEmpty().withMessage("se debe ingresar el apellido del alumno"),
            check("dni").isLength(8).withMessage("el dni debe tener 8 digitos, sin puntos"),
], crearAlumno);
router.put("/editar/:id", editarNombreAlumno);
router.delete("/eliminar/:id", validarId, eliminarAlumno);

module.exports = router;
