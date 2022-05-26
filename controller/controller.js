const {check, validationResult, body } = require('express-validator');
const {Alumno} = require('../models/model')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaAlumnos = async (req, res) =>{
    const alumnos = await Alumno.find()
    res.json({alumnos})
}

const crearAlumno = async (req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
        const save = new Alumno(req.body);
        await save.save()
        res.status(201).json(save)
    } else {
        res.status(501).json(error)
    }
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el alumno"})
    }
}

const vistaAlumnosPorEscuela = async (req, res) => {
    try {
        const alumno = await Alumno.find(req.params)
        res.json({alumno}) 
    } catch (error) {
        res.status(400).json({error})
    }
}

const editarNombreAlumno = async (req, res) => {
    const {id} = req.params
    const name = req.body.name
    await Alumno.findByIdAndUpdate(id, req.body)
    res.status(202).json(name)
}   

const eliminarAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndDelete(req.params.id)
        res.json({alumno}) 
    } catch (error) {
        res.status(400).json({error})
    }
}


module.exports = {vistaUno, crearAlumno, vistaAlumnos, vistaAlumnosPorEscuela, editarNombreAlumno, eliminarAlumno}