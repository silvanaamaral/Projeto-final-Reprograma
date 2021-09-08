const mongoose = require('mongoose')
const Mime = require('mime-types')

const locaisSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
        trim: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'usuarios'
    },
    //foto: {
        //type: Mime.lookup('jpeg'),        
      //  required: false
    // },
    resumo: {
        type: String,
        required: true,
        trim: true
    },
    latitude:{ 
        type : Number,
        requerid: true
    },
    longitude:{ 
        type: Number,
        requerid: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
     }
})


module.exports = mongoose.model('locais', locaisSchema)

