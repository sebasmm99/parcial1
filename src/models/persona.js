const mongoose = require('mongoose')
const personaSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('PersonaCollection', personaSchema)