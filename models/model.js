const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    school: {
        type: String,
        required: true,    
    },
    name: {
        type: String,
        required: true,    
    },
    surname: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    residente: {
        type: Boolean,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    contactParent: {
        type: String,
        required: true,
    },
    contactParentPhone: {
        type: Number,
        required: true,
    },
});
const Alumno = mongoose.model('Alumno', storeSchema);

module.exports = {Alumno}